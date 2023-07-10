import { monCarpetaDemandado } from '#@/interface/demandados';

export declare function getActuacionesByidProceso({
  idProceso,
}: {
  idProceso: number;
}): Promise<IntActuaciones>;

export declare function fetchFechasMap(
  procesos: monCarpetaDemandado[]
): Promise<Map<any, any> | undefined>;

export declare const Procesos: monCarpetaDemandado[];
