//El usuario ingresa un numero que representa la cantidad de veces que se va a iterar
alert("BIENVENIDO");
let numero = parseInt(prompt("Ingrese un número válido"));


//Mostramos por consola el número ingresado por el usuario
console.log("El numero ingresado es: ", numero);

// La variable i inicializa con el valor 0, siempre y cuando sea menor que el numero que ingresa el usuario, mientras sea menor, va a ir iterando

for (let i = 0; i<numero; i++) {
    //Si el numero es par entonces imprimirá azul proporcionalmente al numero que ingresó el usuario
    if (numero % 2 == 0) {
        console.log("Azul");
    }
    // Si el numero es impar, entonces imprimirá rojo al numero que ingresó el usuario
    else {
        console.log("Rojo");
    }
}