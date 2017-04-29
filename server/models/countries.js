'use strict';
let connection = require('../../db_connection');
var db = connection.db;
exports.getCountries = ()=> {
  return new Promise((resolve, reject)=> {
      db.public.country.find({},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
}