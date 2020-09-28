const express = require('express');
const router = express.Router();
// var connection = require('../config/connection')


router.get('/', function(req, res, next) {
  res.render('product_canned', { title: 'Express' });
});


module.exports = router;