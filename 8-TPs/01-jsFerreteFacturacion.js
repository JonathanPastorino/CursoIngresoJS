/*  Autor: Jonathan Joel Pastorino Marotti
    TP: 01
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() 
{
	
  var preciouno;
  var preciodos;
  var preciotres;
  var Sumar;
  var resultado;

  preciouno=document.getElementById('txtIdPrecioUno').value;
  preciouno=parseInt(preciouno)

  preciodos=document.getElementById('txtIdPrecioDos').value;
  preciodos=parseInt(preciodos)

  preciotres=document.getElementById('txtIdPrecioTres').value;
  preciotres=parseInt(preciotres)

  Sumar = preciouno + preciodos + preciotres;

  resultado= Sumar;


  mensaje = " El resultado es: " + resultado;

  alert(mensaje)

}


function Promedio () 
{
	
 var  preciouno;
 var  preciodos;
 var  preciotres;
 var  Sumar;
 var  Promedio;
 var  resultado;

 preciouno=document.getElementById('txtIdPrecioUno').value;
 preciouno=parseInt(preciouno)

 preciodos=document.getElementById('txtIdPrecioDos').value;
 preciodos=parseInt(preciodos)

 preciotres=document.getElementById('txtIdPrecioTres').value;
 preciotres=parseInt(preciotres)

 Sumar= preciouno + preciodos + preciotres;

 Promedio= 3;

 resultado= Sumar/Promedio;


 mensaje= " El Promedio es de: " + resultado;

 alert(mensaje)

 }


function PrecioFinal () 


{
 var  preciouno;	
 var  preciodos;
 var  preciotres;
 var  Sumar;
 var  aumento;
 var  PrecioFinal;
 var  resultado;

 preciouno=document.getElementById('txtIdPrecioUno').value;
 preciouno=parseInt(preciouno)

 preciodos=document.getElementById('txtIdPrecioDos').value;
 preciodos=parseInt(preciodos)

 preciotres=document.getElementById('txtIdPrecioTres').value;
 preciotres=parseInt(preciotres)

 Sumar = preciouno + preciodos + preciotres;

 aumento=Sumar *21 /100;

 PrecioFinal=Sumar+aumento;

 resultado= PrecioFinal;

 mensaje= "El Precio Final es de: " + resultado;

 alert(mensaje)


 





}