//* 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

let number = parseInt(prompt("Escribe un número"));

if (number % 2 == 0 || number % 3 == 0 || number % 5 == 0 || number % 7 == 0) {
  if (number % 2 == 0) {
    document.write("Es divisible por 2 ");
  }
  if (number % 3 == 0) {
    document.write("Es divisible por 3 ");
  }
  if (number % 5 == 0) {
    document.write("Es divisible por 5 ");
  }
  if (number % 7 == 0) {
    document.write("Es divisible por 7 ");
  }
} else {
  document.write("No es divisible por 2, ni por 3, ni por 5, ni por 7");
}