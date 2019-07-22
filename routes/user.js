var express = require('express');
var router = express.Router();
var user = require('../controller/UserController');
var token = require('../controller/TokenController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', user.register);
router.post('/login', user.login);

router.get('/logout', token.verify(), user.logout);
router.get('/private', token.verify(), user.private);

router.get('/admin', token.verify(['admin']), user.admin);

module.exports = router;
