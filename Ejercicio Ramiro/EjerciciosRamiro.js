// 1 Built-in Objects exercises.

/*---------- String ----------*/
/*
Crear una función que reciba un string como parametro y que al ser llamada haga
un console.log mostrando el length del string recibido.

Ex:
myFunc('myString');
*/ 

/*------------------------------ Solución ------------------------------------------- */

function myString(strg){
    console.log(strg.length);
  }
  myString("we are the best");

/*----------------------------------------------------------------------------------- */



/*2---------- Number ----------*/
/*
crear una función que reciba un number, que haga lo siguiente:
* Determinar si el numero recibido es un número entero.
* En caso de ser entero, hacer un console.log avisando que es un entero. 
* En caso de no ser entero, convertirlo a entero y mostar el nuevo valor usando console.log.

Ex:
myFunc(number);
posibles casos:
a) el número es un entero :3
b) el número ahora es un entero con valor de (valor) ;)
*/ 

/*------------------------------ Solución ------------------------------------------- */

function entero(num){
    if (Number.isInteger(num)){
        console.log(num + " " + "el número es un entero");
    }else{
        console.log.log("el número ahora es un entero con valor de" + Number.parseInt(num));
    }
}
entero(3,4);

/*----------------------------------------------------------------------------------- */



/*3---------- Boolean ----------*/
/*
Crear una función que reciba un boolean, que al ser llamada haga un console.log mostrando:
* El numero de caracteres que representan el valor del boolean recibido.

Ex:
var flag = true;
myFunc(flag);
expected result:  4 caracteres.
*/

/*------------------------------ Solución ------------------------------------------- */

var value= false;
    function exercises3(value) {
        console.log(value.toString().length)
    }
    exercises3(value);

/*----------------------------------------------------------------------------------- */



/*4---------- Object ----------*/
/*
crear una función que reciba un object, que al ser llamada haga un console.log mostrando:
* El numero de propiedades que contiene el objeto.
* El nombre de cada una de las propiedades del objeto.
* El valor de cada una las propiedades del objeto.

Ex:
myFunc(obj);
*/ 

/*------------------------------ Solución ------------------------------------------- */
let user = {
    nombre: "admin",
    correo: "admin@gmail.com",
    contraseña: "admin123"
}
function myFunc(obj){
    console.log(Object.keys(user).length, Object.keys(user),
    Object.values(user));
}
myFunc(user);

/*----------------------------------------------------------------------------------- */



/*5---------- Function ----------*/
/*
Crear una función que reciba una function, que al ser llamada haga un console log mostrando:
* El número de argumentos que espera la funcion.

Ex:
var sum = new Function('a','b','c', 'return a + b + c');

myFunc(sum);
result: 3.
*/ 

/*------------------------------ Solución ------------------------------------------- */

var sum = new Function('a','b','c', 'return a + b + c');
function myFunc(fn){
  console.log(fn.length);
}
myFunc(sum);

/*----------------------------------------------------------------------------------- */



/*6---------- Array ----------*/
/*
Crear una función que reciba un array de strings, un número (desiredLength) y un string (template), 
que al ser llamda haga lo siguiente:
*Checar el numero de propiedades que tiene el array.
*Si el numero de propiedades es menor a desiredLength por 1: 
    *Rellenar el espacio faltante dentro del array usando template.  
    *Hacer un console.log del arreglo con los cambios.
*En caso de que no se cumpla la condición, mencionar si el array es menor o mayor que desiredLength y por cuanto.
Ex:

var arr = ['Apple', 'Banana'];
myFunc(arr, 3, 'apple');
*/ 

/*------------------------------ Solución ------------------------------------------- */
let frutas = ["apple", "banana"];
function myFunc(array,desiredLength,template){
  let diferencia = desiredLength - array.length;
  if(diferencia === 1){
    array.push(template);
    console.log(array);
  }else if(diferencia > 1){
    console.log(" el arreglo es menor por " + diferencia)
  }else{
    console.log("el arreglo es mayor por  " + Math.abs(diferencia));
  }
}
myFunc(frutas,1,'apple');


/*----------------------------------------------------------------------------------- */



/*7---------- Date ----------*/
/*
Crear una función que al ser llamada haga dos console.log, uno mostrando la fecha actual 
y otro que muestre cuantos milisegundos han pasado desde el 1/enero/1970 hasta ahora.

myFunc();
*/

/*------------------------------ Solución ------------------------------------------- */

function date(){
    var today = new Date();
    console.log(today.toISOString());
    console.log(Date.now());
    }
    date();

/*----------------------------------------------------------------------------------- */



/*8---------- Math ----------*/
/*
Crear una función que reciba dos numeros (base y exponente). 
la función al ser llamada usará el valor absoluto de base y lo elevara a la potencia 
determinada por exponente, al final mostrar este resultado usando console.log.

Ex:

myFunc(-3, 2) 
result = 9;
*/

/*------------------------------ Solución ------------------------------------------- */

function myfunc(a,b){
    var c = Math.abs(a);
    console.log(Math.pow(c,b));
}
myfunc(-3,2);


/*----------------------------------------------------------------------------------- */



/*9---------- RegExp ----------*/
/*
Dada el siguiente patrón (/([A-Z])/), crear una funcion que reciba dos strings (str, template).
* Determine si str cumple con el patrón.
* Si cumple, remplazar el las incidencias del patron con el valor de template.
* Mostar el resultado usando console.log.
* Si no, mostrar un mensaje de no coincidencia usando console.log

Ex:
myFunc(str, template)
*/

/*------------------------------ Solución ------------------------------------------- */

var rg = new RegExp(/(A-Z)/);
var rg1 = "Hola";
var temp = rg1.replace(/([A-Z])/, "abc");
console.log(temp);


/*----------------------------------------------------------------------------------- */



/*10---------- Error ----------*/
/*
Crear una funcion que reciba un numero.
*Si el número es menor o igual a 10, usar console.log para mostrar un mensaje de valor dentro de los paramatros.
*Si el número es mayor a 10 arrojar un error con el mensaje, el valor esta fuera de los parametros.

Ex: myFunc(number)
*/

/*------------------------------ Solución ------------------------------------------- */
function myError(number){
    if (number <= 10){
        console.log("valor dentro de los parametros ");
        return
    }
    throw new Error("el valor esta fuera de los parametros");
}
myError(8);


/*----------------------------------------------------------------------------------- */


/*11---------- Extra (más no opcional) ----------*/
/*
Usar los objetos vistos en clase y aplicarlos para solucionar un escenario que pueda ocurrir 
entre los proyectos finales que tienen asignados.

Describir el caso: Mi proyecto es Movie Rating

Caso 1: En mi app como usuario podras agregar un comentario. Me gustaria que haya algun tipo de contador que te permita solo
agregar cierto numero de "caracteres" (como en twitter), y que si pasas el numero permitido de caracteres te mande 
un error para que puedas corregir.


Mostrar la solucíon en código:
limite de caracteres = 140

*/
/*------------------------------ Solución ------------------------------------------- */
function micomentario(strg){
    console.log("comentario dentro de los parametros"+ " "+ strg.length);
    if (strg.length <= 140){
        console.log("comentario dentro de los parametros ");
        return
    }
    throw new Error("el numero de caracteres esta fuera de los parametros")
}
    micomentario("  de caracteres esta fuera de los parametrosel numero de caracteres esta fuera de los para");
  
  /*----------------------------------------------------------------------------------- */
  /*Caso 2: En mi proyecto quiero mostrar la fecha y hora en que se realizo el comentario*/

  function date(){
    var today = new Date();
    console.log("On date:" + " " + Date());

    }
    date();