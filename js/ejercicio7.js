//* 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let numero1 = prompt("Ingrese un número");
let numero2 = prompt("Ingrese otro número");
let numero3 = prompt("Ingrese un último número");

if (numero1 > numero2 && numero1 > numero3) {
  document.write("El número mayor es " + numero1);
} else {
  if (numero2 > numero3) {
    document.write("El número mayor es " + numero2);
  } else {
    document.write("El numero mayor es " + numero3);
  }
}