/***************************** USO DE VARIABLES Y CONSTANTES ***************************/

let entero = 1;
let cadena = 'UCSM';


console.log(x === undefined); // true
var x = 3;

/********************************* ELEVACIÓN DE VARIABLES  ***************************/


// devolverá un valor de undefined
var myvar = 'my value';
/*
(function() {
    console.log('La siguiente linea mostrara un error ya que la variable my value no fue definida')
    console.log(myVar);         // la variable myVar esta indefinida
    var myvar = 'valor local';  // Recien se declara la variable myvar
})();*/


/******************************* USO DE CONSOLELOG Y SCOPE  ***************************/
/*Corrigiendo la funcion anterior*/

(function() {
    var myvar = 'valor local';                                      // Variable de alcance local
    console.log('la variable local ya se definio correctamente')
    console.log('La variable es de acceso: '+myvar);                // La variable myVar esta definida
})();


/******************************* USO DE TIPOS DE DATOS Y CAMBIO DE TIPOS DE DATOS   ***************************/

var answer = 42;
answer = 'Gracias por todo el pescado...';

/*Transformacion de los valores a el sistema decimal*/
parseInt("F", 16);
parseInt("17", 8);
parseInt("15", 10);
parseInt(15.99, 10);
parseInt("FXX123", 16);
parseInt("1111", 2);
parseInt("15*3", 10);
parseInt("12", 13);
parseInt("Hello", 8);   // No es un número en absoluto
parseInt("0x7", 10);    // No es de base 10
parseInt("546", 2);     // Los dígitos no son válidos para representaciones binarias.


var howMany = 10;                                       // Declaracion de loa variable howMany
alert("howMany.toString() is " + howMany.toString());   // Displays "10" Se muestran como alertas
alert("45 .toString() is " + 45 .toString());           // Displays "45" Se muestran como alertas
var x = 7;
alert(x.toString(2)) // Displays "111" Se realiza la transformacion al sistema binario






























































































