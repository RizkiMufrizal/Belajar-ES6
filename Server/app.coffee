http = require 'http'
express = require 'express'
path = require 'path'
morgan = require 'morgan'
methodOverride = require 'method-override'
expressSession = require 'express-session'
bodyParser = require 'body-parser'
errorhandler = require 'errorhandler'
mongoose = require 'mongoose'
cookieParser = require 'cookie-parser'
csrf = require 'csurf'
jwt = require 'jsonwebtoken'
expressJwt = require 'express-jwt'
Logger = require './utils/Logger'
BarangRoute = require './routes/BarangRoute'

app = express()

app.set 'port', process.env.PORT or 3000
app.set 'views', path.join __dirname, 'views'
app.set 'view engine', 'ejs'

app.use cookieParser()
app.use csrf
    cookie: true

app.use (req, res, next) ->
    res.cookie 'XSRF-TOKEN', req.csrfToken()
    next()

app.use morgan('combined', stream: Logger.stream)

app.use methodOverride()
app.use expressSession
    resave: true
    saveUninitialized: true
    secret: 'uwotm8'

app.use bodyParser.json()
app.use bodyParser.urlencoded
    extended: true

app.use '/api', BarangRoute

mongoose.connect 'mongodb://localhost/BelajarES6', (err) ->
    if err
        Logger.error 'koneksi mongodb gagal bung', err
    else
        Logger.info 'koneksi mongodb berhasil bung'

if 'development' == app.get('env')
    app.use errorhandler()

app.use (err, req, res, next) ->
    if err.code != 'EBADCSRFTOKEN'
        return next err

    ##handle CRSF Token Errors
    res.status 403
    res.json
        success: false
        info 'token scrf tidak tersedia bung'

server = http.createServer app
server.listen app.get('port'), ->
    Logger.info "server jalan pada http://127.0.0.1:#{app.get 'port'}"
