
//Variables | Constantes
const btnAnterior = document.getElementById("btnSiguiente");
const btnSiguiente = document.getElementById("btnSiguiente");
const textoPregunta = document.getElementById("textoPregunta");
const contador = document.getElementById("contador");
let respuestasUsuario = JSON.parse(localStorage.getItem("respuestas")) || [];
const contenedorRespuestas = document.getElementById("respuestas");

//contador
let indiceActual = 0;

//funciones
function irAnterior() {
    console.log("Boton anterior presionado")
    if (0 < indiceActual) {
        indiceActual--;
        mostrarPregunta();
    }//if indice > 0
}//irAnterior

function irSiguiente() {
    console.log("Boton siguiente presionado");
    if (indiceActual < preguntas.length) { //if (indiceActual < preguntas.length - 1) {
        indiceActual++;
        mostrarPregunta();
    }//if indice < total de preguntas
}//irSiguiente

function mostrarPregunta() {
    const preguntaActual = preguntas[indiceActual];
    textoPregunta.textContent = preguntaActual.pregunta; //muestra texto de la pregunta actual
    contador.textContent = (indiceActual + 1);
        // Limpiar respuestas anteriores
    contenedorRespuestas.innerHTML = "";

    preguntaActual.opciones.forEach((opcion, index) => {
        const label = document.createElement("label");
        const input = document.createElement("input");

        input.type = "radio";
        input.name = "respuesta";
        input.value = opcion;

        // Si ya fue respondida, marcarla
        if (respuestasUsuario[indiceActual] === opcion) {
            input.checked = true;
        }

        // Guardar respuesta al hacer click
        input.addEventListener("change", () => {
            respuestasUsuario[indiceActual] = opcion;
            localStorage.setItem(
                "respuestas",
                JSON.stringify(respuestasUsuario)
            );
        });

        label.appendChild(input);
        label.append(" " + opcion);
        contenedorRespuestas.appendChild(label);
        contenedorRespuestas.appendChild(document.createElement("br"));
    });
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

