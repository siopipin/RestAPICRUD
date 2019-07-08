const mongoose = require("mongoose");
var SkemaAktivitasTransaksi = new mongoose.Schema({
    id_order: String,
    tanggal_mulai: Date,
    tanggal_selesai: Date,
    status: Boolean,
    date_time: Date,
    nama_customer: String,
    email_customer: String,
    alamat_customer: String,
    spk_status: Boolean,
    products: [
        {
            id_produk: String,
            nama_produk: String,
            nama_bahan: String,
            harga: Number,
            durasi: Number,
            posisi_gigi: Boolean,
            approve_spv: Boolean
        }
    ],
    workers: [
        {
            id_worker: String,
            nama_worker: String,
            email_worker: String,
            status_worker: Boolean
        }
    ]
},
);

mongoose.model("SimbioOrder", SkemaAktivitasTransaksi);
module.exports = mongoose.model("SimbioOrder");
