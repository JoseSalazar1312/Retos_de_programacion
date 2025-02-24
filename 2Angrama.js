/*
 * Reto #1
 * ¿ES UN ANAGRAMA?
 * Fecha publicación enunciado: 03/01/22
 * Fecha publicación resolución: 10/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

function angrama(var1, var2) {
  let lvar1 = var1.toLowerCase();  //Asigna a una variable el texto en minusculas
  let lvar2 = var2.toLowerCase();  

  if (lvar1 === lvar2) {//Compara si las palabras son exactamente las mismas (Si lo son retorna false)
    return false; 
  }

  if (lvar1.length !== lvar2.length) { //Comprara la cantidad de caracteres de ambos valores y retorna false si son diferentes
    return false; 
  }

  let sortedVar1 = lvar1.split("").sort().join("");  //split("") <- convierte la palabra en un array de letras, sort() <- ordena las letras en orden alfabetico 
  let sortedVar2 = lvar2.split("").sort().join("");  // join("") <- Convierte el array en un nuevo string 
  console.log("La palabra:" + lvar1 + " ordenada es: " + sortedVar1)
  console.log("La palabra:" + lvar2 + " ordenada es: " + sortedVar2)

  if (sortedVar1 === sortedVar2) {  //Si la palabra de ambas variables es exactamente la misma retorna true
    console.log("Son anagramas");
    return true;
  }

  console.log("No son anagramas"); //De lo contrario es false.
  return false;
}


console.log(angrama("castor", "castro")); // true

