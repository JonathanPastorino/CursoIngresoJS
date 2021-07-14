/* Autor: Jonathan Joel Pastorino Marotti
   Ejercici: IF 05
*/
function mostrar()
{
	//tomo la edad  
	var edad;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);
	
	if(edad>17)
	{

		alert("mayor");

	}

	else
	{
		
         if(edad<13)
         {

           alert("niño");

         }

         else

         {

           	alert("adolecente");
           }
       }


}