/*
Autor: Jonathan Joel Pastorino Marotti
Ejercicio: 07
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero;
	var segundoNumero;
	var resultado;
	var suma;

	primerNumero=document.getElementById('txtIdNumeroUno').value;
    primerNumero=parseInt(primerNumero)
   
    segundoNumero=document.getElementById('txtIdNumeroDos').value;
	segundoNumero=parseInt(segundoNumero)

	suma= primerNumero + segundoNumero;

	sumar=suma;

	mensaje= "resultado: " + suma;

	alert(mensaje)
}

function restar()
{
	var primerNumero;
	var segundoNumero;
	var resultado;
	var resta;

	primerNumero=document.getElementById('txtIdNumeroUno').value;
    primerNumero=parseInt(primerNumero)
   
    segundoNumero=document.getElementById('txtIdNumeroDos').value;
	segundoNumero=parseInt(segundoNumero)

	resta= primerNumero - segundoNumero;

	mensaje= "resultado: " + resta;

	alert(mensaje)
}

function multiplicar()
{ 
	var primerNumero;
	var segundoNumero;
	var resultado;
	var multiplicar;

	primerNumero=document.getElementById('txtIdNumeroUno').value;
    primerNumero=parseInt(primerNumero)
   
    segundoNumero=document.getElementById('txtIdNumeroDos').value;
	segundoNumero=parseInt(segundoNumero)

	multiplicar= primerNumero * segundoNumero;

	mensaje= "resultado: " + multiplicar;

	alert(mensaje)
}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var resultado;
	var dividir;

	primerNumero=document.getElementById('txtIdNumeroUno').value;
    primerNumero=parseInt(primerNumero)
   
    segundoNumero=document.getElementById('txtIdNumeroDos').value;
	segundoNumero=parseInt(segundoNumero)

	dividir= primerNumero / segundoNumero;

	mensaje= "resultado: " + dividir;

	alert(mensaje)
}

