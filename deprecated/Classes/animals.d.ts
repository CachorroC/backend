export interface IntCarpetas {
  Carpeta?: number;
  Deudor: Deudor;
  Demanda: Demanda;
  idProceso?: number;
  llaveProceso: string;
  EtapaProcesal?: EtapaProcesal;
  Notificaciones?: Notificaciones;
  MedidasCautelares?: MedidasCautelares;
  Liquidacion?: Liquidacion;
  Avaluo?: Avaluo;
  Terminacion?: Terminacion;
  SuspencionProceso?: SuspencionProceso;
  Codeudor?: Codeudor;
}

export interface Avaluo {
  Remate?: Adjudicacion;
  Adjudicacion?: Adjudicacion;
  Valor?: string;
}

export interface Adjudicacion {
  Fecha: string;
}

export interface Codeudor {
  Id: number | string;
  Nombre: string;
  Direccion?: string;
  Tel?: Tel;
}

export interface Tel {
  Fijo: number;
  Celular: number;
}

export interface Demanda {
  VencimientoPagare?: string;
  CapitalAdeudado?: string;
  EntregadeGarantiasAbogado?: string;
  Departamento: Departamento;
  Municipio: string;
  Proceso: Proceso;
  Ubicacion: Ubicacion;
  Radicado: string;
  Juzgado?: Juzgado;
  Obligacion?: {
    [key: string]: number | string;
  };
}

export type Departamento = 'CUNDINAMARCA';

export interface Juzgado {
  Origen: string;
  Ejecucion?: string;
}

export interface Proceso {
  Tipo: Tipo;
}

export type Tipo = 'PRENDARIO' | 'SINGULAR' | 'HIPOTECARIO' | 'HIPOTECARO';

export interface Ubicacion {
  Juzgado: string;
}

export interface Deudor {
  Id?: number;
  Nombre: string;
  Tel?: Tel;
  Email?: string;
  Direccion?: string;
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
  Fecha: LiquidacionFecha;
  Costas?: Costas;
  ValorCredito?: string;
}

export interface Costas {
  FechaAprobacion: string;
  Valor?: number;
}

export interface LiquidacionFecha {
  Aprobacion?: string;
  Solicitud?: string;
  Presentacion?: string;
  Sentencia?: string;
}

export interface MedidasCautelares {
  MedidaSolicitada: string;
  Bienes: string;
  PlacaoNumeroMatricula?: string;
  DescripcionMedida?: string;
  Oficios?: Oficios;
  FechaRadicaccion?: string;
  RespuestaEmbargo?: boolean | string;
  Fecha?: MedidasCautelaresFecha;
  Extra?: string;
  FechaOrdena?: string;
  Oficio?: Oficio;
}

export interface MedidasCautelaresFecha {
  DecretoSecuestrooCaptura?: string;
  Captura?: number;
  Secuestro?: string;
  SolicitudCapturaoSecuestro?: string;
}

export interface Oficio {
  Numero: number | string;
  Fecha: string;
}

export interface Oficios {
  FechaRetiro: string;
}

export interface Notificaciones {
  '291': The291;
  '292'?: The291;
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
  Fecha: string;
  TerminoSuspencion: string;
}

export interface Terminacion {
  Fecha: TerminacionFecha;
  Causal: string;
}

export interface TerminacionFecha {
  RadicacionMemorial: string;
  AutoTerminacion: string;
}

export declare class Convert {
  static toIntCarpetas(json: string): IntCarpetas[];
  static intCarpetasToJson(value: IntCarpetas[]): string;
  static toIntCarpeta(json: string): IntCarpetas;
  static intCarpetaToJson(value: IntCarpetas): string;
  static toAvaluo(json: string): Avaluo;
  static avaluoToJson(value: Avaluo): string;
  static toAdjudicacion(json: string): Adjudicacion;
  static adjudicacionToJson(value: Adjudicacion): string;
  static toCodeudor(json: string): Codeudor;
  static codeudorToJson(value: Codeudor): string;
  static toTel(json: string): Tel;
  static telToJson(value: Tel): string;
  static toDemanda(json: string): Demanda;
  static demandaToJson(value: Demanda): string;
  static toJuzgado(json: string): Juzgado;
  static juzgadoToJson(value: Juzgado): string;
  static toProceso(json: string): Proceso;
  static procesoToJson(value: Proceso): string;
  static toUbicacion(json: string): Ubicacion;
  static ubicacionToJson(value: Ubicacion): string;
  static toDeudor(json: string): Deudor;
  static deudorToJson(value: Deudor): string;
  static toEtapaProcesal(json: string): EtapaProcesal;
  static etapaProcesalToJson(value: EtapaProcesal): string;
  static toEtapaProcesalFecha(json: string): EtapaProcesalFecha;
  static etapaProcesalFechaToJson(value: EtapaProcesalFecha): string;
  static toLiquidacion(json: string): Liquidacion;
  static liquidacionToJson(value: Liquidacion): string;
  static toCostas(json: string): Costas;
  static costasToJson(value: Costas): string;
  static toLiquidacionFecha(json: string): LiquidacionFecha;
  static liquidacionFechaToJson(value: LiquidacionFecha): string;
  static toMedidasCautelares(json: string): MedidasCautelares;
  static medidasCautelaresToJson(value: MedidasCautelares): string;
  static toMedidasCautelaresFecha(json: string): MedidasCautelaresFecha;
  static medidasCautelaresFechaToJson(value: MedidasCautelaresFecha): string;
  static toOficio(json: string): Oficio;
  static oficioToJson(value: Oficio): string;
  static toOficios(json: string): Oficios;
  static oficiosToJson(value: Oficios): string;
  static toNotificaciones(json: string): Notificaciones;
  static notificacionesToJson(value: Notificaciones): string;
  static toThe291(json: string): The291;
  static the291ToJson(value: The291): string;
  static toSuspencionProceso(json: string): SuspencionProceso;
  static suspencionProcesoToJson(value: SuspencionProceso): string;
  static toTerminacion(json: string): Terminacion;
  static terminacionToJson(value: Terminacion): string;
  static toTerminacionFecha(json: string): TerminacionFecha;
  static terminacionFechaToJson(value: TerminacionFecha): string;
}
