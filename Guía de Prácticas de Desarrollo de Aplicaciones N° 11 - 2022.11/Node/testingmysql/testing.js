/**********************Experiencia Practica 02*************************/ 

// Solicitando paquete de Mysql
/*
var mysql = require('mysql');
// Configurando parámetros de conexión (puede variar según instalación)
var conexion = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    database: 'mydb_ejer_1',
    user: 'root',
    password: '1234',
});
// Realizando conexión o verificando si sucedió un error
conexion.connect(function (err) {
    if (err) {
        console.log("Error de conexion" + err.stack);
        return;
    }
    console.log("Conectado al ID " + conexion.threadId);
});
conexion.query('select * from hello_members', function (error, results) {
    if (error)
        throw error;
    results.forEach(element => {
        console.log(element);
    });
});
conexion.end();

*/


var mysql = require('mysql');
var conexion = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    database: 'ucsm',
    user: 'root',
    password: '1234',
});

conexion.connect(function (err) {
    if (err) {
        console.log("Error de conexion" + err.stack);
        return;
    }
    console.log("Conectado al ID " + conexion.threadId);
});
conexion.query("SELECT * FROM alumno;", 
                function (error, results) {
    if (error)
        throw error;
    results.forEach(element => {
        console.log(element);
    });
});
conexion.end();
