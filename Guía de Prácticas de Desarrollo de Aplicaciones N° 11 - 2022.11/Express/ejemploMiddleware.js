// importando paquete express
/*
var express = require('express');
// creando objeto express
var app = express();
// creando el middleware
const middleware = function (req, res, next) {
    console.log('ejecutando el middleware mientras llega petición');
    next();
};
// invocando el middleware
app.use(middleware);
// configurando manejador de rutas
app.get('/', function (req, res) {
    setTimeout(function() {
        res.send('Llegó petición al servidor');    
    }, 5000);
    
})
// levantando servidor

app.listen(3000, function () {
    console.log('servidor en escucha');
});
*/


var express = require('express');

var app = express();
const middleware = function (req, res, next) {
    console.log('ejecutando el middleware mientras llega petición');
    next();
};
app.use(middleware);
app.get('/', function (req, res) {
    setTimeout(function() {
        res.send('CHIPANA ANCASI, JEANPIERRE JOSE');    
    }, 5000);
    
})

app.use(middleware);
app.get('/peticion_2', function (req, res) {
    setTimeout(function() {
        res.send('TERRAZAS GARCIA, SERGIO ADRIAN');   
    }, 1000);
    
})

app.use(middleware);
app.get('/peticion_3', function (req, res) {
    setTimeout(function() {
        res.send('TORRES DELGADO, LEONEL MAURICIO');
    }, 3000);
    
})

app.listen(3000, function () {
    console.log('servidor en escucha');
});
