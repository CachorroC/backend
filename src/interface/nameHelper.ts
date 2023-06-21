function trimmer(sujetosProcesales: string) {
  const locateDemandado = sujetosProcesales.search(
    /(demandado|causante)+:(?:\s*?|'\s*?')/gi
  );

  const extractDemandado = sujetosProcesales
    .slice(locateDemandado + 10)
    .toLocaleLowerCase();

  const trimDemandado = extractDemandado.replace(/^\s+|\s+$/gm, "");
  const splitDemandado = trimDemandado.split(" ");
  const splitDemandadotoUnify = splitDemandado.map(
    (nombreOapellido: string, index: number) => {
      if (index >= 5) {
        return "";
      }

      if (nombreOapellido === "|") {
        return "";
      }
      if (nombreOapellido.includes("s.a.s")) {
        return "";
      }
      if (nombreOapellido.includes("sas")) {
        return "";
      }
      if (nombreOapellido.includes("(emplazado)")) {
        return "";
      }
      return nombreOapellido.replace(/^./, (str: string) => str.toUpperCase());
    }
  );
  const unifyDemandado = splitDemandadotoUnify.join(" ");
  return unifyDemandado;
}
export const fixDemandado = (sujetosProcesales: string) => {
  const mySubString = "Demandado";

  const count = sujetosProcesales.split(mySubString).length - 1;

  if (count === 1) {
    return trimmer(sujetosProcesales);
  }
  return sujetosProcesales;
};

const procesos = [
  {
    idProceso: 112048180,
    idConexion: 259,
    llaveProceso: "11001400302520170090300",
    fechaProceso: "2017-08-29T00:00:00",
    fechaUltimaActuacion: "2023-05-24T00:00:00",
    despacho:
      "JUZGADO 018 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    departamento: "BOGOTÁ",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: DARNELLY HERNANDEZ MARTINEZ ",
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50468620,
    idConexion: 259,
    llaveProceso: "11001400300320170088400",
    fechaProceso: "2017-05-26T00:00:00",
    fechaUltimaActuacion: "2023-04-17T00:00:00",
    despacho: "JUZGADO 003 CIVIL MUNICIPAL DE BOGOTÁ ",
    departamento: "BOGOTÁ",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: YESID ALBEIRO RAMOS ",
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 113956611,
    idConexion: 320,
    llaveProceso: "11001400300320170088400",
    fechaProceso: "2017-05-24T00:00:00",
    fechaUltimaActuacion: null,
    despacho: "JUZGADO 003 CIVIL MUNICIPAL DE BOGOTÁ ",
    departamento: "BOGOTÁ",
    sujetosProcesales:
      "Demandante/accionante: BANCOLOMBIA SA | Demandado/indiciado/causante: YESID ALBEIRO RAMOS  (Emplazado) | Defensor Publico: MARIA HELENA SUAREZ GARCIA ",
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50521480,
    idConexion: 259,
    llaveProceso: "11001400303420170083600",
    fechaProceso: "2017-06-21T00:00:00",
    fechaUltimaActuacion: "2023-04-27T00:00:00",
    despacho:
      "JUZGADO 012 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    departamento: "BOGOTÁ",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: LUIS ESNEIDER ORDUZ FARFAN ",
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 81728891,
    idConexion: 320,
    llaveProceso: "11001400303420170083600",
    fechaProceso: "2017-09-14T00:00:00",
    fechaUltimaActuacion: null,
    despacho: "JUZGADO 034 CIVIL MUNICIPAL DE BOGOTÁ ",
    departamento: "BOGOTÁ",
    sujetosProcesales:
      "Demandante/accionante: Banco Bancolombia SA | Demandado/indiciado/causante: LUIS ESNEIDER ORDUZ FARFAN | Defensor Privado: MARIA HELENA SUAREZ GARCIA | Tercero Vinculado: ACREEEDORES    (Emplazado) ",
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 112048180,
    idConexion: 259,
    llaveProceso: "11001400302520170090300",
    fechaProceso: "2017-08-29T00:00:00",
    fechaUltimaActuacion: "2023-05-24T00:00:00",
    despacho:
      "JUZGADO 018 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    departamento: "BOGOTÁ",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: DARNELLY HERNANDEZ MARTINEZ ",
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50621670,
    idConexion: 259,
    llaveProceso: "11001400300120170100100",
    fechaProceso: "2017-08-09T00:00:00",
    fechaUltimaActuacion: "2023-05-17T00:00:00",
    despacho:
      "JUZGADO 017 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    departamento: "BOGOTÁ",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: WILSON ALFONSO JIMENEZ MENDIETA ",
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50716620,
    idConexion: 259,
    llaveProceso: "11001400300820170113400",
    fechaProceso: "2017-09-19T00:00:00",
    fechaUltimaActuacion: "2023-03-01T00:00:00",
    despacho:
      "JUZGADO 006 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    departamento: "BOGOTÁ",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: FANOR DIAZ AGUDELO ",
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 112945420,
    idConexion: 259,
    llaveProceso: "11001400303720170139100",
    fechaProceso: "2017-10-11T00:00:00",
    fechaUltimaActuacion: "2022-03-09T00:00:00",
    despacho:
      "JUZGADO 011 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    departamento: "BOGOTÁ",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: JOSE NOEL PUERTA JARAMILLO | Demandado: LUZ DARY PUERTA JARAMILLO ",
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50777890,
    idConexion: 259,
    llaveProceso: "11001400301520170139400",
    fechaProceso: "2017-10-13T00:00:00",
    fechaUltimaActuacion: "2021-11-08T00:00:00",
    despacho:
      "JUZGADO 011 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    departamento: "BOGOTÁ",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: ANA LUCIA AGUILAR | Demandado: CARMELINA AGUILAR | Demandado: HUMBERTO AVILA MATIAS ",
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50762570,
    idConexion: 259,
    llaveProceso: "11001400304820170097400",
    fechaProceso: "2017-10-09T00:00:00",
    fechaUltimaActuacion: "2022-12-01T00:00:00",
    despacho:
      "JUZGADO 007 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    departamento: "BOGOTÁ",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: ANDERSON REVELO SANTOS ",
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 50769660,
    idConexion: 259,
    llaveProceso: "11001400302120170153200",
    fechaProceso: "2017-10-11T00:00:00",
    fechaUltimaActuacion: "2023-05-15T00:00:00",
    despacho:
      "JUZGADO 015 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    departamento: "BOGOTÁ",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: LIBARDO ALFONSO GONZALEZ TRIVIÑO ",
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 81620291,
    idConexion: 320,
    llaveProceso: "11001400302120170153200",
    fechaProceso: null,
    fechaUltimaActuacion: null,
    despacho: "JUZGADO 021 CIVIL MUNICIPAL DE BOGOTÁ ",
    departamento: "BOGOTÁ",
    sujetosProcesales: "--- [ PROCESO PRIVADO ] ---",
    esPrivado: true,
    cantFilas: -1,
  },
  {
    idProceso: 51029180,
    idConexion: 259,
    llaveProceso: "11001400302120180023600",
    fechaProceso: "2018-02-23T00:00:00",
    fechaUltimaActuacion: "2023-06-15T00:00:00",
    despacho:
      "JUZGADO 013 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    departamento: "BOGOTÁ",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: ARTURO LINCE GOMEZ ",
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 51042800,
    idConexion: 259,
    llaveProceso: "11001400305620180022100",
    fechaProceso: "2018-03-01T00:00:00",
    fechaUltimaActuacion: "2023-06-08T00:00:00",
    despacho:
      "JUZGADO 007 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    departamento: "BOGOTÁ",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: CREAS CONSULTORES S.A.S. ",
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 51816100,
    idConexion: 259,
    llaveProceso: "11001418901420190065600",
    fechaProceso: "2019-04-04T00:00:00",
    fechaUltimaActuacion: "2023-06-14T00:00:00",
    despacho:
      "JUZGADO 014 DE PEQUEÑAS CAUSAS  Y COMPETENCIA MÚLTIPLE DE BOGOTÁ ",
    departamento: "BOGOTÁ",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: LEIDY YANETH VIDAL RODRÍGUEZ ",
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 135801811,
    idConexion: 320,
    llaveProceso: "11001418901420190065600",
    fechaProceso: "2019-04-03T00:00:00",
    fechaUltimaActuacion: "2022-09-12T00:00:00",
    despacho:
      "JUZGADO 014 DE PEQUEÑAS CAUSAS  Y COMPETENCIA MÚLTIPLE DE BOGOTÁ ",
    departamento: "BOGOTÁ",
    sujetosProcesales:
      "Demandante/accionante: BANCOLOMBIA SA | Demandado/indiciado/causante: LEIDY YANETH VIDAL RODRIGUEZ (Emplazado) ",
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 87350810,
    idConexion: 259,
    llaveProceso: "11001418900820180078500",
    fechaProceso: "2021-03-24T00:00:00",
    fechaUltimaActuacion: "2023-02-27T00:00:00",
    despacho:
      "JUZGADO 005 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
    departamento: "BOGOTÁ",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: SANDRA PATRICIA PACHECO RAMIREZ ",
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 128164881,
    idConexion: 256,
    llaveProceso: "11001400304220200053500",
    fechaProceso: "2020-10-16T00:00:00",
    fechaUltimaActuacion: "2023-03-13T00:00:00",
    despacho: "JUZGADO 042 CIVIL MUNICIPAL DE BOGOTÁ ",
    departamento: "BOGOTÁ",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A. | Demandado: SANDRA LEONOR PAEZ MURCIA | Demandado: MARCO TULIO SANCHEZ MEDINA ",
    esPrivado: false,
    cantFilas: -1,
  },
  {
    idProceso: 112628300,
    idConexion: 262,
    llaveProceso: "11001400306820200102100",
    fechaProceso: "2020-10-09T00:00:00",
    fechaUltimaActuacion: "2023-05-17T00:00:00",
    despacho: "JUZGADO 068 CIVIL MUNICIPAL DE BOGOTÁ ",
    departamento: "BOGOTÁ",
    sujetosProcesales:
      "Demandante: BANCOLOMBIA S.A | Demandado: DIMOIN COLOMBIA SAS ",
    esPrivado: false,
    cantFilas: -1,
  },
];

const names = procesos.map((proceso) =>
  fixDemandado(proceso.sujetosProcesales)
);

console.log(names);
