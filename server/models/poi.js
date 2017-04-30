'use strict';
let connection = require('../../db_connection');
var db = connection.db;
exports.savePoi = (body) =>{
	return new Promise((resolve, reject)=>{
		db.poi.insert(body,(err, result)=>{
			if(err){
				return reject(err);
			}
			return resolve(result);
		})
	});
}
exports.getPoi = ()=> {
  return new Promise((resolve, reject)=> {
      db.poi.find({},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
}