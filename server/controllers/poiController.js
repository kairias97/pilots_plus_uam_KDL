'use strict';

let Poi = require('../models/poi');
exports.getAllPoi = function(req, res, next){
	Poi.getPoi()
		.then(result => {
    		return res.json({ poi: result });
  		})
  		.catch(err => {
    		return next(err);
  		});
}
exports.savePoi = function(req, res, next){
	let body = req.body;
	console.log(body);
	Poi.savePoi(body)
		.then(result => {
			return res.json(result);
		})
		.catch(err => {
			return next(err);
		});
}
