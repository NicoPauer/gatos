// Funciones para analizar la información de los gatos

function obtenerColor(nombre)
{
  /* devuelve el codigo hexadecimal del
     color el nombre del color que recibe como parametro
     si ya está en hexadecimal lo devuelve sino lo traduce */
   let color = "";
  // Convierto nombre a minuscula
   nombre = nombre.toLowerCase();
   if (nombre[0] === "#")
   {
    // Verifico si ya está en hexadecimal
     switch(nombre[1])
     {
       case "1": color = nombre; break;
       case "2": color = nombre; break;
       case "3": color = nombre; break;
       case "4": color = nombre; break;  
       case "5": color = nombre; break;
       case "6": color = nombre; break;
       case "7": color = nombre; break;
       case "8": color = nombre; break;
       case "9": color = nombre; break;
       case "a": color = nombre; break;
       case "b": color = nombre; break;    
       case "c": color = nombre; break;   
       case "d": color = nombre; break;   
       case "e": color = nombre; break;  
       case "f": color = nombre; break;   
     }
   }
   else
   {
     // Si está el nombre de color en vez de código lo traduzco
     traducir = {"amarillo":"#ffff00","yellow":"#ffff00", "rojo":"#ff0000", "red":"#ff0000", "verde":"#00ff00", "green":"#00ff00", "azul":"#0000ff", "blue":"#0000ff", "blanco":"#ffffff", "white":"#ffffff", "negro":"#000000", "black":"#000000"};
     color = traducir[nombre];
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
    return ((codigoHex[1] === "0") && (codigoHex[2] === "0"));
}
