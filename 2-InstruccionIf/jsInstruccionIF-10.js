/*Autor: Jonathan Joel Pastorino Marotti
 Ejercicio: IF 10
*/function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numeroRandom;
	var mensaje;

	numeroRandom= Math.floor(Math.random()*10)+1;

	if(numeroRandom>8)
	{
		mensaje="EXELENTE";
	}

	else
	{
		if(numeroRandom>3)
		{
			mensaje="APROBÓ";
		}
		  else
		{
			mensaje="Vamos, la proxima se puede";
		}
	}
           alert(mensaje);
}//FIN DE LA FUNCIÓN