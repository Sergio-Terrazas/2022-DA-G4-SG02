
/*************************** USO DE OBJETOS GLOBALES **************************/

var nume = 2; // Variable de uso global


function exponente(){
    console.log('El exponente de '+nume+' es de: '+nume*nume);// Se observa que la variable global nume si funciona en cualquier parte del codigo
}

exponente(); // Llamado a la funcion exponente


/*Ejemplo de objetos globales con funciones*/
var Caja = {
    tamano: 'Grande',
    color: 'verde',
    creado: 2022,
    cantidad:5
};

var Caja2 = {
    tamano: 'pequeña',
    color: 'negro',
    creado: 2020,
    cantidad:2
};

//Uso de objetos con alcance global
function sumar(){
    console.log('Caja 1 cantidad: '+Caja.cantidad);
    console.log('Caja 2 cantidad: '+Caja2.cantidad);
    console.log('El total de cajas es de: '+ (Caja.cantidad+Caja2.cantidad));
}

sumar();












