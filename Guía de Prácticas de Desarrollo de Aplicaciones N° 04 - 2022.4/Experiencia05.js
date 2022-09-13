/*********************************************** CREACIÓN DE ARRAYS **************************************** */
/*Arreglo numerico*/
let numerico =[1,2,3,4,5,6,7,8,9]
console.log('Cadena de Int: '+numerico)


/*Arreglo String*/
let AString = ['Lunes','Martes','Jueves','Domingo']
console.log('Cadena de String: '+AString)

/*Arreglo de objetos */
    /*Primero se crean los objetos */
        var Auto = new Object();
        var Casa = new Object();
        var Caja = new Object();
    /*Despues ya se puede crear el arreglo*/
        let Objetos = [Auto,Casa,Caja]
        console.log('Cadena de Objetos: '+Objetos)


/************************************************ MANIPULACIÓN DE ARRAYS ****************************** */
/*Añador elementos a la cadena de numeros*/
numerico.push(10)
console.log('Agrego el valor (10) : '+numerico)

/*Eliminar el ultimo elemento osea 10*/
numerico.pop();
console.log('Se elimina el ultimo valor (10): '+numerico)

/*Añadir un valor al inicio*/
numerico.unshift(0);
console.log('Se agrega el valor (0): '+numerico)

/*Se elimina el primer valor*/
numerico.shift();
console.log('Se elimina el primer valor (0): '+numerico)

/*Encontrar la posicion de un elemento dentro de un arreglo*/

console.log('El elemento (5) se encuentra en la posicion: '+numerico.indexOf(5))

/************************************ USO DE ITERADORES DE ARRAYS **************************************/
/*Recorrer un arreglo*/
let num =[1,2,3,4,5,6,7,8,9,10,11,12]
/*Con un for*/
console.log('Con FOR')
for(let index=0; index <num.length;index++)
{
    console.log("  Index ",index, "valor: ",num[index])
}

/*con un Foreach */
console.log('Con FOREACH')
let index=0
num.forEach(element => {
    console.log("  Index ",index++, "valor: ",element)
    }
);

/*Con WHILE*/
console.log('Con WHILE')
let ind = 0
while (true) {
    if (ind == num.length)
        break;
    console.log("  Index ", ind, "valor: ", num[ind]);
    ind++;
}


/*Con DO WHIlE*/
console.log('Con DO WHIlE')
let inde = 0
do{
    if (inde == num.length)
        break
    console.log("  Index ", inde, "valor: ", num[inde]);
    inde++;
}while(true)