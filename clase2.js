/* ------------------------------------------------
        STRINGS
----------------------------------------------------*/

var string = "hola mundo";

// todo en mayuscula-------------------------------

console.log(string.toUpperCase());

// todo en minuscula --------------------------------

console.log(string.toLowerCase());

// saber el número de indice -----------------------

console.log(string.indexOf("m"));

//Reemplazar---------------------------------------------

var newString = string.replace("mundo","Rodrigo")
// se reemplaza mundo x rodrigo pero el string original no cambia
console.log(newString);

//Método substring, quita elementos de un string ----------------

var string2 = string.substring(1,3);
// pongo los numeros de indices que quiero quitar
console.log(string2); // me entrega "ol"

// método slice quita elementos pero admite numero negativos-------------

var stringslice = string.slice(2,-3);
console.log(stringslice); // me entrega "la mu"

// Eliminar espacios extras de un string al inicio y al final

var stringTrim = "     hola mundo     ";
console.log(stringTrim.trim());


/* ------------------------------------------------
        ARRAYS
----------------------------------------------------*/
