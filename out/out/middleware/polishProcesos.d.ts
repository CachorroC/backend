export function fixFechas(fechaUltimaActuacion: any): string;
export function fixDemandado(sujetosProcesales: any): any;
export const Procesos: {
    idProceso: number;
    idConexion: number;
    llaveProceso: string;
    fechaProceso: string;
    fechaUltimaActuacion: string;
    despacho: string;
    departamento: string;
    sujetosProcesales: any;
    esPrivado: boolean;
    cantFilas: number;
}[];
