const express = require('express');
const router = express.Router();


router.get('/', function(req, res, next) {
    res.render('product_juice', { title: 'Express' });
  });

module.exports = router;