/* Autor: Jonathan Joel Pastorino Marotti
   TP: 03
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
   var  temperaturaFahrenheit;
   var  Centígrados;

   temperaturaFahrenheit=document.getElementById('txtIdTemperatura').value;
   temperaturaFahrenheit=parseInt(temperaturaFahrenheit)

   Centígrados= temperaturaFahrenheit -32;

   mensaje= temperaturaFahrenheit + " grados Fahrenheit son " + Centígrados + " grados Centígrados"

   alert(mensaje)



	
}

function CentigradosFahrenheit () 
{
   var  temperaturaCentigrados;
   var  Fahrenheit;

   temperaturaCentigrados=document.getElementById('txtIdTemperatura').value;
   temperaturaCentigrados=parseInt(temperaturaCentigrados)

   Fahrenheit= temperaturaCentigrados + 32;

   mensaje= temperaturaCentigrados + " grados Centigrados son " + Fahrenheit + " grados Fahrenheit"

   alert(mensaje)



	
}
