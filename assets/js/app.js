import * as UI from "./ui.js";
import { porcentajes } from "./datos.js";
import {
  calcularPromedioFinal,
  calcularPromedios,
  calcularGenerales,
} from "./calculos.js";
function llamarCalculo() {
  const notas = UI.capturarValores();
  const {
    promedioPrimerCorte,
    promedioSegundoCorte,
    promedioTercerCorte,
    promedioGeneralPrimerCorte,
    promedioGeneralsegundoCorte,
    promedioGeneralTercerCorte,
  } = calcularPromedios(notas);
  document.getElementById("resultado").value = promedioPrimerCorte.toFixed(2);
  document.getElementById("generalTotal").value =
    promedioGeneralPrimerCorte.toFixed(2);
  document.getElementById("resultado2").value = promedioSegundoCorte.toFixed(2);
  document.getElementById("generalTotal2").value =
    promedioGeneralsegundoCorte.toFixed(2);
  document.getElementById("resultado3").value = promedioTercerCorte.toFixed(2);
  document.getElementById("generalTotal3").value =
    promedioGeneralTercerCorte.toFixed(2);
  UI.cambiarColor("resultado", promedioPrimerCorte);
  UI.cambiarColor("resultado2", promedioSegundoCorte);
  UI.cambiarColor("resultado3", promedioTercerCorte);
  const promedioFinal = calcularPromedioFinal(
    promedioGeneralPrimerCorte,
    promedioGeneralsegundoCorte,
    promedioGeneralTercerCorte
  );
  const {
    porcentajesGeneralesPrimerCorte,
    porcentajesGeneralesSegundoCorte,
    porcentajesGeneralesTercerCorte,
  } = calcularGenerales(notas);
  document.getElementById("generalParcial").value =
    porcentajesGeneralesPrimerCorte.generalParcial.toFixed(2);
  document.getElementById("generalQuiz").value =
    porcentajesGeneralesPrimerCorte.generalQuiz.toFixed(2);
  document.getElementById("generalTrabajo").value =
    porcentajesGeneralesPrimerCorte.generalTrabajo.toFixed(2);

  document.getElementById("generalParcial2").value =
    porcentajesGeneralesSegundoCorte.generalParcial.toFixed(2);
  document.getElementById("generalQuiz2").value =
    porcentajesGeneralesSegundoCorte.generalQuiz.toFixed(2);
  document.getElementById("generalTrabajo2").value =
    porcentajesGeneralesSegundoCorte.generalTrabajo.toFixed(2);

  document.getElementById("generalParcial3").value =
    porcentajesGeneralesTercerCorte.generalParcial.toFixed(2);
  document.getElementById("generalQuiz3").value =
    porcentajesGeneralesTercerCorte.generalQuiz.toFixed(2);
  document.getElementById("generalTrabajo3").value =
    porcentajesGeneralesTercerCorte.generalTrabajo.toFixed(2);

  document.getElementById("resultadoSuperior").value = promedioFinal.toFixed(2);
  UI.escribirMensaje(`El promedio final es: ${promedioFinal.toFixed(2)} `);
}
function inicializarEventos() {
  document
    .querySelector("#notaParcial")
    .addEventListener("input", llamarCalculo);
  document.querySelector("#notaQuiz").addEventListener("input", llamarCalculo);
  document
    .querySelector("#notaTrabajo")
    .addEventListener("input", llamarCalculo);
  //___________________________________________________

  document
    .querySelector("#notaParcial2")
    .addEventListener("input", llamarCalculo);
  document.querySelector("#notaQuiz2").addEventListener("input", llamarCalculo);
  document
    .querySelector("#notaTrabajo2")
    .addEventListener("input", llamarCalculo);
  //__________________________________________________________
  document
    .querySelector("#notaParcial3")
    .addEventListener("input", llamarCalculo);
  document.querySelector("#notaQuiz3").addEventListener("input", llamarCalculo);
  document
    .querySelector("#notaTrabajo3")
    .addEventListener("input", llamarCalculo);

  document
    .getElementById("borrar")
    .addEventListener("click", (e) => UI.borrarCasillas(porcentajes));
  UI.inicializarPorcentajes(porcentajes);
}
document.addEventListener("DOMContentLoaded", inicializarEventos);
