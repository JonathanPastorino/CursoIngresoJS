//Autor Jonathan Pastorino
//Parcial 2

function mostrar()
{
 
 var primerNombre;
 var seundoNombre;
 var kilo1;
 var kilo2;
 var sumar;
 var promedio;
 var mensaje;

 primerNombre= prompt("ingrese su nombre");
 segundoNombre=prompt("ingrese su nombre");
 kilo1=prompt("ingrese cuanto pesa en kilos");
 kilo1=parseInt(kilo1);
 kilo2=prompt("ingrese cuanto pesa en kilos");
 kilo2=parseInt(kilo2);


 sumar= kilo1 + kilo2;

 promedio= sumar/2;









  mensaje="Ustedes se llaman " + primerNombre  + " y "  + segundoNombre + " pesan " + kilo1+ "  y " +  kilo2 +  " kilos, que, sumados son " + sumar + " kilos y el promedio de peso es de " + promedio;

 alert(mensaje)



  
}
