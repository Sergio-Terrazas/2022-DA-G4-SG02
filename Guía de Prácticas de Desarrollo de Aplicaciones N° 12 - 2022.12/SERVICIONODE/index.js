
// Configurando el Parser(conversor) de formato HTTP a formato JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

// Creando Servidor
var server = app.listen(3000,"127.0.0.1",function(){
    var host = server.address().address;
    var port = server.address().port;
});

// Creando y configurando API para recupera datos de musicdb/albums
app.get('/alumno',function(req, res){
    connection.query('select * from alumno', function(error,results){
        if(error) throw error;
        res.end(JSON.stringify(results));
    })
});

// Creando y configurando API para recupera datos de musicdb/albums en base a ID
app.get('/alumno/:id',function(req, res){
    connection.query('select * from alumno where id=?', [req.params.id],function(error,results){
        if(error) throw error;
        res.end(JSON.stringify(results));
    })
});



/*
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

var connection = mysql.createConnection({
    host:'localhost',
    database:'da_lab',
    port:'3306',
    user:'root',
    password:'1234',
});

connection.connect(function(err){
    if(err) throw err;
    console.log("Se conecto a la BD");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

var server = app.listen(3000,"127.0.0.1",function(){
    var host = server.address().address;
    var port = server.address().port;
});

app.get('/albums',function(req, res){
    connection.query('select * from alumno', function(error,results){
        if(error) throw error;
        res.end(JSON.stringify(results));
    })
});

app.get('/albums/:id',function(req, res){
    connection.query('select * from alumno where id=?', [req.params.id],function(error,results){
        if(error) throw error;
        res.end(JSON.stringify(results));
    })
});

*/