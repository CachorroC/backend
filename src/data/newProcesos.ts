import procesos from '../json/rawprocesos.fetchConsultas.json';
import { fixDemandado, fixFechas } from '../../out/middleware/polishProcesos.js';
import * as fs from 'fs';

const updateProcesosArray = procesos.map(
  (
    proceso
  ) => {
    const newProcesoBuilder = {
      llaveProceso: proceso.llaveProceso,
      sujetosProcesales: fixDemandado(
        proceso.sujetosProcesales
      ),
      idProceso: proceso.idProceso
    }; /*? newProcesoBuilder*/
    return newProcesoBuilder;
  }
);
console.log(
  updateProcesosArray
);

fs.writeFileSync(
  'src/json/newProcesos.json',
  JSON.stringify(
    updateProcesosArray
  )
);

