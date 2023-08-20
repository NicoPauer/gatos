// Se encarga de la parte visual y la interacción con los distintos formularios

/* Si el color lo puede ver bien muestra imagen info-gatos.svg, sino
   muestra gato-triste.svg */

function analizarColor(valor)
{
   if (colorGatuno(valor))
    {
      alert("Si lo vé");
    }
   else
   {
     alert("No lo vé");
   }
}
// Espero evento cambio en el valor de formulario de color
const formulario = document.querySelector("#texto-colores");
formulario.addEventListener("change", analizarColor(formulario.value));
