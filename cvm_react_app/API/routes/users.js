var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var mysql = require('mysql');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password  : 'phero01?!',     
  database : 'CVManager'  
});
 
connection.connect();

router.get('/', function(req, res, next) {
  var q = 'select * from users'

connection.query(q, function (err, result, fields) {
  if (err) throw err; 
  console.log(result + " user/s")
  
})  


});

module.exports = router;
