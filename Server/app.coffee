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
app.use csrf(
    cookie: true
)
app.use (req, res, next) ->
    res.cookie 'XSRF-TOKEN', req.csrfToken()
    next()

    
