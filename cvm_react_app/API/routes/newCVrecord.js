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
    
    let userLogin = req.body.login;
    let userPassword = req.body.password; 

    connection.query ('select * from users where login = ? and password = ?', [userLogin, userPassword], function (err, result) {
        if (err) throw err; 
        console.log(result[0])

        if (result[0] === undefined) {
            res.send ({info: "No such login/password. Please try again"})
        } else {
            res.send({
                id: result[0].id, 
                name: result[0].name,
                surname: result[0].surname
            })
        }
        

    })

})

module.exports = router;
