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

function loginChecker (rawLoginPack) {
    let userLogin = rawLoginPack.login;
    let userPassword = rawLoginPack.password; 

    connection.query ('select * from users where login = ? and password = ?', [userLogin, userPassword], function (err, result) {
        if (err) throw err; 
        let userNamePack = [result[0].name, result[0].surname]
        console.log("funkcja wypluwa: " + userNamePack)
        return userNamePack; 

    })
}

router.post ('/', function (req, res) {
    
    res.send(JSON.stringify(loginChecker(req.body)))
    console.log("post wypluwa: " + loginChecker(req.body))
})

module.exports = router;

