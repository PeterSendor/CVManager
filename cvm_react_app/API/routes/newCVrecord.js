var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');

router.use(bodyParser.json()); 
router.use(bodyParser.urlencoded({ extended: true })); 

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password  : 'phero01?!',     
  database : 'CVManager'  
});

connection.connect();

router.post ('/', function (req, res) {
    
let newCVdataPack = [req.body.corresponding_user, req.body.position, req.body.company, req.body.time]; 
console.log("log"+JSON.stringify(newCVdataPack))

connection.query ('INSERT INTO cv_records (corresponding_user, position, company, time) VALUES (?)', [newCVdataPack], function (err, result) {
    if (err) throw err;
    console.log(result);
})

})

module.exports = router;
