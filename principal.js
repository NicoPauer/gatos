// Se encarga de la parte visual y la interacción con los distintos formularios

const formularioColor = document.querySelector("#texto-colores");

let colorIngresado = obtenerColor(formularioColor.value);
/* Si el color lo puede ver bien muestra imagen info-gatos.svg, sino
   muestra gato-triste.svg */

function analizarColor()
{
   if (colorGatuno(colorIngresado))
    {
      alert("Si lo vé");
    }
   else
   {
     alert("No lo vé");
   }
}
// Espero evento cambio en el valor de formulario de color
