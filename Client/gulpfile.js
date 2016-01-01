'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var minifyHTML = require('gulp-minify-html');
var clean = require('gulp-clean');
var gulpSequence = require('gulp-sequence');
var WebpackDevServer = require('webpack-dev-server');

//begin development

gulp.task('webpack-dev', function(callback) {

  var compiler = webpack({
    context: __dirname + '/src',
    entry: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:9000',
      './app.js',
      './index.html'
    ],
    output: {
      path: __dirname + '/src',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        }, {
          test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|ico)$/,
          loader: 'file'
        }, {
          test: /\.html$/,
          exclude: /node_modules/,
          loader: 'raw'
        },
        {
          test: /\.scss$/,
          loader: 'style!css!sass'
        }, {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        }
      ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        include: /\.min\.js$/,
        minimize: true,
        compress: {
          warnings: false
        }
      }),
      new webpack.HotModuleReplacementPlugin()
    ]

  });

  new WebpackDevServer(compiler, {
    hot: true,
    contentBase: './src/',
    proxy: [
      {
        path: '/api/*',
        target: 'http://localhost:3000'
      }, {
        path: '/authenticate',
        target: 'http://localhost:3000'
      }, {
        path: '/register',
        target: 'http://localhost:3000'
      }
    ],
    stats: {
      colors: true
    }
  }).listen(9000, 'localhost', function(err) {
    if (err)
      throw new gutil.PluginError('webpack-dev-server', err);
    gutil.log('[webpack-dev-server]', 'http://localhost:9000');

  });
});

gulp.task('server', ['webpack-dev']);

//end development

//begin production

gulp.task('minify-html', function() {
  gulp.src('src/*.html')
    .pipe(minifyHTML({
      empty: true
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('clean', function() {
  return gulp.src('dist', {
    read: false
  })
    .pipe(clean());
});

gulp.task('webpack-pro', function(callback) {
  webpack({
    context: __dirname + '/app',
    entry: './app.js',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.min.js',
      chunkFilename: '[id].bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        }, {
          test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|ico)$/,
          loader: 'file'
        }, {
          test: /\.html$/,
          exclude: /node_modules/,
          loader: 'raw'
        }, {
          test: /\.scss$/,
          loader: 'style!css!sass'
        }, {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        }
      ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        include: /\.min\.js$/,
        minimize: true,
        compress: {
          warnings: false
        }
      })
    ]
  }, function(err, stats) {
    if (err)
      throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString({

    }));
    callback();
  });
});

gulp.task('server-build', function() {
  connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('build', gulpSequence('clean', 'webpack', 'minify-html'));

//end production
