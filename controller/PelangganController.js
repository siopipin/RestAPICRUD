var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var User = require("../model/Pelanggan");

// CREATES A NEW USER
router.post("/pelanggan", function(req, res) {
  User.create(
    {
      nama: req.body.nama,
      email: req.body.email,
      mobile: req.body.mobile,
      nomor_telepon: req.body.nomor_telepon,
      akun_hutang: req.body.akun_hutang,
      akun_piutang: req.body.akun_piutang,
      syarat_pembayaran_utama: req.body.syarat_pembayaran_utama,
      alamat_penagihan: req.body.alamat_penagihan,
      alamat_pengiriman: req.body.alamat_pengiriman,
    },
    function(err, user) {
      if (err)
        return res
          .status(500)
          .send("There was a problem adding the information to the database.");
      res.status(200).send(user);
    }
  );
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get("/pelanggan", function(req, res) {
  User.find({}, function(err, users) {
    if (err)
      return res.status(500).send("There was a problem finding the users.");
    res.status(200).send(users);
  });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get("/pelanggan/:id", function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err)
      return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    res.status(200).send(user);
  });
});

// DELETES A USER FROM THE DATABASE
router.delete("/pelanggan/:id", function(req, res) {
  User.findByIdAndRemove(req.params.id, function(err, user) {
    if (err)
      return res.status(500).send("There was a problem deleting the user.");
    res.status(200).send("User: " + user.name + " was deleted.");
  });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put("/pelanggan/:id", function(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(
    err,
    user
  ) {
    if (err)
      return res.status(500).send("There was a problem updating the user.");
    res.status(200).send(user);
  });
});

module.exports = router;
