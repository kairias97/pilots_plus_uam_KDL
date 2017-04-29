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
exports.getCountriesAndAirports = function(req, res, next){
	Country.getCountriesAndAirports()
		.then(result => {
    		return res.json(result[0].get_all_countries);
  		})
  		.catch(err => {
    		return next(err);
  		});
}