import { IntCarpetas } from './Classes/animals';

export declare function EditDemandado({
  demandado,
}: {
  demandado: IntCarpetas;
}): Promise<boolean | undefined>;

export declare function fetchProcesoRama({
  carpeta,
}: {
  carpeta: IntCarpetas;
}): Promise<IntCarpetas | IntCarpetas[]>;

export declare const sleep: (ms: number) => Promise<unknown>;
