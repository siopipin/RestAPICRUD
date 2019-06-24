var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var AktivitasTransaksi = require("../model/AktivitasTransaksi");

router.post("/aktivitastransaksi", function(req, res) {
  AktivitasTransaksi.create(
    {
      nama_aktivitas: req.body.nama_aktivitas,
      kode: req.body.kode,
      tujuan: req.body.tujuan,
      asal: req.body.asal,
      nominal: req.body.nominal,
      tanggal_transaksi: req.body.tanggal_transaksi
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
router.get("/aktivitastransaksi", function(req, res) {
  AktivitasTransaksi.find({}, function(err, data) {
    if (err)
      return res.status(500).send("There was a problem finding the data.");
    res.status(200).send(data);
  });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get("/aktivitastransaksi/:id", function(req, res) {
  AktivitasTransaksi.findById(req.params.id, function(err, data) {
    if (err)
      return res.status(500).send("There was a problem finding the data.");
    if (!data) return res.status(404).send("No data found.");
    res.status(200).send(data);
  });
});

// DELETES A USER FROM THE DATABASE
router.delete("/aktivitastransaksi/:id", function(req, res) {
  AktivitasTransaksi.findByIdAndRemove(req.params.id, function(err, data) {
    if (err)
      return res.status(500).send("There was a problem deleting the data.");
    res.status(200).send("Data: " + data.nama_transaksi + " was deleted.");
  });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put("/aktivitastransaksi/:id", function(req, res) {
  AktivitasTransaksi.findByIdAndUpdate(
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
