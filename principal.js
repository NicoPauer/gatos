// Se encarga de la parte visual y la interacción con los distintos formularios

/* Si el color lo puede ver bien muestra imagen info-gatos.svg, sino
   muestra gato-triste.svg */

function analizarColor()
{
  // Conviene que sea local esta parte así actualizo el color 
   const formularioColor = document.querySelector("#texto-colores");
   let colorIngresado = obtenerColor(formularioColor.value);
   
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
