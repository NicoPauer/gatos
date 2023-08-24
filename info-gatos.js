// Funciones para analizar la información de los gatos

function obtenerColor(nombre)
{
  /* devuelve el codigo hexadecimal del
     color el nombre del color que recibe como parametro
     si ya está en hexadecimal lo devuelve sino lo traduce */
   let color = "#000000";
  // Convierto nombre a minuscula
   let nomb = nombre.toLowerCase();
   if (nomb[0] === "#")
   {
    // Verifico si ya está en hexadecimal
     switch(nombre[1])
     {
      // Me había olvidado que también podía ser cero   
       case "0": color = nomb; break;
       case "1": color = nomb; break;
       case "2": color = nomb; break;
       case "3": color = nomb; break;
       case "4": color = nomb; break;  
       case "5": color = nomb; break;
       case "6": color = nomb; break;
       case "7": color = nomb; break;
       case "8": color = nomb; break;
       case "9": color = nomb; break;
       case "a": color = nomb; break;
       case "b": color = nomb; break;    
       case "c": color = nomb; break;   
       case "d": color = nomb; break;   
       case "e": color = nomb; break;  
       case "f": color = nomb; break;   
     }
   }
   else
   {
     // Si está el nombre de color en vez de código lo traduzco
     traducir = {"amarillo":"#ffff00","yellow":"#ffff00", "rojo":"#ff0000", "red":"#ff0000", "verde":"#00ff00", "green":"#00ff00", "azul":"#0000ff", "blue":"#0000ff", "blanco":"#ffffff", "white":"#ffffff", "negro":"#000000", "black":"#000000"};
     color = traducir[nomb];
   }
  // Puede retornar un color o dejarse vacia(sin código)
   return color;
}

function colorGatuno(codigoHex)
{
  /* A partir de un color en código decimal devuelve cierto tan
     solo si el codigo en bloque de dos digitos rojos es cero:
      codigoHex de la forma "#rrvvaa" siendo esas letras reemplazadas
      por numeros hexadecimales para que la funcion funcione */
  // Me aseguro que el color sea un código hexadecimal
    let cod = obtenerColor(codigoHex);
    return ((cod[1] === "0") && (cod[2] === "0"));
}
