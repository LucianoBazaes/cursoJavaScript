
let precioUsuario;
let cantidadProductos;
let montoFinal = 0;

function esNumeroInvalido (input) {

    if(isNaN(parseFloat(input)) || parseFloat(input) <= 0){
        alert("El precio ingresado no es válido");
        return true;
    }
    return false;
}

function validarNumeroCantidad (input) {
    
    if(isNaN(parseInt(input)) || parseInt(input) <= 0){
        alert("La cantidad ingresada no es válida");
        return true;
    }
    return false;
}

while(true){
    precioUsuario = prompt("Ingrese el precio del producto que desea comprar: (Tipee ESC para dejar de ingresar precios) ");
    if(precioUsuario === "ESC"){
        break;
    }
    if(esNumeroInvalido(precioUsuario)){  
        continue;
    }
    cantidadProductos = prompt("Ingrese la cantidad de los productos seleccionados que desea ", cantidadProductos);
    montoFinal += (parseInt(cantidadProductos) * parseFloat(precioUsuario));
}

alert(`El monto final a pagar es: ${montoFinal}`);