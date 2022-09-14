
// Declaro un array vacío
const productoList = [];

let producto;

function sumarProductoConIncludes(producto) {
  if (productoList.includes(producto)) {
    alert("Este producto ya fue agregado");
  } else {
    productoList.push(producto);
  }
}

while (true) {
  producto = prompt(
    "Escriba el nombre del producto que desea agregar, no se pueden repetir. Tipee ESC para dejar de agregar"
  );
  if ((producto === "ESC") || (producto === "esc")) {
    break;
  }
  sumarProductoConIncludes(producto);
}

alert("Sus productos son: " + productoList);