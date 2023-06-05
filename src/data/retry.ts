<<<<<<< HEAD
import * as fs from "fs/promises";
=======
import { intConsultaActuaciones } from '#@/interface/procesos';
import * as fs from 'fs/promises';
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
export interface intFulfilledFetchProcesos {
  tipoConsulta: TipoConsulta;
  procesos: Proceso[];
  parametros: Parametros;
  paginacion: Paginacion;
  llaveProceso: string;
  iOfA: string;
}

export interface Paginacion {
  cantidadRegistros: number;
  registrosPagina: number;
  cantidadPaginas: number;
  pagina: number;
  paginas: null;
}

export interface Parametros {
  numero: string;
  nombre: null;
  tipoPersona: null;
  idSujeto: null;
  ponente: null;
  claseProceso: null;
  codificacionDespacho: null;
  soloActivos: boolean;
}

export interface Proceso {
  idProceso: number;
  idConexion: number;
  llaveProceso: string;
  fechaProceso: Date | null;
  fechaUltimaActuacion: Date | null;
  despacho: string;
  departamento: Departamento;
  sujetosProcesales: string;
  esPrivado: boolean;
  cantFilas: number;
}

export enum Departamento {
  Antioquia = "ANTIOQUIA",
  Bogotá = "BOGOTÁ",
  Cundinamarca = "CUNDINAMARCA",
}

export enum TipoConsulta {
  NumeroRadicacion = "NumeroRadicacion",
}

const procesos = [
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 011 CIVIL DEL CIRCUITO DE BOGOTÁ ",
    esPrivado: true,
    fechaProceso: null,
    fechaUltimaActuacion: null,
    idConexion: 320,
    idProceso: 80553011,
    llaveProceso: "11001310301120170033500",
    sujetosProcesales: "--- [ PROCESO PRIVADO ] ---",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 001 CIVIL DEL CIRCUITO DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-05-31T00:00:00",
    fechaUltimaActuacion: "2023-03-10T00:00:00",
    idConexion: 310,
    idProceso: 1805257424,
    llaveProceso: "11001310301120170033500",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: OMAR DARIO ZEA GALVIS ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 017 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-08-09T00:00:00",
    fechaUltimaActuacion: "2023-05-17T00:00:00",
    idConexion: 259,
    idProceso: 50621670,
    llaveProceso: "11001400300120170100100",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: WILSON ALFONSO JIMENEZ MENDIETA ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 010 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-10-09T00:00:00",
    fechaUltimaActuacion: "2023-05-19T00:00:00",
    idConexion: 259,
    idProceso: 50764880,
    llaveProceso: "11001400300120170130900",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: ANA BEATRIZ CORREDOR DE OSORIO ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 007 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2018-07-18T00:00:00",
    fechaUltimaActuacion: "2019-01-15T00:00:00",
    idConexion: 259,
    idProceso: 51315290,
    llaveProceso: "11001310303720170045300",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: DIANA VANESSA NARANJO HERNANDEZ ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 003 CIVIL DEL CIRCUITO DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-09-11T00:00:00",
    fechaUltimaActuacion: "2019-09-20T00:00:00",
    idConexion: 310,
    idProceso: 57718874,
    llaveProceso: "11001310303720170045300",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S. A. | Demandado: DIANA VANESSA NARANJO HERNANDEZ ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 013 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-10-17T00:00:00",
    fechaUltimaActuacion: "2023-03-14T00:00:00",
    idConexion: 259,
    idProceso: 50780430,
    llaveProceso: "11001400300220170100200",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: JOGLI JOAQUIN OTERO VARGAS ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 003 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-05-26T00:00:00",
    fechaUltimaActuacion: "2023-04-17T00:00:00",
    idConexion: 259,
    idProceso: 50468620,
    llaveProceso: "11001400300320170088400",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: YESID ALBEIRO RAMOS ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 003 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-05-24T00:00:00",
    fechaUltimaActuacion: null,
    idConexion: 320,
    idProceso: 113956611,
    llaveProceso: "11001400300320170088400",
    sujetosProcesales:
      "Demandante/accionante: BANCOLOMBIA SA | Demandado/indiciado/causante: YESID ALBEIRO RAMOS  (Emplazado) | Defensor Publico: MARIA HELENA SUAREZ GARCIA ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 003 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-07-27T00:00:00",
    fechaUltimaActuacion: "2023-06-01T00:00:00",
    idConexion: 259,
    idProceso: 50598770,
    llaveProceso: "11001400300320170126400",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: NIDIA DORANCY GOMEZ BLANCO ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 002 CIVIL DEL CIRCUITO DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-10-03T00:00:00",
    fechaUltimaActuacion: "2022-06-15T00:00:00",
    idConexion: 310,
    idProceso: 28937944,
    llaveProceso: "11001310302520170073600",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S. A. | Demandado: MIGUEL ANGEL HUERTAS VALENCIA ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 018 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-06-15T00:00:00",
    fechaUltimaActuacion: "2023-06-02T00:00:00",
    idConexion: 259,
    idProceso: 50508870,
    llaveProceso: "11001400300420170057500",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: SONIA MAZUERA ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 009 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-11-21T00:00:00",
    fechaUltimaActuacion: "2022-02-04T00:00:00",
    idConexion: 259,
    idProceso: 50859050,
    llaveProceso: "11001400300420170126600",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: GILBERTO JAIME BETANCOURT ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 007 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2018-04-26T00:00:00",
    fechaUltimaActuacion: "2023-02-27T00:00:00",
    idConexion: 259,
    idProceso: 51149410,
    llaveProceso: "11001400300420180047500",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: ADOLFO LEON DAZA FERNANDEZ ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 013 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-06-21T00:00:00",
    fechaUltimaActuacion: "2023-05-09T00:00:00",
    idConexion: 259,
    idProceso: 50521190,
    llaveProceso: "11001400300620170030200",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: ANA RITA GUZMAN GOMEZ ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 011 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-07-26T00:00:00",
    fechaUltimaActuacion: "2023-05-10T00:00:00",
    idConexion: 259,
    idProceso: 50593100,
    llaveProceso: "11001400300620170041900",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: DERLY CATHERINE CASTRO IZQUIERDO ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 004 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-11-21T00:00:00",
    fechaUltimaActuacion: "2023-05-09T00:00:00",
    idConexion: 259,
    idProceso: 50857820,
    llaveProceso: "11001400300620170096400",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: HECTOR ALONSO TORRES RIOS ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 017 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2018-04-30T00:00:00",
    fechaUltimaActuacion: "2023-04-10T00:00:00",
    idConexion: 259,
    idProceso: 51154840,
    llaveProceso: "11001400300620180045400",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: SMARTITECH SAS | Demandado: EDISSON ARMANDO KARL BUITRAGO ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 006 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: true,
    fechaProceso: null,
    fechaUltimaActuacion: null,
    idConexion: 320,
    idProceso: 81649171,
    llaveProceso: "11001400300620180045400",
    sujetosProcesales: "--- [ PROCESO PRIVADO ] ---",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 001 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-09-05T00:00:00",
    fechaUltimaActuacion: "2022-07-21T00:00:00",
    idConexion: 259,
    idProceso: 112758450,
    llaveProceso: "11001400300820170105800",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: ANDRES FELIPE GUTIERREZ TRUJILLO ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 006 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-09-19T00:00:00",
    fechaUltimaActuacion: "2023-03-01T00:00:00",
    idConexion: 259,
    idProceso: 50716620,
    llaveProceso: "11001400300820170113400",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: FANOR DIAZ AGUDELO ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 018 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-11-28T00:00:00",
    fechaUltimaActuacion: "2022-01-26T00:00:00",
    idConexion: 259,
    idProceso: 50875780,
    llaveProceso: "11001400300920170127900",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: JOSE HERNANDO SANCHEZ VALBUENA ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 002 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-10-06T00:00:00",
    fechaUltimaActuacion: "2023-04-27T00:00:00",
    idConexion: 259,
    idProceso: 50760030,
    llaveProceso: "11001400301120170108400",
    sujetosProcesales:
      "Demandante: TITULARIZADORA COLOMBIANA S.A. HITOS | Demandado: JAVIER GONZALEZ TAGUA ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 015 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-08-30T00:00:00",
    fechaUltimaActuacion: "2022-03-17T00:00:00",
    idConexion: 259,
    idProceso: 50669130,
    llaveProceso: "11001400301220170097100",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: FABIO ALBERTO RIVERA MESA | Demandado: NELIDA DEL CARMEN RIVERA MESA ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 016 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-09-05T00:00:00",
    fechaUltimaActuacion: "2023-05-24T00:00:00",
    idConexion: 259,
    idProceso: 50685530,
    llaveProceso: "11001400301320170116200",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: CARLOS JAVIER BECERRA BENAVIDES ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 013 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-09-08T00:00:00",
    fechaUltimaActuacion: "2023-04-17T00:00:00",
    idConexion: 259,
    idProceso: 50692590,
    llaveProceso: "11001400301320170117800",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: SOL JUDITH BUITRAGO DUQUE ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 014 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2018-04-09T00:00:00",
    fechaUltimaActuacion: "2018-04-26T00:00:00",
    idConexion: 259,
    idProceso: 51107470,
    llaveProceso: "11001400301420180040600",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: JORGE ARMANDO PEREZ JIMENEZ ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 009 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2018-08-01T00:00:00",
    fechaUltimaActuacion: "2023-06-01T00:00:00",
    idConexion: 259,
    idProceso: 51341610,
    llaveProceso: "11001400301420180092900",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: JOSE RODRIGO GARCIA QUINTERO ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 011 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-10-13T00:00:00",
    fechaUltimaActuacion: "2021-11-08T00:00:00",
    idConexion: 259,
    idProceso: 50777890,
    llaveProceso: "11001400301520170139400",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: ANA LUCIA AGUILAR | Demandado: CARMELINA AGUILAR | Demandado: HUMBERTO AVILA MATIAS ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 002 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-02-08T00:00:00",
    fechaUltimaActuacion: "2022-08-11T00:00:00",
    idConexion: 259,
    idProceso: 50242270,
    llaveProceso: "11001400301620170015700",
    sujetosProcesales:
      "Demandante: BANCO DE BOGOTA | Demandado: WILSON GONZALEZ ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 018 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-09-06T00:00:00",
    fechaUltimaActuacion: "2023-05-16T00:00:00",
    idConexion: 259,
    idProceso: 50687430,
    llaveProceso: "11001400301620170087500",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: JORGE ALBERTO MARTINEZ BENDECK ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 017 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-09-20T00:00:00",
    fechaUltimaActuacion: "2023-05-26T00:00:00",
    idConexion: 259,
    idProceso: 50721470,
    llaveProceso: "11001400301720170119500",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: ALIRIO HEREDIA BUITRAGO ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 017 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-09-19T00:00:00",
    fechaUltimaActuacion: null,
    idConexion: 320,
    idProceso: 127748331,
    llaveProceso: "11001400301720170119500",
    sujetosProcesales:
      "Demandante/accionante: Banco de Colombia S.A | Demandado/indiciado/causante: ALIRIO  HEREDIA BUITRAGO (Emplazado) | Defensor Privado: MARIA HELENA SUAREZ GARCIA ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 015 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-10-18T00:00:00",
    fechaUltimaActuacion: "2022-03-28T00:00:00",
    idConexion: 259,
    idProceso: 50782960,
    llaveProceso: "11001400301720170133600",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: NATALIA CUESTAS MONDRAGON ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 016 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-09-18T00:00:00",
    fechaUltimaActuacion: "2022-09-16T00:00:00",
    idConexion: 259,
    idProceso: 50711570,
    llaveProceso: "11001400301820170152200",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: JOSE AHINSONJOVER TORO VARGAS ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 020 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2010-04-19T00:00:00",
    fechaUltimaActuacion: "2014-04-02T00:00:00",
    idConexion: 259,
    idProceso: 45029250,
    llaveProceso: "11001400302020100050100",
    sujetosProcesales:
      "Demandante: COOMEVA COOPERATIVA FINACIERA | Demandado: HECTOR JULIAN SANCHEZ RAMIREZ | Demandado: CLAUDIA LORENA VINASCO TAPIE ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 015 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-10-11T00:00:00",
    fechaUltimaActuacion: "2023-05-15T00:00:00",
    idConexion: 259,
    idProceso: 50769660,
    llaveProceso: "11001400302120170153200",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: LIBARDO ALFONSO GONZALEZ TRIVIÑO ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 021 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: true,
    fechaProceso: null,
    fechaUltimaActuacion: null,
    idConexion: 320,
    idProceso: 81620291,
    llaveProceso: "11001400302120170153200",
    sujetosProcesales: "--- [ PROCESO PRIVADO ] ---",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 021 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2018-02-13T00:00:00",
    fechaUltimaActuacion: "2023-05-24T00:00:00",
    idConexion: 259,
    idProceso: 51006610,
    llaveProceso: "11001400302120180016300",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: JOSE ANTONIO CASTILLO CORTES ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 021 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: true,
    fechaProceso: null,
    fechaUltimaActuacion: null,
    idConexion: 320,
    idProceso: 81643141,
    llaveProceso: "11001400302120180016300",
    sujetosProcesales: "--- [ PROCESO PRIVADO ] ---",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 013 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2018-02-23T00:00:00",
    fechaUltimaActuacion: "2023-05-26T00:00:00",
    idConexion: 259,
    idProceso: 51029180,
    llaveProceso: "11001400302120180023600",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: ARTURO LINCE GOMEZ ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 002 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-06-15T00:00:00",
    fechaUltimaActuacion: "2023-05-29T00:00:00",
    idConexion: 259,
    idProceso: 111939890,
    llaveProceso: "11001400302220170056700",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: RHONALD MEZA  TARAPUES ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 020 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-11-01T00:00:00",
    fechaUltimaActuacion: "2023-01-31T00:00:00",
    idConexion: 259,
    idProceso: 50817380,
    llaveProceso: "11001400302220170120800",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: CALZADO RIVOLI  S.A.S. | Demandado: MARTHA LUCIA CUARTAS  BETANCOURT ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 022 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: true,
    fechaProceso: null,
    fechaUltimaActuacion: null,
    idConexion: 320,
    idProceso: 81647611,
    llaveProceso: "11001400302220170120800",
    sujetosProcesales: "--- [ PROCESO PRIVADO ] ---",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 024 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2018-02-12T00:00:00",
    fechaUltimaActuacion: "2019-09-27T00:00:00",
    idConexion: 259,
    idProceso: 51002530,
    llaveProceso: "11001400302420180014300",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: MARTHA ANDREA MORA COLLAZOS ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 025 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-08-09T00:00:00",
    fechaUltimaActuacion: "2023-04-24T00:00:00",
    idConexion: 259,
    idProceso: 50623380,
    llaveProceso: "11001400302520170080700",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: JUAN CARLOS TOVAR TOLEDO ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 025 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: true,
    fechaProceso: null,
    fechaUltimaActuacion: null,
    idConexion: 320,
    idProceso: 81652411,
    llaveProceso: "11001400302520170080700",
    sujetosProcesales: "--- [ PROCESO PRIVADO ] ---",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 018 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-08-29T00:00:00",
    fechaUltimaActuacion: "2023-05-24T00:00:00",
    idConexion: 259,
    idProceso: 112048180,
    llaveProceso: "11001400302520170090300",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: DARNELLY HERNANDEZ MARTINEZ ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 003 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-05-31T00:00:00",
    fechaUltimaActuacion: "2023-04-13T00:00:00",
    idConexion: 259,
    idProceso: 50477000,
    llaveProceso: "11001400302620170051100",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: LUIS CARLOS GUTIERREZ VELANDIA | Demandado: JAQUELINE RODRIGUEZ COLMENARES ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 026 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-11-15T00:00:00",
    fechaUltimaActuacion: "2018-10-02T00:00:00",
    idConexion: 259,
    idProceso: 50846930,
    llaveProceso: "11001400302620170129300",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: SANDRA MILENA BARRETO BERMUDEZ ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 016 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-09-05T00:00:00",
    fechaUltimaActuacion: "2022-06-16T00:00:00",
    idConexion: 259,
    idProceso: 50685700,
    llaveProceso: "11001400302820170084900",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: JOSE LUIS TORRES TAMAYO ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 029 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-06-20T00:00:00",
    fechaUltimaActuacion: "2018-02-22T00:00:00",
    idConexion: 259,
    idProceso: 50517510,
    llaveProceso: "11001400302920170055700",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: RAFAEL ERNESTO CADENA PARGA ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 002 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-10-09T00:00:00",
    fechaUltimaActuacion: "2023-05-17T00:00:00",
    idConexion: 259,
    idProceso: 50763460,
    llaveProceso: "11001400303320170147400",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: LUIS AUGUSTO SANCHEZ ORTIZ ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 012 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-06-21T00:00:00",
    fechaUltimaActuacion: "2023-04-27T00:00:00",
    idConexion: 259,
    idProceso: 50521480,
    llaveProceso: "11001400303420170083600",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: LUIS ESNEIDER ORDUZ FARFAN ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 034 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-09-14T00:00:00",
    fechaUltimaActuacion: null,
    idConexion: 320,
    idProceso: 81728891,
    llaveProceso: "11001400303420170083600",
    sujetosProcesales:
      "Demandante/accionante: Banco Bancolombia SA | Demandado/indiciado/causante: LUIS ESNEIDER ORDUZ FARFAN | Defensor Privado: MARIA HELENA SUAREZ GARCIA | Tercero Vinculado: ACREEEDORES    (Emplazado) ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 036 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-09-06T00:00:00",
    fechaUltimaActuacion: "2018-09-29T00:00:00",
    idConexion: 259,
    idProceso: 50688820,
    llaveProceso: "11001400303620170084100",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: GABRIEL EDUARDO MEJIA LADINO | Demandado: ELDORA ANDREA TRIANA SILVA ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 015 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2018-07-13T00:00:00",
    fechaUltimaActuacion: "2023-06-01T00:00:00",
    idConexion: 259,
    idProceso: 51306830,
    llaveProceso: "11001400303620180081800",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: ADRIANA LUCIA MORA PLATA ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 014 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-06-15T00:00:00",
    fechaUltimaActuacion: "2023-05-29T00:00:00",
    idConexion: 259,
    idProceso: 50508570,
    llaveProceso: "11001400303720170083900",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: JAVIER ROMERO REYES ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 011 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-10-11T00:00:00",
    fechaUltimaActuacion: "2022-03-09T00:00:00",
    idConexion: 259,
    idProceso: 112945420,
    llaveProceso: "11001400303720170139100",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: JOSE NOEL PUERTA JARAMILLO | Demandado: LUZ DARY PUERTA JARAMILLO ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 008 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2018-02-06T00:00:00",
    fechaUltimaActuacion: "2023-02-02T00:00:00",
    idConexion: 259,
    idProceso: 50990920,
    llaveProceso: "11001400303720180011100",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: SANDRA PATRICIA BELTRAN  OVIEDO ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 010 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-06-20T00:00:00",
    fechaUltimaActuacion: "2022-11-10T00:00:00",
    idConexion: 259,
    idProceso: 50517060,
    llaveProceso: "11001400304220170076000",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: JOSE URIEL PAEREZ PERDOMO ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 042 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2020-10-16T00:00:00",
    fechaUltimaActuacion: "2023-03-13T00:00:00",
    idConexion: 256,
    idProceso: 128164881,
    llaveProceso: "11001400304220200053500",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: SANDRA LEONOR PAEZ MURCIA | Demandado: MARCO TULIO SANCHEZ MEDINA ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 018 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2018-04-12T00:00:00",
    fechaUltimaActuacion: "2023-04-27T00:00:00",
    idConexion: 259,
    idProceso: 114256610,
    llaveProceso: "11001400304320180038400",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: JHONATAN ANDRES BERNAL PARRA ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 002 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-07-26T00:00:00",
    fechaUltimaActuacion: "2022-02-25T00:00:00",
    idConexion: 259,
    idProceso: 50593640,
    llaveProceso: "11001400304520170090500",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: URIEL RUIZ DIAZ ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 045 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-08-31T00:00:00",
    fechaUltimaActuacion: "2023-03-07T00:00:00",
    idConexion: 261,
    idProceso: 110120573,
    llaveProceso: "11001400304520170106300",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: FLOR ESPERANZA GUTIERREZ ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 045 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-09-20T00:00:00",
    fechaUltimaActuacion: "2023-01-23T00:00:00",
    idConexion: 261,
    idProceso: 9877803,
    llaveProceso: "11001400304520170116400",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: NIDIA JACQUELINE RIVEROS ARAQUE ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 047 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: true,
    fechaProceso: null,
    fechaUltimaActuacion: null,
    idConexion: 320,
    idProceso: 97088411,
    llaveProceso: "11001400304720170152000",
    sujetosProcesales: "--- [ PROCESO PRIVADO ] ---",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 047 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-08-30T00:00:00",
    fechaUltimaActuacion: "2022-09-02T00:00:00",
    idConexion: 261,
    idProceso: 109959053,
    llaveProceso: "11001400304720170152000",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: MILCIADES GALINDO CASTEBLANCO | Demandado: GERMAN ALONSO SANCHEZ PICO ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 007 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-10-09T00:00:00",
    fechaUltimaActuacion: "2022-12-01T00:00:00",
    idConexion: 259,
    idProceso: 50762570,
    llaveProceso: "11001400304820170097400",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: ANDERSON REVELO SANTOS ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 014 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-11-21T00:00:00",
    fechaUltimaActuacion: "2023-01-19T00:00:00",
    idConexion: 259,
    idProceso: 106185210,
    llaveProceso: "11001400305020170133600",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: LEONARDO SANABRIA SANABRA ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 051 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-09-27T00:00:00",
    fechaUltimaActuacion: "2023-05-10T00:00:00",
    idConexion: 261,
    idProceso: 110568033,
    llaveProceso: "11001400305120170111300",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: RITA CECILIA FERNANDEZ IBAÑEZ ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 004 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2018-07-16T00:00:00",
    fechaUltimaActuacion: "2023-05-15T00:00:00",
    idConexion: 259,
    idProceso: 89137980,
    llaveProceso: "11001400305120180085000",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: SANDRA LILIANA CRUZ BELTRAN ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 017 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2018-02-06T00:00:00",
    fechaUltimaActuacion: "2023-04-13T00:00:00",
    idConexion: 259,
    idProceso: 50990370,
    llaveProceso: "11001400305220180011700",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA | Demandado: DARLEY JULIED PAEZ ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 015 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-09-04T00:00:00",
    fechaUltimaActuacion: "2023-03-27T00:00:00",
    idConexion: 259,
    idProceso: 86524020,
    llaveProceso: "11001400305520170086000",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: GERARDO ANTONIO MONCADA VEGA ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 007 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2018-03-01T00:00:00",
    fechaUltimaActuacion: "2023-05-11T00:00:00",
    idConexion: 259,
    idProceso: 51042800,
    llaveProceso: "11001400305620180022100",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: CREAS CONSULTORES S.A.S. ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 015 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-06-20T00:00:00",
    fechaUltimaActuacion: "2023-02-27T00:00:00",
    idConexion: 259,
    idProceso: 50514310,
    llaveProceso: "11001400305920170048300",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: DANIEL HERNANDEZ GONZALEZ ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 007 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2018-02-06T00:00:00",
    fechaUltimaActuacion: "2022-03-25T00:00:00",
    idConexion: 259,
    idProceso: 50989890,
    llaveProceso: "11001400305920180009000",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: MARIA MARIN DE OROZCO ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 001 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-09-22T00:00:00",
    fechaUltimaActuacion: "2023-05-10T00:00:00",
    idConexion: 259,
    idProceso: 65700110,
    llaveProceso: "11001400306320170092400",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: HERNANDO PULECIO PAREDES ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 019 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-12-13T00:00:00",
    fechaUltimaActuacion: "2023-05-29T00:00:00",
    idConexion: 259,
    idProceso: 65701460,
    llaveProceso: "11001400306320170129000",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandante: BANCOLOMBIA | Demandado: DIANA PATRICIA BARRETO OSMA ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 063 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2018-06-15T00:00:00",
    fechaUltimaActuacion: "2022-04-21T00:00:00",
    idConexion: 260,
    idProceso: 112495730,
    llaveProceso: "11001400306320180065000",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: JULIO RENE SANCHEZ ARGOTE ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 007 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-08-31T00:00:00",
    fechaUltimaActuacion: "2023-06-05T00:00:00",
    idConexion: 259,
    idProceso: 50672820,
    llaveProceso: "11001400306420170119100",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: CESAR UMAÑA CAÑON ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 016 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-11-27T00:00:00",
    fechaUltimaActuacion: "2023-03-13T00:00:00",
    idConexion: 259,
    idProceso: 112730580,
    llaveProceso: "11001400306420170162300",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: ORLANDO ENRIQUE NOVOA BARRETO ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 064 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2018-08-28T00:00:00",
    fechaUltimaActuacion: "2023-02-07T00:00:00",
    idConexion: 260,
    idProceso: 113353750,
    llaveProceso: "11001400306420180102900",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: SONIA MARCELA MOLINA QIMBAYO ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 015 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-10-10T00:00:00",
    fechaUltimaActuacion: "2022-09-27T00:00:00",
    idConexion: 259,
    idProceso: 50765770,
    llaveProceso: "11001400306820170130600",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A | Demandado: NESTOR JULIO MARTINEZ ORJUELA ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 068 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2020-10-09T00:00:00",
    fechaUltimaActuacion: "2023-05-17T00:00:00",
    idConexion: 262,
    idProceso: 112628300,
    llaveProceso: "11001400306820200102100",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A | Demandado: DIMOIN COLOMBIA SAS ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 025 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-09-01T00:00:00",
    fechaUltimaActuacion: "2023-05-17T00:00:00",
    idConexion: 259,
    idProceso: 50675410,
    llaveProceso: "11001400306920170084500",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A | Demandado: MARIA OLGA CASTAÑEDA PERUGACHI ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 014 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-06-22T00:00:00",
    fechaUltimaActuacion: "2021-12-13T00:00:00",
    idConexion: 259,
    idProceso: 50522530,
    llaveProceso: "11001400307020170056600",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: NICOLAS FERNANDO MONTOYA ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 007 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-12-13T00:00:00",
    fechaUltimaActuacion: "2022-03-10T00:00:00",
    idConexion: 259,
    idProceso: 64793050,
    llaveProceso: "11001400307120170125000",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: OSCAR HUMBERTO GOMEZ CHUCHIN ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 073 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-10-25T00:00:00",
    fechaUltimaActuacion: "2020-11-06T00:00:00",
    idConexion: 259,
    idProceso: 50801260,
    llaveProceso: "11001400307320170141100",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: FERNANDO GONZALEZ TELLEZ ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 004 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2018-11-22T00:00:00",
    fechaUltimaActuacion: "2023-05-31T00:00:00",
    idConexion: 259,
    idProceso: 51497380,
    llaveProceso: "11001400307620170063500",
    sujetosProcesales:
      "Demandante: CARLOS DANIEL CARDENAS AVILES | Demandante: BANCOLOMBIA S.A. | Demandado: FREDY MENESES ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 017 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2018-11-23T00:00:00",
    fechaUltimaActuacion: "2023-05-29T00:00:00",
    idConexion: 259,
    idProceso: 51499790,
    llaveProceso: "11001400307620170101600",
    sujetosProcesales:
      "Demandante: MAURICIO BOTERO WOLFF | Demandante: BANCOLOMBIA S.A. | Demandado: BLANCA NUBIA LOPEZ CIFUENTES | Demandado: MARIO DE JESUS OSSA PULGARIN ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 076 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: true,
    fechaProceso: null,
    fechaUltimaActuacion: null,
    idConexion: 320,
    idProceso: 81847081,
    llaveProceso: "11001400307620170101600",
    sujetosProcesales: "--- [ PROCESO PRIVADO ] ---",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 076 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2018-11-23T00:00:00",
    fechaUltimaActuacion: "2018-11-23T00:00:00",
    idConexion: 259,
    idProceso: 51500810,
    llaveProceso: "11001400307620180005200",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: DORIS GARZON TALERO | Demandado: ROBERTO RICO RUIZ ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 012 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2018-10-26T00:00:00",
    fechaUltimaActuacion: "2023-05-04T00:00:00",
    idConexion: 259,
    idProceso: 51465090,
    llaveProceso: "11001400307820170097500",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: JOGLI JOAQUIN OTERO VARGAS ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 016 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2018-10-26T00:00:00",
    fechaUltimaActuacion: "2022-03-29T00:00:00",
    idConexion: 259,
    idProceso: 51465700,
    llaveProceso: "11001400307820170116400",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: NESTOR ALBERTO CRISTANCHO LOPEZ ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 001 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2018-08-09T00:00:00",
    fechaUltimaActuacion: "2023-01-19T00:00:00",
    idConexion: 259,
    idProceso: 51357750,
    llaveProceso: "11001400307920170108200",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A | Demandado: JHON ALEXANDER VALENCIA MARQUEZ ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 040 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2018-11-02T00:00:00",
    fechaUltimaActuacion: "2023-03-08T00:00:00",
    idConexion: 256,
    idProceso: 128433271,
    llaveProceso: "11001400307920170114200",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A | Demandado: PIEDAD MARITZA OLGA ROCIO PRIETO VARGAS ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 001 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2019-05-17T00:00:00",
    fechaUltimaActuacion: "2023-03-14T00:00:00",
    idConexion: 259,
    idProceso: 51918470,
    llaveProceso: "11001400308120180051400",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: MARIA CLARA REYES REYES ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 018 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2019-01-29T00:00:00",
    fechaUltimaActuacion: "2023-05-11T00:00:00",
    idConexion: 259,
    idProceso: 51619370,
    llaveProceso: "11001400308220170068000",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: EDUARDO ENRIQUE ARANGO CHACON ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho: "JUZGADO 082 CIVIL MUNICIPAL DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2017-06-16T00:00:00",
    fechaUltimaActuacion: null,
    idConexion: 320,
    idProceso: 81869501,
    llaveProceso: "11001400308220170068000",
    sujetosProcesales:
      "Demandante/accionante: Banco Bancolombia SA | Demandado/indiciado/causante: EDUARDO ENRIQUE ARANGO CHACON    | Defensor Privado: MARIA HELENA SUAREZ GARCIA ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 014 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2019-02-15T00:00:00",
    fechaUltimaActuacion: "2022-03-24T00:00:00",
    idConexion: 259,
    idProceso: 52160520,
    llaveProceso: "11001400308220180096400",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: JOSE RAMON ESTRADA CASTILLO ",
  },
  {
    cantFilas: -1,
    departamento: "ANTIOQUIA",
    despacho: "JUZGADO 001 CIVIL MUNICIPAL DE ENVIGADO ",
    esPrivado: false,
    fechaProceso: "2022-05-11T00:00:00",
    fechaUltimaActuacion: "2022-05-25T00:00:00",
    idConexion: 197,
    idProceso: 112967583,
    llaveProceso: "11001400308220180096400",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: JOSE RAMON ESTRADA CASTILLO ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 011 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2019-05-23T00:00:00",
    fechaUltimaActuacion: "2023-05-25T00:00:00",
    idConexion: 259,
    idProceso: 51935790,
    llaveProceso: "11001400308520170084900",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: JOSE EDWIN GARCES ARDILA ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 005 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2021-03-24T00:00:00",
    fechaUltimaActuacion: "2023-02-27T00:00:00",
    idConexion: 259,
    idProceso: 87350810,
    llaveProceso: "11001418900820180078500",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: SANDRA PATRICIA PACHECO RAMIREZ ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 017 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2019-11-15T00:00:00",
    fechaUltimaActuacion: "2023-05-24T00:00:00",
    idConexion: 259,
    idProceso: 71079290,
    llaveProceso: "11001418901220180064400",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA | Demandado: BIBIANA PATRICIA ESGUERRA VASQUEZ ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 011 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2019-06-28T00:00:00",
    fechaUltimaActuacion: "2023-05-15T00:00:00",
    idConexion: 259,
    idProceso: 64673240,
    llaveProceso: "11001418901220180095100",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA SA | Demandado: ROSALIA CHARRY SARMIENTO ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 014 DE PEQUEÑAS CAUSAS  Y COMPETENCIA MÚLTIPLE DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2019-04-04T00:00:00",
    fechaUltimaActuacion: "2023-04-12T00:00:00",
    idConexion: 259,
    idProceso: 51816100,
    llaveProceso: "11001418901420190065600",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: LEIDY YANETH VIDAL RODRÍGUEZ ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 014 DE PEQUEÑAS CAUSAS  Y COMPETENCIA MÚLTIPLE DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2019-04-03T00:00:00",
    fechaUltimaActuacion: "2022-09-12T00:00:00",
    idConexion: 320,
    idProceso: 135801811,
    llaveProceso: "11001418901420190065600",
    sujetosProcesales:
      "Demandante/accionante: BANCOLOMBIA SA | Demandado/indiciado/causante: LEIDY YANETH VIDAL RODRIGUEZ (Emplazado) ",
  },
  {
    cantFilas: -1,
    departamento: "BOGOTÁ",
    despacho:
      "JUZGADO 002 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    esPrivado: false,
    fechaProceso: "2021-03-12T00:00:00",
    fechaUltimaActuacion: "2023-02-28T00:00:00",
    idConexion: 259,
    idProceso: 86958040,
    llaveProceso: "11001418901620190108500",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: ANGELICA NATHALY ROZO FRANCO ",
  },
  {
    cantFilas: -1,
    departamento: "CUNDINAMARCA",
    despacho: "JUZGADO 002 PROMISCUO MUNICIPAL DE CAJICÁ ",
    esPrivado: false,
    fechaProceso: "2018-02-02T00:00:00",
    fechaUltimaActuacion: null,
    idConexion: 320,
    idProceso: 86157021,
    llaveProceso: "25126408900220180004800",
    sujetosProcesales:
      "Demandante/accionante: BANCOLOMBIA SA | Demandado/indiciado/causante: JUAN CAMILO CHINGATE PENAGOS (Emplazado) | Defensor Privado: MARIA HELENA SUAREZ GARCIA ",
  },
  {
    cantFilas: -1,
    departamento: "CUNDINAMARCA",
    despacho: "JUZGADO 001 CIVIL MUNICIPAL DE CHOCONTÁ ",
    esPrivado: false,
    fechaProceso: "2017-05-30T00:00:00",
    fechaUltimaActuacion: null,
    idConexion: 320,
    idProceso: 86212261,
    llaveProceso: "25183400300120170010600",
    sujetosProcesales:
      "Demandante/accionante: BANCOLOMBIA SA | Demandado/indiciado/causante: ALVARO  RODRIGUEZ ALONSO | Defensor Privado: MARIA HELENA SUAREZ GARCIA ",
  },
  {
    cantFilas: -1,
    departamento: "CUNDINAMARCA",
    despacho: "JUZGADO 003 CIVIL MUNICIPAL DE GIRARDOT ",
    esPrivado: false,
    fechaProceso: "2021-10-27T00:00:00",
    fechaUltimaActuacion: "2023-03-10T00:00:00",
    idConexion: 320,
    idProceso: 121826111,
    llaveProceso: "25307400300320210053900",
    sujetosProcesales:
      "Demandante/accionante: BANCOLOMBIA SA | Demandado/indiciado/causante: adriana  vanegas peña | Defensor Privado: CARMEN CECILIA RAMIREZ MUÑOZ ",
  },
  {
    cantFilas: -1,
    departamento: "CUNDINAMARCA",
    despacho: "JUZGADO 002 CIVIL MUNICIPAL DE SOACHA ",
    esPrivado: false,
    fechaProceso: "2017-08-31T00:00:00",
    fechaUltimaActuacion: null,
    idConexion: 320,
    idProceso: 86374941,
    llaveProceso: "25754400300220170026500",
    sujetosProcesales:
      "Demandante/accionante: Banco Bancolombia SA | Demandado/indiciado/causante: JEOVANY  ROJAS CRUZ | Defensor Privado: MARIA HELENA SUAREZ GARCIA ",
  },
];
const rawReq: unknown[] = [];
const helpers: unknown[] = [];
const errors: unknown[] = [];

fs.mkdir("out/actuaciones", { recursive: true });

const fetchActuaciones = async (idProceso: number, iOfA: string) => {
  const req = await fetch(
    `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${idProceso}`
  );
<<<<<<< HEAD
  console.log("request status = " + req.status.toString() + "iOfA = " + iOfA);
  if (!req.ok) {
    const bb = req.headers;
    const request = {
      idProceso: idProceso,
      iOfA: iOfA,
      status: req.status,
      msg: req.statusText,
      bb: bb,
=======
  console.log(
    'request status = ' + JSON.stringify(req) + 'iOfA = ' + iOfA
  );

  if ( !req.ok ) {
     const text = await req.text()
    const request = {
      idProceso: idProceso,
      iOfA: iOfA,
      text: JSON.parse(text),
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    };
    errors.push(request);
    rawReq.push(request);
    fs.writeFile(
      `out/actuaciones/${iOfA}.error.actuaciones.json`,
      JSON.stringify(request)
    );
    fs.writeFile(
      `out/actuaciones/${iOfA}.errors.actuaciones.json`,
      JSON.stringify(errors)
    );
    return request;
  }
  const bb = ( await req.json() ) as intConsultaActuaciones;

  const request = {
    idProceso: idProceso,
    iOfA: iOfA,
    text: {
      StatusCode: req.status,
      Message: req.statusText
    },
    acts: bb.actuaciones,
  };
  rawReq.push(request);
  fs.writeFile(
    `out/actuaciones/${iOfA}.Request.actuaciones.json`,
    JSON.stringify(request)
  );
  fs.writeFile(
    `out/actuaciones/${iOfA}.rawRequest.actuaciones.json`,
    JSON.stringify(rawReq)
  );
  return request;
};

<<<<<<< HEAD
const forEachProceso = procesos.forEach((proceso, index, procArr) => {
  const iOfA = `${index + 1}-${procArr.length}`;
  setTimeout(async () => {
    const idProceso = proceso.idProceso;
    const helper = await fetchActuaciones(idProceso, iOfA);
    helper;
    helpers.push(helper);
    fs.writeFile(
      `out/actuaciones/${iOfA}.helper.actuaciones.json`,
      JSON.stringify(helper)
=======
const forEachProceso = procesos.forEach(
  (
    proceso, index, procArr
  ) => {
    const iOfA = `${ index + 1 }-${ procArr.length }`;
    setTimeout(
      async () => {
        const idProceso = proceso.idProceso;
        const helper = await fetchActuaciones(
          idProceso,
          iOfA
        );
        helper;
        helpers.push(
          helper
        );
        fs.writeFile(
          `out/actuaciones/${ iOfA }.helper.actuaciones.json`,
          JSON.stringify(
            helper
          )
        );
        fs.writeFile(
          `out/actuaciones/${ iOfA }.HelperS.actuaciones.json`,
          JSON.stringify(
            helpers
          )
        );
      },
      index * 500
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
    );
    fs.writeFile(
      `out/actuaciones/${iOfA}.HelperS.actuaciones.json`,
      JSON.stringify(helpers)
    );
  }, index * 1000);
});

console.log(forEachProceso);
