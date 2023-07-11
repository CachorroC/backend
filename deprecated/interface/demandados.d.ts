export interface intCarpetaDemandado {
  Avaluo?: Avaluo;
  Carpeta?: number;
  Demanda: intDemanda;
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
  Id: number | string;
  Nombre: string;
  Direccion?: string;
  Tel?: Tel;
}

export interface Tel {
  Fijo: number;
  Celular: number;
}

export interface intDemanda {
  Departamento: string;
  Municipio: string;
  VencimientoPagare?: string;
  EntregadeGarantiasAbogado?: string;
  Radicado: string;
  CapitalAdeudado?: string;
  Proceso: Proceso;
  Ubicacion: Ubicacion;
  Juzgado?: Juzgado;
  Obligacion?: Obligacion;
}

export declare enum Departamento {
  Cundinamarca = "CUNDINAMARCA",
}

export interface Juzgado {
  Origen: string;
  Ejecucion?: string;
}

export interface Obligacion {
  "1": number | string;
  "2": number | string;
}

export interface Proceso {
  Tipo: "HIPOTECARIO" | "PRENDARIO" | "SINGULAR";
}

export declare enum Tipo {
  Hipotecario = "HIPOTECARIO",
  Prendario = "PRENDARIO",
  Singular = "SINGULAR",
}

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
  RespuestaEmbargo?: boolean | string;
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
  Numero: number | string;
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

export interface monCarpetaDemandado extends intCarpetaDemandado {
  _id: string;
}

export interface intFecha extends monCarpetaDemandado {
  fecha: string | Date | null | undefined;
}

export declare class ConvertCarpetas {
  static toMonCarpetaDemandado(json: string): monCarpetaDemandado[];
  static monCarpetaDemandadoToJson(value: monCarpetaDemandado[]): string;
  static toMonCarpeta(json: string): monCarpetaDemandado;
  static monCarpetaToJson(value: monCarpetaDemandado): string;
  static toAvaluo(json: string): Avaluo;
  static avaluoToJson(value: Avaluo): string;
  static toAdjudicacion(json: string): Adjudicacion;
  static adjudicacionToJson(value: Adjudicacion): string;
  static toCodeudor(json: string): Codeudor;
  static codeudorToJson(value: Codeudor): string;
  static toTel(json: string): Tel;
  static telToJson(value: Tel): string;
  static toDemanda(json: string): intDemanda;
  static demandaToJson(value: intDemanda): string;
  static toJuzgado(json: string): Juzgado;
  static juzgadoToJson(value: Juzgado): string;
  static toObligacion(json: string): Obligacion;
  static obligacionToJson(value: Obligacion): string;
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
