'use strict';
let connection = require('../../db_connection');
var db = connection.db;
exports.getAirports = ()=> {
  return new Promise((resolve, reject)=> {
      db.airport.find({},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
}