const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('privacy_policy', { title: 'Express' });
  });


module.exports = router;