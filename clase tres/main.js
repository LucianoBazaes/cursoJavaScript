//BUCLE FOR


/*
for (let i = 0; i <= 10; i = i + 2) {
    console.log (i);
}*/


let numeroIngresado = parseInt(prompt("Ingrese un numero"));
for (i=1;i <= 10;i++){
    let resultado = numeroIngresado * i;
    console.log (`el numero ${numeroIngresado} X ${i} = ${resultado}`);
}