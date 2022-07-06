
/* if (CONDICION) {
          SENTENCIA
} 

let precio = 10;

let pago = parseFloat (prompt("Con cuanto me vas a pagar?"));

if (pago > precio) {
    let vuelto = pago - precio;
    console.log ("Me pagaste demás, tu vuelto es: " + parseInt (vuelto));
} */

//EJERCICIO EN CLASE 

let edad = parseInt (prompt ("Ingrese su edad"));

if ( (edad >= 0) && (edad <= 17) ) {
    alert ("Eres un ninio");
}else if ((edad > 17) && (edad <= 40)){
    alert ("Sos joven");
} else if (edad > 40){
    alert ("Trajiste baston?");
}else {
    alert("No se puede ingresar numeros negativos, ingrese de nuevo su edad");
}


