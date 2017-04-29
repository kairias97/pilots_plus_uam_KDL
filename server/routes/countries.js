const express   = require('express');
const router    = express.Router({mergeParams: true});
let countryController = require('../controllers/countriesController');
router.route('/')
	.get(countryController.getAllCountries);
router.route('/airports')
	.get(countryController.getCountriesAndAirports);
module.exports = router;