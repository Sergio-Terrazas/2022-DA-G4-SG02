// importando paquete Express
/*
var express = require('express');
// creando aplicación en Express
var app = express();
// Creando manejadores de rutas
app.get('/', function (req, res) {
    res.send('Hola mundo desde Express');
})
app.get('/login', function (req, res) {
    res.send('Aquí se mostraría la pagina del login');
})
// El servidor de escucha que desplegará mi ruta HTTP
app.listen(3000, function () {
    console.log('La aplicación está funcionando en el puerto 30000');
});
*/



var express = require('express');

var app = express();


app.get('/', function (req, res) {
    res.send('UCSM');
})
app.get('/login', function (req, res) {
    res.send('Login');
})


app.get('/login/user_1', function (req, res) {
    res.send('CHIPANA ANCASI, JEANPIERRE JOSE');
})

app.get('/login/user_2', function (req, res) {
    res.send('TERRAZAS GARCIA, SERGIO ADRIAN');
})

app.get('/login/user_3', function (req, res) {
    res.send('TORRES DELGADO, LEONEL MAURICIO');
})


app.listen(3000, function () {
    console.log('La aplicación está funcionando en el puerto 30000');
});
















