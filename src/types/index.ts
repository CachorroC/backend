// To parse this data:
//
//   import { Convert } from "./file";
//
//   const intCarpeta = Convert.toIntCarpeta(json);

export interface IntCarpeta {
  Avaluo?: Avaluo;
  Carpeta?: number;
  Demanda: Demanda;
  Deudor: Deudor;
  EtapaProcesal?: EtapaProcesal;
  Liquidacion?: Liquidacion;
  MedidasCautelares?: MedidasCautelares;
  Notificaciones?: Notificaciones;
  SuspencionProceso?: SuspencionProceso;
  Terminacion?: Terminacion;
  idProceso: number;
  llaveProceso: string;
  Codeudor?: Codeudor;
}

export interface Avaluo {
  Adjudicacion?: Adjudicacion;
  Remate?: Adjudicacion;
  Valor?: string;
}

export interface Adjudicacion {
  Fecha: string;
}

export interface Codeudor {
  Id: number[] | number;
  Nombre: string[] | string;
  Direccion?: string;
  Tel?: Tel;
}

export interface Tel {
  Fijo: number;
  Celular: number;
}

export interface Demanda {
  Departamento: Departamento;
  Municipio: string;
  VencimientoPagare?: string;
  EntregadeGarantiasAbogado?: string;
  Radicado: string;
  CapitalAdeudado?: string;
  Proceso: Proceso;
  Ubicacion: Ubicacion;
  Juzgado?: Juzgado;
  Obligacion?: { [key: string]: number | string };
}

export type Departamento = "CUNDINAMARCA";

export interface Juzgado {
  Origen: string;
  Ejecucion?: string;
}

export interface Proceso {
  Tipo: Tipo;
}

export type Tipo = "PRENDARIO" | "SINGULAR" | "HIPOTECARIO";

export interface Ubicacion {
  Juzgado: string;
}

export interface Deudor {
  Id?: number;
  Email?: string;
  Nombre: string;
  Direccion?: string;
  Tel?: Tel;
}

export interface EtapaProcesal {
  Etapa: string;
  Fecha?: EtapaProcesalFecha;
}

export interface EtapaProcesalFecha {
  MandamientodePago?: string;
  PresentacionDemanda?: string;
}

export interface Liquidacion {
  Costas?: Costas;
  Fecha: LiquidacionFecha;
  ValorCredito?: string;
}

export interface Costas {
  FechaAprobacion: string;
  Valor?: number;
}

export interface LiquidacionFecha {
  Aprobacion?: string;
  Presentacion?: string;
  Solicitud?: string;
  Sentencia?: string;
}

export interface MedidasCautelares {
  Bienes: string;
  MedidaSolicitada: string;
  Extra?: string;
  PlacaoNumeroMatricula?: string;
  DescripcionMedida?: string;
  Fecha?: MedidasCautelaresFecha;
  FechaRadicaccion?: string;
  Oficios?: Oficios;
  RespuestaEmbargo?: boolean;
  FechaOrdena?: string;
  Oficio?: Oficio;
}

export interface MedidasCautelaresFecha {
  Captura?: number;
  Secuestro?: string;
  DecretoSecuestrooCaptura?: string;
  SolicitudCapturaoSecuestro?: string;
}

export interface Oficio {
  Numero: number;
  Fecha: string;
}

export interface Oficios {
  FechaRetiro: string;
}

export interface Notificaciones {
  "291": The291;
  "292"?: The291;
  AutoNotificado?: string;
  Certimail?: boolean;
  Fisico?: boolean;
  Tipo?: string;
}

export interface The291 {
  AportaNotificacion?: string;
  Recibo?: string;
  Resultado?: boolean;
}

export interface SuspencionProceso {
  TerminoSuspencion: string;
  Fecha: string;
}

export interface Terminacion {
  Causal: string;
  Fecha: TerminacionFecha;
}

export interface TerminacionFecha {
  AutoTerminacion: string;
  RadicacionMemorial: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toIntCarpeta(json: string): IntCarpeta[] {
    return JSON.parse(json);
  }

  public static intCarpetaToJson(value: IntCarpeta[]): string {
    return JSON.stringify(value);
  }
}
