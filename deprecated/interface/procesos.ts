export interface intConsultaNumeroRadicacion {
  tipoConsulta: string;
  procesos: intProceso[];
  parametros: intParametros;
  paginacion: intPaginacion;
}

export interface intPaginacion {
  cantidadRegistros: number;
  registrosPagina: number;
  cantidadPaginas: number;
  pagina: number;
  paginas: null;
}

export interface intParametros {
  numero: string;
  nombre: null;
  tipoPersona: null;
  idSujeto: null;
  ponente: null;
  claseProceso: null;
  codificacionDespacho: null;
  soloActivos: boolean;
}

export interface intProceso {
  idProceso: number;
  idConexion: number;
  llaveProceso: string;
  fechaProceso?: string | null;
  fechaUltimaActuacion?: string | null;
  despacho: string;
  departamento: string;
  sujetosProcesales: string;
  esPrivado: boolean;
  cantFilas: number;
}
// To parse this data:
//
//   import { Convert } from "./file";
//
//   const intConsultaActuaciones = Convert.toIntConsultaActuaciones(json);
// To parse this data:
//
//   import { Convert } from "./file";
//
//   const intConsultaActuaciones = Convert.toIntConsultaActuaciones(json);

export interface intConsultaActuaciones {
  actuaciones: intActuacion[];
  paginacion: Paginacion;
}

export interface intActuacion {
  idRegActuacion: number;
  llaveProceso: string;
  consActuacion: number;
  fechaActuacion: Date | string;
  actuacion: string;
  anotacion: string;
  fechaInicial: Date | string | null;
  fechaFinal: Date | string | null;
  fechaRegistro: Date | string;
  codRegla: string;
  conDocumentos: boolean;
  cant: number;
}

export interface Paginacion {
  cantidadRegistros: number;
  registrosPagina: number;
  cantidadPaginas: number;
  pagina: number;
  paginas: null;
}

export interface IntActuaciones {
  idProceso: number;
  text: {
    statusCode: number;
    message: string;
  };
  acts?: intActuacion[];
}

// Converts JSON strings to/from your types
export class Convert {
  public static toIntConsultaActuaciones(
    json: string
  ): intConsultaActuaciones[] {
    return JSON.parse(json);
  }

  public static intConsultaActuacionesToJson(
    value: intConsultaActuaciones[]
  ): string {
    return JSON.stringify(value);
  }
}
