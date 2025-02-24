/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */
for (let i = 1; i <= 100; i++){ //Bucle for donde i es iniciado en 1 y de detiene cuando 1 es igual menor a 100 y es incremental
    if (i % 3 === 0 && i % 5 ===0){ // si se cumplen ambas condiciones
        console.log("FizzBuzz"); //Imprime la palabra fizzbuzz
    }else if(i %  3 === 0){      //Si se cumple solo esta condicion
        console.log("Fizz");    //Imprime Fizz
    }else if(i % 5 === 0){      //Si se cumple solo esta condicion
        console.log("Buzz");    //Imprime la palabra buzz
    }else{                      //Si no se cumple ninguna condicion
        console.log(i);         //Imprime el numero natural
    }
}
