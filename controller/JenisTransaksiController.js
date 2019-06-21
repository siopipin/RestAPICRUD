var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var JenisTransaksi = require("../model/JenisTransaksi");

router.post("/jenistransaksi", function(req, res) {
  JenisTransaksi.create(
    {
      nama_transaksi: req.body.nama_transaksi,
      kode: req.body.kode,
      saldo: req.body.saldo
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
router.get("/jenistransaksi", function(req, res) {
  JenisTransaksi.find({}, function(err, data) {
    if (err)
      return res.status(500).send("There was a problem finding the data.");
    res.status(200).send(data);
  });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get("/jenistransaksi/:id", function(req, res) {
  JenisTransaksi.findById(req.params.id, function(err, dana) {
    if (err)
      return res.status(500).send("There was a problem finding the data.");
    if (!dana) return res.status(404).send("No data found.");
    res.status(200).send(data);
  });
});

// DELETES A USER FROM THE DATABASE
router.delete("/jenistransaksi/:id", function(req, res) {
  JenisTransaksi.findByIdAndRemove(req.params.id, function(err, data) {
    if (err)
      return res.status(500).send("There was a problem deleting the data.");
    res.status(200).send("Data: " + data.nama_transaksi + " was deleted.");
  });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put("/jenistransaksi/:id", function(req, res) {
  JenisTransaksi.findByIdAndUpdate(
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
