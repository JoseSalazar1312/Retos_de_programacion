/*
 * Reto #4
 * ÁREA DE UN POLÍGONO
 * Fecha publicación enunciado: 24/01/22
 * Fecha publicación resolución: 31/01/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

//Creamos una clase padre para calcular el valor del area de un poligono (Triangulo, Cuadrado, Rectangulo)
class poligono{
    calcularArea(){
        throw new Error("EL metodo calcularArea debe implementarse en la subclase")
    }
}

class triangulo extends poligono{ //Clase triangulo extiende a clase poligono
    constructor(base, altura){    //Constructor quien recibe dos parametros
    super();                      //Necesario en js para inicializar la clase
    this.base = base;
    this.altura = altura;
    }

    calcularArea(){
        return (this.base * this.altura) / 2;
    }
}

class rectangulo extends poligono{
    constructor(base, altura){
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea(){
        return this.base * this.altura;
    }
}

class cuadrado extends poligono{
    constructor(lado) {
        super();
        this.lado = lado;
    }

    calcularArea(){
        return this.lado * this.lado;
    }
}

function calcularAreaPoligono(poligono){
    return poligono.calcularArea();
}

const Triangulo = new triangulo(10,9);
const Cuadrado = new cuadrado(10);
const Rectangulo = new rectangulo(3,5);

console.log("El área del triangulo es;" + calcularAreaPoligono(Triangulo));
console.log("El área del cuadrado es;" + calcularAreaPoligono(Cuadrado));
console.log("El área del rectangulo es;" + calcularAreaPoligono(Rectangulo));