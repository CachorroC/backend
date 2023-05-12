

import { fixDemandado } from '../../out/middleware/polishProcesos.js';
import procesos from '../json/rawprocesos.fetchConsultas.json';
import { MongoClient } from 'mongodb';

// Replace the uri string with your MongoDB deployment's connection string.
const uri = 'mongodb+srv://cachorro_cami:Tengo1amo@cluster0.ffbyjzl.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(
  uri
);

interface Proceso {
  sujetosProcesales: string;
  llaveProceso: string;
  idProceso: number;
}

async function run () {
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
 
  try {
    const database = client.db(
      'RyS'
    );
    // Specifying a schema is optional, but it enables type hints on
    // finds and inserts
    const foods = database.collection<Proceso>(
      'Procesos'
    );

    const result = await foods.insertMany(
      updateProcesosArray,
      { ordered: true }
    );
    console.log(
      `${ result.insertedCount } documents were inserted`
    );
  }
  finally {
    await client.close();
  }
}
run().catch(
  console.dir
);
