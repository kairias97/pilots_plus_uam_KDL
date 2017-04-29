'use strict';

var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

let jsonp = JSON.parse(fs.readFileSync(__dirname+'/../../package.json', 'utf8'));

let indexRoute = router.get('/',(req,res)=>{
	res.json({
		'name' : jsonp.name,
		'version':jsonp.version
	});
});

//router.use('/users',auth, require('./users'));
//router.use('/modules', auth, require('./modules'));


module.exports = {
	indexRoute : indexRoute
}