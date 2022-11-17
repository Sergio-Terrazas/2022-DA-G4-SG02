/**********************Experiencia Practica 01*************************/ 
/*
// importar librería http
var http = require('http');

// crear servidor
var server = http.createServer();
// Creación de mensaje de respuesta cuando se reciba un solicitud
function mensaje(petic, resp) {
    resp.writeHead(200, { 'content-type': 'text/plain' });
    resp.write('Hola Mundo Nuevamente');
    resp.end();
}
// asignando mensaje de respuesta al servidor
server.on('request', mensaje);


// levantando servidor en puerto 3000 y configurando mensaje de confirmación
server.listen(3000, function () {
    console.log('La Aplicación esta funcionando en el puerto 3000');
});

*/




var http = require('http');

var server = http.createServer();

function mensaje(petic, resp) {
    resp.writeHead(200, { 'content-type': 'text/plain' });
    resp.write('Hola Clase de Desarrollo de aplicaciones 04\n');
    resp.write('Los integrantes de mi grupo son:\n');
    resp.write('- CHIPANA ANCASI, JEANPIERRE JOSE\n');
    resp.write('- TERRAZAS GARCIA, SERGIO ADRIAN\n');
    resp.write('- TORRES DELGADO, LEONEL MAURICIO ');
    resp.end();
}


server.on('request', mensaje);

server.listen(3000, function () {
    console.log('La Aplicación esta funcionando en el puerto 3000');
});