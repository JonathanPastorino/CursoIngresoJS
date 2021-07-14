//Autor Jonathan Pastorino 
//Parcial 2

function mostrar()
{
 
 var precio;
 var porcentajeDescuento;
 var PrecioFinal;
 var mensaje;

 precio=prompt("ingrese el precio");
 precio=parseInt(precio);

 porcentajeDescuento=prompt("ingrese porcentaje de Descuento");
 porcentajeDescuento=parseInt(porcentajeDescuento);

 PrecioFinal=(precio*porcentajeDescuento)/100;

 mensaje= "El precio Final es: " + PrecioFinal + " pesos";

 document.getElementById('elPrecioFinal').value=mensaje;




}
