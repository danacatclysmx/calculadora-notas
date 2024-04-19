// interfaz del usuario
export function capturarValores() {
  return {
    parcial1: Number(document.querySelector("#notaParcial").value),
    quiz1: Number(document.querySelector("#notaQuiz").value),
    trabajo1: Number(document.querySelector("#notaTrabajo").value),
    parcial2: Number(document.querySelector("#notaParcial2").value),
    quiz2: Number(document.querySelector("#notaQuiz2").value),
    trabajo2: Number(document.querySelector("#notaTrabajo2").value),
    parcial3: Number(document.querySelector("#notaParcial3").value),
    quiz3: Number(document.querySelector("#notaQuiz3").value),
    trabajo3: Number(document.querySelector("#notaTrabajo3").value),
  };
}
export function escribirMensaje(mensaje) {
  document.querySelector("#mensaje").innerHTML = ` <p>${mensaje}</p>`;
}
export function cambiarColor(idResultado, resultado) {
  const resultadoElement = document.getElementById(idResultado);
  if (resultado >= 0 && resultado <= 2.9) {
    resultadoElement.style.background = "#930E0B";
  } else if (resultado >= 3 && resultado < 3.5) {
    resultadoElement.style.background = "#FCE500";
  } else if (resultado >= 3.5 && resultado <= 5) {
    resultadoElement.style.background = "#26FF00";
  }
}
export function borrarCasillas(porcentajes) {
  const inputs = document.querySelectorAll("input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
  escribirMensaje("");
  inicializarPorcentajes(porcentajes);
}
export function inicializarPorcentajes(porcentajes) {
  // Asigna los porcentajes a los campos de entrada y los hace de solo lectura
  const { primerCorte, segundoCorte, tercerCorte } = porcentajes;

  document.getElementById("porcentajeParcial").value =
    primerCorte.parcial * 100;
  document.getElementById("porcentajeQuiz").value = primerCorte.quiz * 100;
  document.getElementById("porcentajetrabajo").value =
    primerCorte.trabajo * 100;

  document.getElementById("porcentajeParcial2").value =
    segundoCorte.parcial * 100;
  document.getElementById("porcentajeQuiz2").value = segundoCorte.quiz * 100;
  document.getElementById("porcentajetrabajo2").value =
    segundoCorte.trabajo * 100;

  document.getElementById("porcentajeParcial3").value =
    tercerCorte.parcial * 100;
  document.getElementById("porcentajeQuiz3").value = tercerCorte.quiz * 100;
  document.getElementById("porcentajetrabajo3").value =
    tercerCorte.trabajo * 100;
}
