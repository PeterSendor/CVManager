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
    let userLogin = req.body.userDataPack[2]; 


    connection.query('select login from users where login = ?', [userLogin], function (err, result) {
        if (err) throw err; 
        let login = result.find(element => element.login == req.body.userDataPack[2])

        if (login) {
            res.send({info: "Sorry! Provided username already exists, please choose another login"})

        } else {
            console.log("else launched")
            let values = [req.body.userDataPack];
            console.log(values[0]) 

            connection.query('insert into users (name, surname, login, password) values (?)', [values[0]], function (err, result) {
                if (err) throw err; 
                console.log(result)
                console.log(values)
                console.log("query done")
                
            })
            res.send({info: "You have been registered! Please log in"})
            
        }
    })
})

module.exports = router;

