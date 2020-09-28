const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const contactRoutes = require('../routes/contact');
const aboutRoutes = require('../routes/about');
const certifyRoutes = require('../routes/certification');
const shopRoutes = require('../routes/shop');
const organicRoutes = require('../routes/organic');
const nonOrganicRoutes = require('../routes/non_organic');

const proJuiceRoutes = require('../routes/product_juice');
const proSpiceRoutes = require('../routes/product_spice');
const proCannedRoutes = require('../routes/product_canned');
const proCoconutRoutes = require('../routes/product_coconut');
const proDehydratedRoutes = require('../routes/product_dehydrated');

const proEssentialRoutes = require('../routes/product_essential');
const proRecyRoutes = require('../routes/product_recy');
const proGardningRoutes = require('../routes/product_gardning');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/contact', contactRoutes);
router.use('/about', aboutRoutes);
router.use('/certification', certifyRoutes);
router.use('/shop', shopRoutes);
router.use('/organic', organicRoutes);
router.use('/non_organic', nonOrganicRoutes);
router.use('/product_juice', proJuiceRoutes);
router.use('/product_spice', proSpiceRoutes);
router.use('/product_canned', proCannedRoutes);
router.use('/product_coconut', proCoconutRoutes);
router.use('/product_dehydrated', proDehydratedRoutes);
router.use('/product_essential', proEssentialRoutes);
router.use('/product_recy', proRecyRoutes);
router.use('/product_gardning', proGardningRoutes);

module.exports = router;
