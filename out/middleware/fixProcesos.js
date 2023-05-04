import * as fs from "fs/promises";
import rows from "@@/rows.fetchProcesos.json" assert { type: "json" };
const missingProcesos = [];
const nonMissingProcesos = [];
export const getProcesosfromRadicados = rows.map((radicado) => {
    return radicado.procesos;
});
export const polishProcesos = getProcesosfromRadicados.map((procesos, index, array) => {
    if (array.length === 0) {
        return missingProcesos.push(index);
    }
    return procesos.forEach((proceso) => {
        nonMissingProcesos.push(proceso);
        fs.writeFile("data/cleanProcesos.ts", `const cleanProcesos = ${JSON.stringify(nonMissingProcesos)};
        export default cleanProcesos`);
    });
});
console.log(polishProcesos);
console.log(missingProcesos);
console.log(nonMissingProcesos);
console.log(getProcesosfromRadicados);
getProcesosfromRadicados;
