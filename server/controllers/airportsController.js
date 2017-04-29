'use strict';

let Airport = require('../models/airports');
exports.getAllAirports = function(req, res, next){
	Airport.getAirports()
		.then(result => {
    		return res.json({ airports: result });
  		})
  		.catch(err => {
    		return next(err);
  		});
}