/*
Autor: Jonathan Joel Pastorino Marotti
Ejercicio: 09 bis
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo;
	var aumento;
	var resultado;

    sueldo = prompt("ingrese su sueldo", "Ingrese aqui o Son 2 Bitcoins ☺");
  	sueldo = document.getElementById('txtIdSueldo').value;
	sueldo = parseInt(sueldo);

	aumento = sueldo * 10 / 100;

	resultado = sueldo+aumento;


	document.getElementById('txtIdResultado').value = resultado;

	mensaje="su aumento es " + resultado;

	alert(mensaje);




}
