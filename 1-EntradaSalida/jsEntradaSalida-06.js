/*
Autor: Jonathan Joel Pastorino Marotti
Ejercicio: 06
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumero;
	var segundoNumero;
    var suma;

	primerNumero=document.getElementById('txtIdNumeroUno').value;
    primerNumero=parseInt(primerNumero)
   
    segundoNumero=document.getElementById('txtIdNumeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	//primerNumero=6;
	//segundoNumero="66";
	suma=primerNumero+segundoNumero;
	mensaje="Resultado: "+ suma;

	alert(mensaje);



}

