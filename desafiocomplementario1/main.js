alert("BIENVENIDO");
//El usuario ingresa un numero que representa la cantidad de veces que se va a iterar
let numero = parseInt(prompt("Ingrese un número válido"));

//Mostramos por consola el número ingresado por el usuario
console.log("El numero ingresado es: ", numero);

// La variable i inicializa con el valor 0; mientras sea menor que el numero ingresado por el usuario, va a ir iterando
for (let i = 0; i<numero; i++) {
    //Si el numero es par entonces imprimirá azul proporcionalmente al numero que ingresó el usuario
    if (numero % 2 == 0) {
        console.log("Azul", i);
    }
    // Si el numero es impar, entonces imprimirá rojo al numero que ingresó el usuario
    else {
        console.log("Rojo", i);
    }
}
alert("Gracias por usar mi programa, vuelva pronto");