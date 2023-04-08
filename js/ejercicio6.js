//* 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
let num1 = prompt("Escriba un número");
let num2 = prompt("Escriba otro número");

if (num1 > num2) {
  document.write("El número mayor es " + num1);
} else {
  if (num1 == num2) {
    document.write("Los números ingresados son iguales");
  } else {
    document.write("El número mayor es " + num2);
  }
}