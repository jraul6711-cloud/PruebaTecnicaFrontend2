
//obtencion de botones
const btnAnterior = document.getElementById("btnSiguiente");
const btnSiguiente = document.getElementById("btnSiguiente");
const textoPregunta = document.getElementById("textoPregunta");
const contador = document.getElementById("contador");

//funciones
function irAnterior() {
    console.log("Boton anterior presionado")
    //logica para ir a la pregunta anterior
}//irAnterior

function irSiguiente() {
    console.log("Boton siguiente presionado")
    //logica para ir a la pregunta siguiente
}//irSiguiente

function mostrarPregunta() {
    const preguntaActual = preguntas[indiceActual];
    textoPregunta.textContent = preguntaActual.pregunta; //muestra texto de la pregunta actual
    contador.textContent = (indiceActual + 1)
}//mostrarPregunta

//eventos
btnAnterior.addEventListener("click", irAnterior);
btnSiguiente.addEventListener("click", irSiguiente);
document.addEventListener("DOMContentLoaded", function() {
    mostrarPregunta();
})

//arreglo de objetos: preguntas con sus respectivas respuestas
const preguntas = [
    {
        pregunta: "¿Cuál es la raíz cuadrada de 25?",
        opciones: ["5", "3", "25 no tiene raíz cuadrada", "2"],
        respuesta: 5
    },
    {
        pregunta: "¿Cuál es el cuadrado de 11?",
        opciones: ["110", "111", "121", "No se puede elevar al cuadrado"],
        respuesta: "121"
    }
];

//contador
let indiceActual = 0;