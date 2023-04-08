//* 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

let number = parseInt(prompt("Escribe un número"));

if (number % 2 == 0 || number % 3 == 0 || number % 5 == 0 || number % 7 == 0) {
  document.write("El numero ingresado es divisible por 2, 3, 5 o 7");
} else {
  document.write(
    "El numero ingresado no es divisible por 2, ni por 3, ni por 5, ni por 7"
  );
}