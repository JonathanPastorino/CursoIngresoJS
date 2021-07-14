//Autor: Jonathan Joel Pastorino Marotti
//Ejercicio: IF 03

function mostrar()
{
	//tomo la edad  
	var edad;
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);
	if(edad<18)
	{
         alert("es menor");
	}
    else
	{
        alert("es mayor");
	}

	

}//FIN DE LA FUNCIÓN