/*
Autor: Jonathan Joel Pastorino Marotti
Ejercicio: 10 bis
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var importe;
	var descuento;
	var resultado;
   

	importe = document.getElementById('txtIdImporte').value;
	importe = parseInt(importe);

	importe = prompt("Ingrese el importe");

	descuento = importe * 25 / 100;

	resultado = importe - descuento;


	document.getElementById('txtIdResultado').value = resultado;

	mensaje="Su descuento es de " + resultado + " pesos.";

	alert(mensaje);

}
