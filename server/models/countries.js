'use strict';
let connection = require('../../db_connection');
var db = connection.db;
exports.getCountries = ()=> {
  return new Promise((resolve, reject)=> {
      db.country.find({},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.getCountriesAndAirports = ()=> {
  return new Promise((resolve, reject)=> {
      db.get_all_countries((err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};