const express   = require('express');
const router    = express.Router({mergeParams: true});
let countryController = require('../controllers/countriesController');
router.route('/')
	.get(countryController.getAllCountries);
module.exports = router;