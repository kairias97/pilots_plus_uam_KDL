'use strict';

let Country = require('../models/countries');
exports.getAllCountries = function(req, res, next){
	Country.getCountries()
		.then(result => {
    		return res.json({ countries: result });
  		})
  		.catch(err => {
    		return next(err);
  		});
}