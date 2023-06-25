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
export declare enum Departamento {
    Antioquia = "ANTIOQUIA",
    Bogotá = "BOGOT\u00C1",
    Cundinamarca = "CUNDINAMARCA"
}
export declare enum TipoConsulta {
    NumeroRadicacion = "NumeroRadicacion"
}
