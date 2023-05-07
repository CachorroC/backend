import * as fs from 'fs/promises';
import rows from "../data/ConsultaNumeroRadicacion.procesos.json" assert { type: "json" };
import { intConsultaNumeroRadicacion, intProceso } from '../interface/procesos.js';

export const getProcesosfromRadicados = rows.flatMap(
  ( radicado ) => {
    console.log( rows );
    return radicado.procesos;
  }
);

console.log( getProcesosfromRadicados );
getProcesosfromRadicados;


getProcesosfromRadicados