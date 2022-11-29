/*********************************************************************/ 
/***************************** CONNECTION.js *************************/ 
/*********************************************************************/ 

var mysql = require('mysql');

var con = mysql.createConnection({
    host:'localhost',
    database:'da_lab',
    port:'3306',
    user:'root',
    password:'1234',
});

con.connect(function(err){
    if(err) throw err;
    console.log("Se conecto a la BD");
});

module.exports = con;