const express = require('express');
const router = express.Router();


router.get('/', function(req, res, next) {
    res.render('product_dehydrated', { title: 'Express' });
  });

module.exports = router;