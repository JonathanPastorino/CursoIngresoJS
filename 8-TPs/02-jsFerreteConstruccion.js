/* Autor: Jonathan Joel Pastorino Marotti
  TP: 02
2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

	var largo;
	var ancho;
	var sumar;
	var multiplicar;

	largo=document.getElementById('txtIdLargo').value;
	largo=parseInt(largo)
	ancho=document.getElementById('txtIdAncho').value;
	ancho=parseInt(ancho)

	sumar= largo + ancho;

	multiplicar= sumar*3;

	mensaje= "Se necesitan "+ multiplicar + " metros de alambre"

	alert(mensaje)


}

function Circulo () 
 {  

	var radio;
	var resultado;

	radio=document.getElementById('txtIdRadio').value;
	radio=parseInt(radio)

	resultado= radio*6.28; //(6.28=2π)

	mensaje= "se necesitan "+ resultado + " metros de alambre"

	alert(mensaje)

	
}

function Materiales () 
{
	var largo;
	var ancho;
	var sumar;
	var bolsasCemento;
	var bolsasCal;

	largo=document.getElementById('txtIdLargo').value;
	largo=parseInt(largo)
	ancho=document.getElementById('txtIdAncho').value;
	ancho=parseInt(ancho)

	sumar= largo + ancho;

	bolsasCemento= sumar*1;

	bolsasCal= sumar*1.5;

	mensaje= "Se necesitan "+ bolsasCemento + " bolsas de cemento y "+ bolsasCal + " bolsas de cal"

	alert(mensaje)
	
}