var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var FakturPembelian = require("../model/FakturPembelian");

router.post("/fakturbeli", function(req, res) {
  FakturPembelian.create(
    {
      nomor_transaksi: req.body.nomor_transaksi,
      nama_supplier: req.body.nama_supplier,
      email: req.body.email,
      alamat_penagihan: req.body.alamat_penagihan,
      tanggal_transaksi: req.body.tanggal_transaksi,
      tanggal_jatuh_tempo: req.body.tanggal_jatuh_tempo,
      syaratpembayaran: req.body.syaratpembayaran,
      subtotal: req.body.subtotal,
      diskonperbaris: req.body.diskonperbaris,
      pajak: req.body.pajak,
      sisatagih: req.body.sisatagih,
      infotambahan: req.body.infotambahan
    },
    function(err, data) {
      if (err)
        return res
          .status(500)
          .send("There was a problem adding the information to the database.");
      res.status(200).send(data);
    }
  );
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get("/fakturbeli", function(req, res) {
  FakturPembelian.find({}, function(err, data) {
    if (err)
      return res.status(500).send("There was a problem finding the data.");
    res.status(200).send(data);
  });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get("/fakturbeli/:id", function(req, res) {
  FakturPembelian.findById(req.params.id, function(err, data) {
    if (err)
      return res.status(500).send("There was a problem finding the data.");
    if (!data) return res.status(404).send("No data found.");
    res.status(200).send(data);
  });
});

// DELETES A USER FROM THE DATABASE
router.delete("/fakturbeli/:id", function(req, res) {
  FakturPembelian.findByIdAndRemove(req.params.id, function(err, data) {
    if (err)
      return res.status(500).send("There was a problem deleting the data.");
    res.status(200).send("Data: " + data.nama_transaksi + " was deleted.");
  });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.patch("/fakturbeli/:id", function(req, res) {
  FakturPembelian.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    function(err, data) {
      if (err)
        return res.status(500).send("There was a problem updating the data.");
      res.status(200).send(data);
    }
  );
});

module.exports = router;
