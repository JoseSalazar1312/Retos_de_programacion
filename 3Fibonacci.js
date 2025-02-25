/*
 * Reto #2
 * LA SUCESIÓN DE FIBONACCI
 * Fecha publicación enunciado: 10/01/22
 * Fecha publicación resolución: 17/01/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci empezando en 0.
 * La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores.
 * 0, 1, 1, 2, 3, 5, 8, 13...
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

var n1 = 0; //Iniciamos la variable n1
var n2 = 1; //Iniciamos la variable n2

for (var i = 0; i <50; i++){ //Bucle for que se ejecuta un total de 50 veces
    console.log(n3);         //Imprimimos el valor n3 (resultante de n1 + n2)
    var n3 = n1 + n2;        //Declaramos la variable n3
    n1 = n2;                 //Asignamos el nuevo valor a n1
    n2 = n3;                 //Asignamos el nuevo valor a n2
}


/* CHAT GPT SOLUCION 

var n1 = 0, n2 = 1; // Iniciamos n1 y n2

console.log(n1); // Imprimimos el primer número antes del bucle

for (var i = 1; i < 50; i++) { // Empezamos en 1 porque ya imprimimos el primer número
    console.log(n2); // Imprimimos el segundo número y siguientes
    n2 = n1 + n2; // Calculamos el siguiente número de la serie
    n1 = n2 - n1; // Actualizamos n1 de forma más eficiente
}
    */
