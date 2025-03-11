/*
 * Reto #3
 * ¿ES UN NÚMERO PRIMO?
 * Fecha publicación enunciado: 17/01/22
 * Fecha publicación resolución: 24/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

function esPrimo(num) {
    if (num < 2) return false; // Números menores a 2 NO son primos
    if (num === 2 || num === 3) return true; // 2 y 3 son primos
    if (num % 2 === 0) return false; // Si es par y mayor que 2, NO es primo

    for (let i = 3; i <= Math.sqrt(num); i += 2) { // Solo revisamos impares
        if (num % i === 0) return false; // Si es divisible, NO es primo
    }

    return true; // Si no encontramos divisores, es primo
}

console.log(esPrimo(2));  // true
console.log(esPrimo(3));  // true
console.log(esPrimo(4));  // false
console.log(esPrimo(11)); // true
console.log(esPrimo(25)); // false
console.log(esPrimo(37)); // true