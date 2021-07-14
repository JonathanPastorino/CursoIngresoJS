//Autor Jonathan Pastorino
 //Parcial 1
function mostrar()
{

 var perimetro;
 var lados;
 var tamaño;
 var mensaje;

 tamaño=prompt("ingrese el tamaño de un lado del triangulo");
 tamaño=parseInt(tamaño);

 lados=tamaño*3;

 perimetro=lados;

 mensaje="El perimetro del triangulo equilatero es de "+ perimetro;

 alert(mensaje)



}
