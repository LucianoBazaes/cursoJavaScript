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



//---------------------------------------------------------------------------------------------------------//

//EJERCICIOS DE LA CLASE N°3

/* EJERCICIO "TABLA DE UN NÚMERO"
let numero = parseInt(prompt("Ingrese un número: "));

for (let i = 0; i <= 10; i = i + 1) {
    let resultado = numero * i;
    console.log(numero + " X " + i + " = " + resultado);
} */




/* EJERCICIO "EL PIZARRÓN"
let numero = parseInt(prompt("Ingrese un número: "));
let texto = prompt("Ingrese un texto: ");

for (let i = 1; i <= numero; i++) {
    console.log(texto, i);
} */



/* EJERCICIO "EL CUADRADO ORDINARIO"

let numero = parseInt(prompt("Ingrese cantidad de lados deseados: "));

for (let i = 1; i <= numero; i = i + 1) {
    if (numero > 4) {
        alert("El número ingresado no es válido.");
        break;
    } else {
    alert("Lado N°: " + i);
    }
} */


/* EJERCICIO "REGISTRO DE ALUMNOS"

let nombreAlumno;

for (let i = 0; i < 10; i++) {
    nombreAlumno += prompt("Ingresar el nombre del alumno que desea registrar: ");
}
alert(nombreAlumno); */


/* EJERCICIO "EL INNOMBRABLE"

let entrada = prompt("Ingrese un nombre");
let contador;

while (entrada != "Voldemort") {
    contador = contador + 1 + entrada + "\n";
    entrada   = prompt("Ingrese un nombre");
}
alert(contador); */


/* EJERCICIO "COMPRANDO PRODUCTOS"
 let entrada = parseInt(prompt("Ingrese un número del 1 al 4: "));

 while (entrada != "ESC") {
    switch (entrada) { 
        case "1": 
              alert("Tomate");
            break;

        case "2":
             alert("Papa");
             break;

        case "3": 
             alert("Carne");
             break;

        case "4":
             alert("Pollo");
             break;

        default:
              alert("Error");
              break;
    }
     entrada = parseInt(prompt("Ingrese un número del 1 al 4: "));
 } */



//---------------------------------------------------------------------------------------------------------//

/* EJERCICIOS DE LA CLASE N°4

// EJERCICIO "ENTRADAS Y SALIDAS"

let valor = entrada();

function entrada() {
    return parseInt(prompt("Ingrese un valor: "));

}

function procesamientoValor(input) {
    return alert("El valor ingresado es: " + valor);
}

function salida(input)  {
    alert(valor);
}

entrada();
procesamientoValor();
salida();

*/


/* EJERCICIO "REDONDEO"

function redondeo (input) {
    return Math.round(input);
}

for(let i = 0; i < 5; i++) {
    let entrada = prompt("Ingrese un numero: ");
    alert(redondeo(entrada));
    console.log(entrada);
}

*/


/* EJERCICIO "IMPUESTOS"

function impuesto (precio, porcentaje) {
    return precio + ((precio * porcentaje)/100)
}

for (let i = 0; i < 5; i++) {
    let resultado = impuesto(parseFloat(prompt("Ingresar precio: ")),
                    parseFloat(prompt("Ingresar %")));
    console.log(resultado);
}

*/


/* EJERCICIO "COTIZACION"

alert("Bienvenido a nuestro cotizador web!");

const valorDolar = 280;

const cotizarDolar = (pesos) => pesos / (valorDolar);
const cotizarPeso = (dolar) => dolar * valorDolar;

let seleccion = prompt("SELECCIONAR COTIZACION \n 1 - DOLARES A PESOS \n 2 - PESOS A DOLARES ");

let valor = parseFloat(prompt("Ingrese un valor: "));

switch (seleccion) {
    case "1":
        alert(cotizarDolar(valor));
        break;
    case "2":
        alert(cotizarPeso(valor));    
        break;
    default:
        break;    
}

*/


/* EJERCICIO "VALIDACION"

function validacionCadena (cadena) {
    if (cadena != "") {
        return true ;
    }
    return false;
}


let entrada = prompt("INGRESE UNA CADENA: ");

while (entrada != "ESC") {
    alert(validacionCadena(entrada));
    entrada = prompt("INGRESAR UNA CADENA: ");
    console.log(entrada);
}
*/


/* EJERCICIO "PROMEDIO DE NOTAS"

let notaAlumno;
let notasTotales = 0;
let cantidadNotas = 0;
let promedioFinal = 0;


while(true) {
    notaAlumno = prompt("Ingresa tus notas. Tipea ESC para dejar de ingresar notas. ");
    if (notaAlumno === "ESC" || notaAlumno === "esc") {
        alert("Gracias por usar mi programa.");
        break;
    } else {
        cantidadNotas++;
        notasTotales = (notasTotales) + parseInt(notaAlumno);
    }
}
    console.log("Aca abajo esta la cantidad de notas");
    console.log(cantidadNotas);

    console.log("Aca abajo está la suma total de notas");

    console.log(notasTotales);
    
    promedioFinal = ((notasTotales) / (cantidadNotas));
    console.log("Su promedio es de: " + promedioFinal);
*/

//---------------------------------------------------------------------------------------------------------//

// EJERCICIOS DE LA CLASE N°5

/* EJERCICIO "LA TIENDA"

class Tienda {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
}

const tiendaLuciano = new Tienda("+Ahorro", "Saenz Peña", "Luciano Bazaes", "Kiosko");
const tiendaApu = new Tienda("Kwik-E-Mark", "Park 123", "Apu", "Almacen");

console.log(tiendaLuciano.direccion);
console.log(tiendaApu) */

/* EJERCICIO "REGISTRO TIENDAS"

let ingresados;
class Tienda {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
}

for (let i = 0; i < 5; i++) {
    const tienda = new Tienda(prompt("Nombre: "),
                              prompt ("Direccion: "),
                              prompt ("Propietario: "),
                              prompt("Rubro: "));
    ingresados += "Tienda: " + tienda.nombre + "" +
                  "Direccion: " + tienda.direccion + "" + 
                  "Propietario: " + tienda.propietario + "" +
                  "Rubro: " + tienda.rubro + "\n";                          
}

console.log(ingresados); */

/* EJERCICIO "ABIERTO Y CERRADO"
class Tienda {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }

    estaAbierto(hora) {
        if(((hora >= 8) && (hora <= 12)) || ((hora >= 15) && (hora <= 19))) {
            return true;
        }
        return false;
    }

}

const tiendaMoe = new Tienda ("Taberna de Moe ", " Cheap 123 ", " Moe ", " Bar");

for (let i = 0; i < 3; i++) {
    let entrada = prompt("Ingrese la hora: ");
    if(tiendaMoe.estaAbierto(entrada)){
        alert("La tienda está abierta, pase.");
    } else {
        alert("Lo sentimos, está cerrada.");
    }
} */

/* EJERICIO "Validar Propietario"

class Tienda {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }

    esPropietario(nombre) {
        return this.propietario = nombre;
    }

}

const tiendaLuciano = new Tienda("+Ahorro", "Saenz Peña", "Luciano Bazaes", "Kiosko");
const tiendaApu = new Tienda("Kwik-E-Mark", "Park 123", "Apu", "Almacen");
const tiendaMoe = new Tienda ("Taberna de Moe ", " Cheap 123 ", " Moe ", " Bar");

for(let i = 0; i < 5; i++) {
    let entrada = prompt("Ingresar nombre del propietario: ");

    switch (entrada) {
        case "Luciano":
            alert(entrada + " ES PROPIETARIO DE LA TIENDA: " + tiendaLuciano.nombre);
            break;    
        
        case "Apu":
            alert(entrada + " ES PROPIETARIO DE LA TIENDA: " + tiendaApu.nombre);
            break;
        
        case "Moe":
            alert(entrada + " ES PROPIETARIO DE LA TIENDA :" + tiendaMoe.nombre); 
            break;
        
        default:
            alert("No hay ningun propietario con ese nombre.");
            break;
    }            
} */

/* EJERCICIO "EL CLIENTE"

class Cliente {
    constructor(nombre, presupuesto, tarjeta, telefono) {
        this.nombre = nombre;
        this.presupuesto =  parseFloat(presupuesto);
        this.tarjeta = tarjeta;
        this.telefono = telefono;
    }

    transferirDinero(valor) {
        if((this.presupuesto > 0) && (valor < this.presupuesto)){
            this.presupuesto -= valor;
            return valor;
        } else {
            return 0;
        }
    }
}

const cliente1 = new Cliente("Luciano", 2000, true, "123456789");
const cliente2 = new Cliente("Roman",10000, false,"10101010");
const cliente3 = new Cliente("Palermo",9999, false, "0909090");

for(let i = 0; i < 5; i++) {
    let entrada = parseFloat(prompt("INGRESE MONTO: "));
    
    if(cliente1.transferirDinero(entrada)){
        alert("El cliente " + cliente1.nombre + " te puede pagar: " + entrada);
    }

    if(cliente2.transferirDinero(entrada)){
        alert("El cliente " + cliente2.nombre + " te puede pagar: " + entrada);
    }

    if(cliente3.transferirDinero(entrada)){
            alert("El cliente " + cliente3.nombre + " te puede pagar: " + entrada);    
    }
}   */

//---------------------------------------------------------------------------------------------------------//

// EJERCICIOS DE LAS CLASE N°6

/* EJERCICIO "EL EQUIPO"

const nombresEquipo = ["Homero", "Moe", "Apu", "Sr. Burns"];

for(let i = 0; i < nombresEquipo.length; i++) {
   console.log("Posición: " + i + "" + " Nombre: " + nombresEquipo[i]);
}

*/

/* EJERCICIO "CARGA EL EQUIPO"

const miEquipo = [];

let input = prompt("Ingrese un nombre, TIPEE ESC PARA DEJAR DE INGRESAR NOMBRES ");

while(input != "ESC") {
    miEquipo.push(input);
    input = prompt("Ingrese un nombre, TIPEE ESC PARA DEJAR DE INGRESAR NOMBRES ");
}

for(let i = 0; i < miEquipo.length; i++) {
    console.log(" Nombre: " + miEquipo[i] + " Posición: " + i);
}
*/


/* EJERCICIO "JUGADORES"

class Jugador {
    constructor (nombre, camiseta, edad, lesion) {
        this.nombre = nombre;
        this.camiseta = camiseta;
        this.edad = edad;
        this.lesion = lesion;
    }
}

const jugador1 = new Jugador ("Riquelme", 10, "39", false);
const jugador2 = new Jugador ("Tevez", 32, 37, true);
const jugador3 = new Jugador ("Palermo", 9, "41", false);
const jugador4 = new Jugador ("Neymar", 10, "30", true);
const jugador5 = new Jugador ("Messi", 30, "37", false);

const jugadores = [];
jugadores.push(jugador1);
jugadores.push(jugador2);
jugadores.push(jugador3);
jugadores.push(jugador4);
jugadores.push(jugador5);

console.log(jugadores); */


// EJERCICIO "BUSCAR JUGADOR"

class Jugador {
    constructor (nombre, camiseta, edad, lesion) {
        this.nombre = nombre;
        this.camiseta = camiseta;
        this.edad = edad;
        this.lesion = lesion;
    }

    buscarJugador(equipo, nombre) {
        
    }
}

const jugador1 = new Jugador ("Riquelme", 10, "39", false);
const jugador2 = new Jugador ("Tevez", 32, 37, true);
const jugador3 = new Jugador ("Palermo", 9, "41", false);
const jugador4 = new Jugador ("Neymar", 10, "30", true);
const jugador5 = new Jugador ("Messi", 30, "37", false);

const jugadores = [];
jugadores.push(jugador1);
jugadores.push(jugador2);
jugadores.push(jugador3);
jugadores.push(jugador4);
jugadores.push(jugador5);
