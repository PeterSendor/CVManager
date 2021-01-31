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
    
    connection.query('select login from users', function (err, result) {
        if (err) throw err; 
        let login = result.find(element => element = req.body.login)
        console.log(login.login)
        console.log(req.body.login)

        if (login.login === req.body.login) {
            res.send({info: "Sorry! Provided username already exists, please choose another login"})
        } else {
            res.send({info: "You have been registered! Please log in"})
            
        }
    })
})

module.exports = router;

