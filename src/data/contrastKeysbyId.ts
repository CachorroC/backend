import procesos from '../json/newProcesos.json';
import llaves from '../json/llaves.json';

const filterProcesosbyKey = llaves.map(
  (
    llave, index, array
  ) => {
    const findKeyinProcesos = procesos.filter(
      (
        proceso
      ) => proceso.llaveProceso === llave
    );
    return findKeyinProcesos; /*? findKeyinProcesos*/
  }
);

console.log(
  filterProcesosbyKey
);
