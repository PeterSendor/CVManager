var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var cors = require('cors')

router.use(cors())
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password  : 'phero01?!',     
  database : 'CVManager'  
});
 
connection.connect();

router.post("/", function(req, res){
  
  var q = 'SELECT * FROM cv_records WHERE corresponding_user = ?'
  
  connection.query(q, [req.body.userId], function (error, results,  
    fields) {
      if (error) throw error;
      else {
           return res.json({
              data: results
           })
      };
  });
 });


module.exports = router;
