const divMensaje = document.querySelector("#mensaje");
const nodoNota1 = document.querySelector("#notaParcial");
const nodoNota2 = document.querySelector("#notaQuiz");
const nodoNota3 = document.querySelector("#notaTrabajo");
const nodoNota2P = document.querySelector("#notaParcial2");
const nodoNota2Q = document.querySelector("#notaQuiz2");
const nodoNota2T = document.querySelector("#notaTrabajo2");
const nodoNota3P = document.querySelector("#notaParcial3");
const nodoNota3Q = document.querySelector("#notaQuiz3");
const nodoNota3T = document.querySelector("#notaTrabajo3");
function porcentajeGeneral() {
  const { primerCorte, segundoCorte, tercerCorte } = porcentajes;
  const notaParcial = document.getElementById("notaParcial").value;
  const notaQuiz = document.getElementById("notaQuiz").value;
  const notaTrabajo = document.getElementById("notaTrabajo").value;
  const generalParcial = notaParcial * primerCorte.parcial;
  const generalQuiz = notaQuiz * primerCorte.quiz;
  const generalTrabajo = notaTrabajo * primerCorte.trabajo;
  document.getElementById("generalParcial").value = generalParcial.toFixed(2);
  document.getElementById("generalQuiz").value = generalQuiz.toFixed(2);
  document.getElementById("generalTrabajo").value = generalTrabajo.toFixed(2);
  const notaParcial2 = document.getElementById("notaParcial2").value;
  const notaQuiz2 = document.getElementById("notaQuiz2").value;
  const notaTrabajo2 = document.getElementById("notaTrabajo2").value;
  const generalParcial2 = notaParcial2 * segundoCorte.parcial;
  const generalQuiz2 = notaQuiz2 * segundoCorte.quiz;
  const generalTrabajo2 = notaTrabajo2 * segundoCorte.trabajo;
  document.getElementById("generalParcial2").value = generalParcial2.toFixed(2);
  document.getElementById("generalQuiz2").value = generalQuiz2.toFixed(2);
  document.getElementById("generalTrabajo2").value = generalTrabajo2.toFixed(2);
  const notaParcial3 = document.getElementById("notaParcial3").value;
  const notaQuiz3 = document.getElementById("notaQuiz3").value;
  const notaTrabajo3 = document.getElementById("notaTrabajo3").value;
  const generalParcial3 = notaParcial3 * tercerCorte.parcial;
  const generalQuiz3 = notaQuiz3 * tercerCorte.quiz;
  const generalTrabajo3 = notaTrabajo3 * tercerCorte.trabajo;
  document.getElementById("generalParcial3").value = generalParcial3.toFixed(2);
  document.getElementById("generalQuiz3").value = generalQuiz3.toFixed(2);
  document.getElementById("generalTrabajo3").value = generalTrabajo3.toFixed(2);
}
function calcularPromedioSuperior() {
  const generalTotal = Number(document.getElementById("generalTotal").value);
  const generalTotal2 = Number(document.getElementById("generalTotal2").value);
  const generalTotal3 = Number(document.getElementById("generalTotal3").value);

  const resultadoSuperior = generalTotal + generalTotal2 + generalTotal3;

  document.getElementById("resultadoSuperior").value =
    resultadoSuperior.toFixed(2);
}
