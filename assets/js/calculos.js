import { porcentajes, porcentajesCorte } from "./datos.js";
export function calcularPromedios(notas) {
  const promedioPrimerCorte = calcularPromedioCorte(
    notas.parcial1,
    notas.quiz1,
    notas.trabajo1
  );
  const promedioSegundoCorte = calcularPromedioCorte(
    notas.parcial2,
    notas.quiz2,
    notas.trabajo2
  );
  const promedioTercerCorte = calcularPromedioCorte(
    notas.parcial3,
    notas.quiz3,
    notas.trabajo3
  );
  const promedioGeneralPrimerCorte = calcularPromedioCorteGeneral(
    notas.parcial1,
    notas.quiz1,
    notas.trabajo1,
    "primerCorte"
  );
  const promedioGeneralsegundoCorte = calcularPromedioCorteGeneral(
    notas.parcial2,
    notas.quiz2,
    notas.trabajo2,
    "segundoCorte"
  );
  const promedioGeneralTercerCorte = calcularPromedioCorteGeneral(
    notas.parcial3,
    notas.quiz3,
    notas.trabajo3,
    "tercerCorte"
  );
  return {
    promedioPrimerCorte,
    promedioSegundoCorte,
    promedioTercerCorte,
    promedioGeneralPrimerCorte,
    promedioGeneralsegundoCorte,
    promedioGeneralTercerCorte,
  };
}
export function calcularPromedioFinal(
  promedioGeneralPrimerCorte,
  promedioGeneralsegundoCorte,
  promedioGeneralTercerCorte
) {
  return (
    promedioGeneralPrimerCorte +
    promedioGeneralsegundoCorte +
    promedioGeneralTercerCorte
  );
}
function calcularPromedioCorte(notaParcial, notaQuiz, notaTrabajo) {
  const { quiz, trabajo, parcial } = porcentajesCorte;
  const promedio =
    notaParcial * parcial + notaQuiz * quiz + notaTrabajo * trabajo;
  return promedio;
}
export function calcularGenerales(notas) {
  const porcentajesGeneralesPrimerCorte = calcularGeneralCorte(
    notas.parcial1,
    notas.quiz1,
    notas.trabajo1,
    "primerCorte"
  );
  const porcentajesGeneralesSegundoCorte = calcularGeneralCorte(
    notas.parcial2,
    notas.quiz2,
    notas.trabajo2,
    "segundoCorte"
  );
  const porcentajesGeneralesTercerCorte = calcularGeneralCorte(
    notas.parcial3,
    notas.quiz3,
    notas.trabajo3,
    "tercerCorte"
  );

  return {
    porcentajesGeneralesPrimerCorte,
    porcentajesGeneralesSegundoCorte,
    porcentajesGeneralesTercerCorte,
  };
}
function calcularGeneralCorte(notaParcial, notaQuiz, notaTrabajo, corte) {
  const generalParcial = notaParcial * porcentajes[corte].parcial;
  const generalQuiz = notaQuiz * porcentajes[corte].quiz;
  const generalTrabajo = notaTrabajo * porcentajes[corte].trabajo;
  return { generalParcial, generalQuiz, generalTrabajo };
}

function calcularPromedioCorteGeneral(
  notaParcial,
  notaQuiz,
  notaTrabajo,
  corte
) {
  const promedio =
    notaParcial * porcentajes[corte].parcial +
    notaQuiz * porcentajes[corte].quiz +
    notaTrabajo * porcentajes[corte].trabajo;
  return promedio;
}
