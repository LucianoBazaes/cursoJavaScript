
// Declaro un array vacío
const frutaList = [];

let fruta;

function sumarFrutaConIncludes(fruit) {
  if (frutaList.includes(fruit)) {
    alert("Esta fruta ya fue agregada");
  } else {
    frutaList.push(fruit);
  }
}

while (true) {
  fruta = prompt(
    "Escriba el nombre de la fruta que desea agregar, no se pueden repetir. Tipee ESC para dejar de agregar"
  );
  if (fruta === "ESC") {
    break;
  }
  sumarFrutaConIncludes(fruta);
}

alert("Sus frutas son: " + frutaList);