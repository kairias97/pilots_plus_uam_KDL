const express   = require('express');
const router    = express.Router({mergeParams: true});
let poiController = require('../controllers/poiController');
router.route('/')
	.get(poiController.getAllPoi)
	.post(poiController.savePoi);
module.exports = router;