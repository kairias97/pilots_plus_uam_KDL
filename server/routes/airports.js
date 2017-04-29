const express   = require('express');
const router    = express.Router({mergeParams: true});
let airportController = require('../controllers/airportsController');
router.route('/')
	.get(airportController.getAllAirports);
module.exports = router;