/* Ejercicio de Paridad

let numero = parseInt(prompt("Ingrese un número entero mayor o igual a 0"));

if (numero % 2 == 0){
    alert("El número " + numero + " es par");
} else if (numero % 2 == 1){
    alert("El número " + numero + " es impar");
} else {
    alert("El número que ingresaste no es válido, por favor ingrese un número");
} */


/* Ejercicio de los Triángulos

let ladoA = parseInt(prompt("Ingrese el valor del lado A"));
let ladoB = parseInt(prompt("Ingrese el valor del lado B"));
let ladoC = parseInt(prompt("Ingrese el valor del lado C"));

if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
    alert("No ingresaste números")
} else {
    if ((ladoA === ladoB) && (ladoA === ladoC) && (ladoB === ladoC) && (ladoA > 0) && (ladoB > 0) && (ladoC > 0)) {
        alert("El triángulo es equilátero");
    } else if ((ladoA === ladoB) || (ladoA === ladoC) || (ladoB === ladoC)) {
        alert("El triángulo es isósceles");
    }
    else {
        alert("El triángulo es escaleno");
    }
}*/