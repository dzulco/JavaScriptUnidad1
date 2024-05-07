/*1. Escribe un programa de una sola línea que haga que aparezca en la pantalla un
alert que diga “Hello World”.
2. Escribe un programa de una sola línea que escriba en la pantalla un texto que
diga “Hello World” (document.write).
3. Escribe un programa de una sola línea que escriba en la pantalla el resultado
de sumar 3 + 5.
4. Escribe un programa de dos líneas que pida el nombre del usuario con un
prompt y escriba un texto que diga “Hola nombreUsuario”
5. Escribe un programa de tres líneas que pida un número, pida otro número y
escriba el resultado de sumar estos dos números.
*/
/*
alert("Hello World");

document.write("Hola mundo");
document.write("<br>");

document.write("Suma de 3+5=", 3+5);
document.write("<br>");

var usuario = prompt("Ingrese nombre de usuario");
document.write("Hola ",usuario);
document.write("<br>");

var numberOne = prompt("Ingrese un numero");
var numberTwo = prompt("Ingrese otro numero");
document.write("Suma de los nros es:",parseInt(numberOne)+parseInt(numberTwo));
document.write("<br>");
*/
/*Ejercicio extra (combinando .js, .css y .html): Crear una página que
pida el nombre del usuario, dos valores y nos muestre las 4
operaciones aritméticas. Todos los datos deberán aparecer en el
documento, incorporar estilos.
*/

var usuario = prompt("Ingrese nombre de usuario");
var numberOne = prompt("Ingrese un numero");
var numberTwo = prompt("Ingrese otro numero");

showMathOperations("PROMPT",numberOne,numberTwo);

function onFormSubmit()
{
    var numberOne = document.getElementById("valor_1").value;
    var numberTwo = document.getElementById("valor_2").value;
    showMathOperations("FORM",numberOne,numberTwo);
}

function showMathOperations(inputMethod,numberOne,numberTwo)
{
    document.write("Suma de los nros es:",parseInt(numberOne)+parseInt(numberTwo));
    document.write("<br>");
    document.write("Resta de los nros es:",parseInt(numberOne)-parseInt(numberTwo));
    document.write("<br>");
    document.write("Multiplicacion de los nros es:",parseInt(numberOne)*parseInt(numberTwo));
    document.write("<br>");
    document.write("División de los nros es:",parseInt(numberOne)/parseInt(numberTwo));
    document.write("<br>");
    document.write("Método de ingreso de datos: ",inputMethod);
}