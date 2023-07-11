import { IntCarpetaDemandado } from "#@/interface/demandados";

export declare function fetchActuacionesByidProceso(
  idProceso: number
): Promise<any>;

export declare function carpetaBuild({
  carpeta,
  index,
}: {
  carpeta: IntCarpetaDemandado;
  index: number;
}): Promise<Map<any, any>>;
