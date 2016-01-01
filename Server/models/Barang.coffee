mongoose = require 'mongoose'
Schema = mongoose.Schema

barang = new Schema({
    idBarang:
        type: 'String'
        required: true
    namaBarang:
        type: 'String'
        required: true
    hargaBarang:
        type: 'Number'
        required: true
    tanggalKadaluarsa:
        type: 'Date'
        required: true
    }, collection: 'tb_barang')

module.exports = mongoose.model 'Barang', barang
