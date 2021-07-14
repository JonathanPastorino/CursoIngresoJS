/*Autor: Jonathan Joel Pastorino Marotti
 Ejercicio: IF 08
*/function mostrar()
{
	//tomo la edad  
	var edadIngresada;
	var estadoCivil;


	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	estadoCivil=document.getElementById('estadoCivil').value;


	if(edad >18 && estadoCivil == "Soltero")

	{
         alert("es soltero y no es menor");
	}

}//FIN DE LA FUNCIÓN

	


