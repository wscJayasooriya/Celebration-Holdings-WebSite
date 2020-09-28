const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('non_organic', { title: 'Express' });
  });


module.exports = router;