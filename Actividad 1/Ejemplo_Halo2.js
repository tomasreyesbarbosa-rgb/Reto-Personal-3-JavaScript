/*
Tipos de variables en JavaScript
*/
var nombre = "Tomas"; // Variable de tipo string
let edad = 20; // Cambié var por let
console.log("Mi nombre es " + nombre + " y tengo " + edad + " anos UWU.");
console.log("Tipo de datos de la variable 'edad': ", typeof edad);

edad = 32; // Actualizo el valor de edad
console.log("Edad inicial: " + edad);

/*Con palabra reservada 'let'*/
let ciudad = "Bogota";
ciudad = "Oiba";
console.log("Me volvi pobre en: " + ciudad);

let bandera = true; // Defino la variable bandera
console.log("El valor de la variable 'bandera' es: ", bandera);
console.log("Tipo de datos de la variable 'bandera': ", typeof bandera);

let telefono;
console.log("Undefined", telefono);
console.log("Tipo de datos de la variable 'telefono': ", typeof telefono);

const numeroGrande = BigInt("12345455444"); // Uso BigInt para números grandes
console.log("El valor de la variable 'numeroGrande' es: ", numeroGrande);
console.log("Tipo de datos de la variable 'numeroGrande': ", typeof numeroGrande);
/*Tipo de dato Symbol1*/