express = require 'express'
jwt = require 'jsonwebtoken'
uuid = require 'node-uuid'
Barang = require '../models/User'
Logger = require '../utils/Logger'
nodemailer = require 'nodemailer'
bcrypt = require 'bcrypt'
passport = require 'passport'
LocalStrategy = require('passport-local').Strategy
router = express.Router()

transporter = nodemailer.createTransport(
    service: 'gmail'
    auth:
        user: 'perpustakaanonline2015@gmail.com'
        pass: 'penelitianilmiah'
)

passport.serializeUser (user, done) ->
    done(null, user)

passport.deserializeUser (user, done) ->
    done(null, user)

passport.use new LocalStrategy((username, password, done) ->
    User.findOne { email: username }, (err, user) ->
        return done(err) if err

        unless user
            return done(null, false,
                'message': 'email anda salah'
            )

        bcrypt.compare password, user.password, (err, res) ->
            unless user.enable is true
                return done(null, false,
                    'message': 'email belum verifikasi'
                )
            unless res is true
                return done(null, false,
                    'message': 'password anda salah'
                )
            done null, user
)

router.post '/register', (req, res, next) ->

    bcrypt.genSalt 10, (err, salt) ->
        bcrypt.hash req.body.password, salt, (err, hash) ->
            user = new User(
                email: req.body.email
                nama: req.body.nama
                password: hash
            )

            user.save (err) ->
                return res.json(err) if err

                transporter.sendMail(
                    from: 'perpustakaanonline2015@gmail.com'
                    to: req.body.email
                    subject: 'Verifikasi Email'
                    html: 'Silahkan verifikasi melalui alamat berikut : <a href="http://localhost:3000/api/user/Verifikasi/' + req.body.email + '">Aplikasi Post Status</a>'
                )

                res.json
                    success: true
                    message: 'Anda Berhasil SignUp'

router.post '/authenticate', (req, res) ->
    passport.authenticate('local', (err, user, info) ->
        return res.status(500).json(err) if err

        unless user
            return res.status(401).json(info)

        req.logIn user, (err) ->
            return res.status(500).json(err) if err

            profile =
                email: user.email
                nama: user.nama

            token = jwt.sign profile, 'rizki', expiresInMinutes: 60 * 5

            res.json
                message: 'berhasil login'
                token: token
                email: user.email
                nama: user.nama
                success: true
    ) req, res

module.exports = router
