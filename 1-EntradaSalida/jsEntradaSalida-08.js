/*
Autor: Jonathan Joel Pastorino Marotti
Ejercicio: 08
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var resultado;
	var Divisor;
	var Dividendo;

   Dividendo=document.getElementById('txtIdNumeroDividendo'). value;
   Dividendo=parseInt(Dividendo);

    Divisor=document.getElementById('txtIdNumeroDivisor').value;
    Divisor=parseInt(Divisor);

   resultado= Dividendo % Divisor;


   alert("el resto es " + resultado);
}
