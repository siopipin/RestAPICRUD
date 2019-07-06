var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Order = require("../model/AktivitasTransaksi");

router.post("/order", function (req, res) {
    Order.create(
        {
            id_order: req.body.id_order,
            tanggal_mulai: req.body.tanggal_mulai,
            tanggal_selesai: req.body.tanggal_selesai,
            status: req.body.status,
            date_time: req.body.date_time,
            nama_customer: req.body.nama_customer,
            email_customer: req.body.email_customer,
            alamat_customer: req.body.alamat_customer,
            spk_status: req.body.spk_status,
            products: [
                {
                    id_produk: req.body.id_produk,
                    nama_produk: req.body.nama_produk,
                    nama_bahan: req.body.nama_bahan,
                    harga: req.body.harga,
                    durasi: req.body.durasi,
                    posisi_gigi: req.body.posisi_gigi,
                    approve_spv: req.body.approve_spv,

                }
            ],
            workers: [
                {
                    id_worker: req.body.id_worker,
                    nama_worker: req.body.nama_worker,
                    email_worker: req.body.email_worker,
                    status_worker: req.body.status_worker,
                }
            ]
        },
        function (err, data) {
            if (err)
                return res
                    .status(500)
                    .send("There was a problem adding the information to the database.");
            res.status(200).send(data);
        }
    );
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get("/order", function (req, res) {
    Order.find({}, function (err, data) {
        if (err)
            return res.status(500).send("There was a problem finding the data.");
        res.status(200).send(data);
    });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get("/order/:id", function (req, res) {
    Order.findById(req.params.id, function (err, data) {
        if (err)
            return res.status(500).send("There was a problem finding the data.");
        if (!data) return res.status(404).send("No data found.");
        res.status(200).send(data);
    });
});

// DELETES A USER FROM THE DATABASE
router.delete("/order/:id", function (req, res) {
    Order.findByIdAndRemove(req.params.id, function (err, data) {
        if (err)
            return res.status(500).send("There was a problem deleting the data.");
        res.status(200).send("Data: " + data.nama_transaksi + " was deleted.");
    });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put("/order/:id", function (req, res) {
    Order.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        function (err, data) {
            if (err)
                return res.status(500).send("There was a problem updating the data.");
            res.status(200).send(data);
        }
    );
});

module.exports = router;
