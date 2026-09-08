/* =========================
CAMBIAR COLOR
========================= */

function cambiarColor() {

const colores = [
"#f8f5ff",
"#fff5f7",
"#f3f9ff",
"#f5fff7",
"#fffaf0"
];

const colorActual = document.body.style.backgroundColor;

let nuevoColor;

do {
nuevoColor = colores[Math.floor(Math.random() * colores.length)];
} while (nuevoColor === colorActual && colores.length > 1);

document.body.style.backgroundColor = nuevoColor;
}


/* =========================
QUIZ
========================= */

function corregirQuiz() {

let puntos = 0;

const pregunta1 = document.querySelector(
'input[name="pregunta1"]:checked'
);

const pregunta2 = document.querySelector(
'input[name="pregunta2"]:checked'
);

const pregunta3 = document.querySelector(
'input[name="pregunta3"]:checked'
);


if (pregunta1 && pregunta1.value === "correcto") {
puntos++;
}

if (pregunta2 && pregunta2.value === "correcto") {
puntos++;
}

if (pregunta3 && pregunta3.value === "correcto") {
puntos++;
}


const resultado = document.getElementById("resultado");


if (puntos === 3) {

resultado.innerHTML =
"🎉 ¡Excelente! Respondiste correctamente las 3 preguntas.";

} else if (puntos === 2) {

resultado.innerHTML =
"👏 ¡Muy bien! Tuviste 2 respuestas correctas.";

} else if (puntos === 1) {

resultado.innerHTML =
"💡 Tuviste 1 respuesta correcta. Podés repasar el contenido.";

} else {

resultado.innerHTML =
"📚 No obtuviste respuestas correctas. ¡Volvé a leer la página e intentá nuevamente!";
}
}
