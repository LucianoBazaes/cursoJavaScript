//EJERCICIOS DE LA CLASE NÚMERO 1

/* EJERCICIO "HOMERO"
let nombre = "Homero";
let apellido = "Simpson";
let edad = 38; */



/*EJERCICIO "CIUDADES"
const CIUDAD1 = "Mendoza";
const CIUDAD2 = "La Plata";
const CIUDAD3 = "Paris";
const CIUDAD4 = "Berlin";
const CIUDAD5 = "Madrid"; */



/*EJERCICIO "CARNET"
let nombrePersona = "Bart";
let apellidoPersona = "Simpson";
let fechaNacimiento = "2 de Noviembre de 1970";
let edadPersona = 10;
let direccionCasa = "Avenida Siempre Viva 742";
let ciudadPersona = "Springfield";
let sexoPersona = "Masculino";

let carnet = "Nombre: " + nombrePersona + "" +
             " Apellido: " + apellidoPersona + "" +
             " Fecha de Nacimiento: " + fechaNacimiento + "" + 
             " Edad: " + edadPersona + "" +
             " Direccion: " + direccionCasa + "" +
             " Ciudad: " + ciudadPersona + "" +
             " Sexo: " + sexoPersona;

console.log(carnet); */




/* EJERCICIO "REGISTRO DE PERSONAS"
let nombre1 = prompt("Ingrese el nombre de la primer persona");
let nombre2 = prompt("Ingrese el nombre de la segunda persona");
let nombre3 = prompt("Ingrese el nombre de la tercer persona");
let nombre4 = prompt("Ingrese el nombre de la cuarta persona");
let nombre5 = prompt("Ingrese el nombre de la quinta persona");

let nombresFamilia = " 1) " + nombre1 + "" +
                     " 2) " + nombre2 + "" +
                     " 3) " + nombre3 + "" +
                     " 4) " + nombre4 + "" +
                     " 5) " + nombre5;
alert("Los nombres ingresados son: " + nombresFamilia); */




/* EJERCICIO "DESCUENTOS"
let precio = parseFloat(prompt("Ingrese un precio"));
let descuento10 = precio - (precio * 0.10);
let descuento40 = precio - (precio * 0.40);
console.log("Aplicando un 10% de descuento, su precio final es de: $" + descuento10);
console.log("Aplicando un 40% de descuento, su precio final es de: $" + descuento40); */

//----------------------------------------------------------------------------------------------------------//

//EJERCICIOS DE LA CLASE NÚMERO 2

/* EJERCICIO N°1
let numeroIngresado = parseInt(prompt("Ingrese un número entero válido: "));

if (numeroIngresado > 1000) {
    alert("Su número es mayor que 1000");
} else {
    alert("Su número es menor que 1000");
} */




/* EJERCICIO N°2
let textoUsuario = prompt("Ingrese una palabra: ");

if (textoUsuario === "Hola") {
    alert("Hola, como estás?");
} else {
    alert("Aprendé a saludar maleducado");
} */




/* EJERCICIO N°3
let numero = parseInt(prompt("Ingrese un número: "));

if ((numero >= 10) && (numero <= 50)) {
    alert("Felcidades, estás dentro del intervalo correcto");
} else{
    alert("Su numero no se encuentra en el intervalo correcto");
} */


/* EJERCICIO "YO NO FUI"
let nombreExistente = "Luciano";

let nombreUsuario = prompt("Ingrese un nombre: ");

if ((nombreUsuario) === (nombreExistente)) {
    alert("Fui yo");
} else {
    alert("Yo no fui");
}
console.log("El tipo de dato de nombreExistente es: ");
console.log(typeof nombreExistente); */



/* EJERCICIO "PRESIONAR Y"
let letraUsuario = prompt("Ingrese una letra: ");

if ((letraUsuario === "Y") || (letraUsuario === "y")){
    alert("Correcto");
} else {
    alert("Error");
} */


/* EJERCICIO "ESCOGER UN PERSONAJE"
let numeroSimpson = parseInt(prompt("Ingrese un número entre el 1 y el 4: "));

if ((numeroSimpson >= 1) && (numeroSimpson <= 4)){
    if (numeroSimpson === 1){
        alert("Elegiste a Homero");
    } else if (numeroSimpson === 2){
        alert("Elegiste a Marge");
    } else if (numeroSimpson === 3){
        alert("Elegiste a Bart");
    } else {
        alert("Elegiste a Lisa");
    }
} else {
    alert("Ese número no es válido, por favor ingrese un número entre el 1 y el 4 nuevamente: ");
} */



/* EJERCICIO "PRESUPUESTO"
let numeroUsuario = parseFloat(prompt("Ingrese un número: "));

if ((numeroUsuario >= 0) && (numeroUsuario <= 1000)) {
    alert("Presupuesto Bajo");
} else if ((numeroUsuario >= 1001) && (numeroUsuario <= 3000)){
    alert("Presupuesto Medio");
} else if ((numeroUsuario > 3000)) {
    alert("Presupuesto alto");
} else {
    alert("El número ingresado no es válido, por favor intentelo nuevamente: ");
} */




/* EJERCICIO N°5 "VACÍO"

let producto1 = prompt("Ingrese el primer producto: ");
let producto2 = prompt("Ingrese el segundo producto: ");
let producto3 = prompt("Ingrese el tercer producto: ");
let producto4 = prompt("Ingrese el cuarto prodcuto: ");

if ((producto1 != "") && (producto2 != "") && (producto3 != "") && (producto4 != "")){
    let canasta = " 1) " + producto1 + "" +
                  " 2) " + producto2 + "" +
                  " 3) " + producto3 + "" +
                  " 4) " + producto4 + "";
    console.log("Su canasta tiene los siguientes elementos: " + canasta);
} else {
    alert("ERROR: ES NECESARIO CARGAR TODOS LOS PRODUCTOS");
} */
