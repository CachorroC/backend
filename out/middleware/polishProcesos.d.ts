<<<<<<< HEAD
export declare const cleanProcesos: import("#@/interface/procesos").intProceso[];
export declare function fixFechas(
  fechaUltimaActuacion: string | null | undefined
): string;
=======
export declare const cleanProcesos: import('#@/interface/procesos.js').intProceso[];
export declare function fixFechas(fechaUltimaActuacion: string | null | undefined): string;
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
export declare function fixDemandado(sujetosProcesales: string): string;
export declare const Procesos: {
  idProceso: number;
  idConexion: number;
  llaveProceso: string;
  fechaProceso: string;
  fechaUltimaActuacion: string;
  despacho: string;
  departamento: string;
  sujetosProcesales: string;
  esPrivado: boolean;
  cantFilas: number;
}[];
