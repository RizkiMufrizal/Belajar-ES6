express = require 'express'
uuid = require 'node-uuid'
Barang = require '../models/Barang'
Logger = require '../utils/Logger'
router = express.Router()

require 'mongoose-simple-paging'

router.get '/barang', (req, res) ->
    
    page = req.query.page
    size = parseInt req.query.size

    Barang.find().paginate page, size, (err, barangs, pagination) ->

        if err
            Logger.error 'ambil data error bung', err
            res.json
                success: false
                info: 'ambil data error bung'

        Logger.debug 'ambil data berhasil', barangs
        res.json
            docs: barangs
            pagination: pagination

router.post '/barang', (req, res) ->
    barang = new Barang
        idBarang: uuid.v4()
        namaBarang: req.body.namaBarang
        hargaBarang: req.body.hargaBarang
        tanggalKadaluarsa: req.body.tanggalKadaluarsa

    barang.save (err, barang) ->

        if err
            Logger.error 'simpan data error bung', err
            res.json
                success: false,
                info: 'simpan data error bung'

        Logger.debug 'simpan data berhasil', barang
        res.json
            success: true
            info: 'data berhasil disimpam'

router.put '/barang/:idBarang', (req, res) ->

    idBarang = req.params.idBarang

    Barang.findOne {
        idBarang: idBarang
    }, (err, barang) ->

        if err
            Logger.error 'error bung ', err
            res.json
                success: false
                info: 'error bung'

        barang.namaBarang = req.body.namaBarang
        barang.hargaBarang = req.body.hargaBarang
        barang.tanggalKadaluarsa = req.body.tanggalKadaluarsa
        barang.save()

        Logger.debug 'data berhasil diupdate', barang

        res.json
            success: true
            info: 'data berhasil diupdate'

router.delete '/barang/:idBarang', (req, res) ->
    Barang.remove {
        idBarang: req.params.idBarang
    }, (err) ->
        if err
            Logger.error 'error bung ', err
            return res.json(
                success: false
                info: 'error bung')
        Logger.debug 'data berhasil dihapus'
        res.json
            success: true
            info: 'data berhasil dihapus'

module.exports = router
