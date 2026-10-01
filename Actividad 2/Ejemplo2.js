const nombreCompleto = "Pepito" + "Perez";
console.log(nombreCompleto);
const primerNombre = "Fulanito";
const primerApellido = "Perencejito";
const nombreCompleto2 = primerNombre.concat(primerApellido);
console.log(nombreCompleto2);

//Plantilla Literal

const nombreUsuario = "Maria";
const edadUsuario = 24;
const presentación = `Mi nombre es ${nombreUsuario} y tengo ${edadUsuario} anos UWU`;
console.log(presentación);

//Propiedad Lenght: Indícacuántos caracteres tiene una caden

const palabra = "JavaScript";
console.log("La cantidad de caracteres que tiene este código son:" + palabra.length);
//toUpperCase(): Convierte a mayúsculas

console.log("Mayúsculas: " + palabra.toUpperCase());
//Trim():Remueve espacios al principio y al final de la cadena

let textoConEspacios = " Estamos aprendiendo JavaScript ";
console.log("Texto sin espacios:" + textoConEspacios.trim());
//Includer(): Una cadena contiene una determinada subcadena

const correo = "camper@campuslands.com";
console.log("Contiene la subcadena o caracter @?" + correo.includes("@"));
//StartsWith(): Verificar si una subcadena está

const codigo = "JS-2026-09-29";
console.log("¿Comienza con la subcadena JS: " + codigo.startsWith("JS"));
//endWith(): Si finaliza exactamente con una subcadena específica

const archivo = "ejercicio.html";
console.log("¿Termina en .html?" + archivo.endsWith(".html"));
//IndexOf(): Devuelva la posición de un texto desde donde aparece

const frase = "Aprendiendo JavaScript";
console.log("Posición de la subcadena 'JavaScript:' ", frase.indexOf("JavaScript"));
//Slice(): Segmentar a exptraer una parde de la cadena

const lenguaje = "JavaScript";
console.log("Imprima los 4 caracteres: " + lenguaje.slice(0, 4));
//replace(): Para reemplazar una subcadena dentro de una cadena

const saludo = "Hola campers";
const NuevoSaludo = saludo.replace("campers", "Estudiantes");
console.log(NuevoSaludo);
//Split(): Divide una cadena en una rreglo(vecto), donde cada caracter ocupa una posición

const nombres = "Pepito,Fulanito,Zuzanito,Perencejito";
const listaNombres = nombres.split(",");
console.log("Tipo de dato de la variable 'listaNombres': " + typeof listaNombres);
console.log("Arreglo: ", listaNombres);
console.log("Primer nombre: " + listaNombres[0]);

/*Ejemplo de introducción a estructuras de control de desición o condicional*/
const usuario = " Estiudiante123";
const usuarioLimpio = usuario.trim().toLocaleLowerCase;
console.log("Usuario original: " + usuario);
console.log("Usuario limpio: " + usuarioLimpio);
if (usuarioLimpio.length >= 5) {
    console.log("El usuario tiene una logintud mayor o igual a 5 caracteres");
} else {
    console.log("El usuario tiene una longitud menor que 5 caracteres");
}

console.log(false ? "Es mujer :D" : "Te juro que me dijo que era mujer D:");