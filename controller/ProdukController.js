var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Produk = require("../model/produk");

router.post("/produk", function(req, res) {
  Produk.create(
    {
      namaproduk: req.body.namaproduk,
      kodeproduk: req.body.kodeproduk,
      unit: req.body.unit,
      deskripsi: req.body.deskripsi,
      beliproduk: req.body.beliproduk,
      jualproduk: req.body.jualproduk
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
router.get("/produk", function(req, res) {
  Produk.find({}, function(err, data) {
    if (err)
      return res.status(500).send("There was a problem finding the data.");
    res.status(200).send(data);
  });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get("/produk/:id", function(req, res) {
  Produk.findById(req.params.id, function(err, data) {
    if (err)
      return res.status(500).send("There was a problem finding the data.");
    if (!data) return res.status(404).send("No data found.");
    res.status(200).send(data);
  });
});

// DELETES A USER FROM THE DATABASE
router.delete("/produk/:id", function(req, res) {
  Produk.findByIdAndRemove(req.params.id, function(err, data) {
    if (err)
      return res.status(500).send("There was a problem deleting the data.");
    res.status(200).send("Data: " + data.nama_transaksi + " was deleted.");
  });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.patch("/produk/:id", function(req, res) {
  Produk.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(
    err,
    data
  ) {
    if (err)
      return res.status(500).send("There was a problem updating the data.");
    res.status(200).send(data);
  });
});

module.exports = router;
