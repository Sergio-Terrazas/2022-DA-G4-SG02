
//************************************************************************************ */
//***************************CIUDADANO DE PRIMERA CLASE******************************* */
//************************************************************************************ */
const foo = () => {
    console.log("foobar");  // llamado a la consola para mostrar footer
   }
foo();                      // invocacion de la funcion


// Resultado que se muestra por consola
// foobar

//************************************************************************************ */

function sayHello() {
    return "Hello, ";    // Retorno de la funcion sayHello 
}

function greeting(helloMessage, name) {  // Esta funcion recibe dos parametros que son helloMessenge y name
    console.log(helloMessage() + name);  // Llamado a la funcion sayhello ya que se cambia HelloMesage por sayHello
}

greeting(sayHello, "JavaScript!");      // invocacion a la funcion greeting
                                        // Mensaje mostrado: Hello, JavaScript!
   
/************************************************************************************** */
function sayHello() {             // declaracion de la funcion say hello
    return () => {
     console.log("Hello!");       // retorna la porcion de codigo console.log
    }
}

//************************************************************************************ */
//****************************************CLOUSURE************************************ */
//************************************************************************************ */

function makeFunc() {            // declaracion de la funcion
    const name = 'Mozilla';      // inicializacion de la variable constante name
    function displayName() {     // declaracion de otra funcion
        console.log(name);
    }
    return displayName;          // retorno de la funcion principal
}
const myFunc = makeFunc();       // llamado a la primera funcion
myFunc();

//************************************************************************************ */
//********************************AMBITO DE FUNCION*********************************** */
//************************************************************************************ */
    
function exampleFunction() {
    const x = "declared inside function";   // Variable constante X
        console.log("Inside function");     // Mostrar en consola Inside function
        console.log(x);                     // Mostrar la informacion de la variable x
    }
//console.log(x); // Causes error : x no esta definida de manera global



/************************************************************************************** */

const x = "declared outside function";      // Definicion de la variable x de manera global
exampleFunction();                          // Llamado a la funcion exampleFunction

function exampleFunction() {                // Declaracion de la funcion example Function
    console.log("Inside function");
    console.log(x);
   }
console.log("Outside function"); 
console.log(x);
   
/************************************************************************************** */
function f() {
    try {
        console.log(0);
        throw 'bogus';
    } 
    catch (e) {
        console.log(1);
        return true; // retorno en caso de error
        console.log(2);     // Nunca se executa
    } 
    finally {
        console.log(3);
        return false;       // retorno false
        console.log(4);     // Nunca se executa
    }
    // Nunca llega a esta parte ya que antes existe un return
    console.log(5); // Nunca se executa 
}
console.log(f()); // 0, 1, 3, false



/************************************************************************************** */

function UserException(message) {
    this.message = message;
    this.name = 'UserException';
}

function getMonthName(mo) {
    mo--; // Adjust month number for array index (1 = Jan, 12 = Dec)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
     'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (months[mo] !== undefined) {
        return months[mo];
    } 
    else {
        throw new UserException('InvalidMonthNo');
    }
}

let monthName;
try {
    // statements to try
    const myMonth = 15; 
    monthName = getMonthName(myMonth);
} 
catch (e) {
    monthName = 'unknown';
    console.error(e.message, e.name); 
}