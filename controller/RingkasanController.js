var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Ringkasan = require("../model/RingkasanDana");

router.post("/ringkasan", function(req, res) {
  Ringkasan.create(
    {
      namadana: req.body.namadana,
      nilai: req.body.nilai
    },
    function(err, dana) {
      if (err)
        return res
          .status(500)
          .send("There was a problem adding the information to the database.");
      res.status(200).send(dana);
    }
  );
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get("/ringkasan", function(req, res) {
  Ringkasan.find({}, function(err, dana) {
    if (err)
      return res.status(500).send("There was a problem finding the dana.");
    res.status(200).send(dana);
  });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get("/ringkasan/:id", function(req, res) {
  Ringkasan.findById(req.params.id, function(err, dana) {
    if (err)
      return res.status(500).send("There was a problem finding the dana.");
    if (!dana) return res.status(404).send("No user found.");
    res.status(200).send(dana);
  });
});

// DELETES A USER FROM THE DATABASE
router.delete("/ringkasan/:id", function(req, res) {
  Ringkasan.findByIdAndRemove(req.params.id, function(err, dana) {
    if (err)
      return res.status(500).send("There was a problem deleting the user.");
    res.status(200).send("Dana: " + dana.namadana + " was deleted.");
  });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put("/ringkasan/:id", function(req, res) {
  Ringkasan.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(
    err,
    dana
  ) {
    if (err)
      return res.status(500).send("There was a problem updating the dana.");
    res.status(200).send(dana);
  });
});

module.exports = router;
