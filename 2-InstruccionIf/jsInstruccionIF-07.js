/* Autor:Jonathan Joel Pastorino Marotti
   Ejercicio: IF 07
*/function mostrar()
{
	//tomo la edad  
    var edad;
    var estadoCivil;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);
	estadoCivil=document.getElementById('estadoCivil').value;

	if(edad <18 && estadoCivil != "Soltero")

	{
         alert("es muy pequeño para NO ser soltero");
	}

}//FIN DE LA FUNCIÓN