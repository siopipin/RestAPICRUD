var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var RingkasBeli = require("../model/RingkasanPembelian");

router.post("/ringkasbeli", function(req, res) {
  RingkasBeli.create(
    {
      nama_ringkasan: req.body.nama_ringkasan,
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
router.get("/ringkasbeli", function(req, res) {
  RingkasBeli.find({}, function(err, data) {
    if (err)
      return res.status(500).send("There was a problem finding the data.");
    res.status(200).send(data);
  });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get("/ringkasbeli/:id", function(req, res) {
  RingkasBeli.findById(req.params.id, function(err, data) {
    if (err)
      return res.status(500).send("There was a problem finding the data.");
    if (!data) return res.status(404).send("No data found.");
    res.status(200).send(data);
  });
});

// DELETES A USER FROM THE DATABASE
router.delete("/ringkasbeli/:id", function(req, res) {
  RingkasBeli.findByIdAndRemove(req.params.id, function(err, data) {
    if (err)
      return res.status(500).send("There was a problem deleting the data.");
    res.status(200).send("Data: " + data.nama_transaksi + " was deleted.");
  });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put("/ringkasbeli/:id", function(req, res) {
  RingkasBeli.findByIdAndUpdate(
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
