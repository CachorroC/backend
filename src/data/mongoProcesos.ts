import procesos from '../json/rawprocesos.fetchConsultas.json';
import { MongoClient } from 'mongodb';

export function fixDemandado(
  sujetosProcesales: string
): string {
  const locateDemandado = sujetosProcesales.search(
    /(demandado|causante)+:(?:\s*?|'\s*?')/gi
  );
  console.log(
    locateDemandado
  );
  if (locateDemandado === -1) {
    return 'missing demandado';
  }
  const extractDemandado = sujetosProcesales
    .slice(
      locateDemandado + 10
    )
    .toLocaleLowerCase();
  console.log(
    extractDemandado
  );
  const trimDemandado = extractDemandado.replace(
    /^\s+|\s+$/gm,
    ''
  );
  console.log(
    trimDemandado
  );
  const splitDemandado = trimDemandado.split(
    ' '
  );
  console.log(
    splitDemandado
  );
  const splitDemandadotoUnify = splitDemandado.map(
    (
      nombreOapellido, index
    ) => {
      if (index >= 5) {
        return '';
      }
      console.log(
        nombreOapellido
      );
      if (nombreOapellido === '|') {
        return '';
      }
      if (nombreOapellido.includes(
        's.a.s'
      )) {
        return '';
      }
      if (nombreOapellido.includes(
        'sas'
      )) {
        return '';
      }
      if (nombreOapellido.includes(
        '(emplazado)'
      )) {
        return '';
      }
      return nombreOapellido.replace(
        /^./,
        (
          str
        ) => str.toUpperCase()
      );
    }
  );
  console.log(
    splitDemandadotoUnify
  );
  const unifyDemandado = splitDemandadotoUnify.join(
    ' '
  );
  return unifyDemandado;
}

// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  'mongodb+srv://cachorro_cami:Tengo1amo@cluster0.ffbyjzl.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(
  uri
);

interface Proceso {
  sujetosProcesales: string;
  llaveProceso: string;
  idProceso: number;
}

async function run() {
  const updateProcesosArray = procesos.map(
    (
      proceso
    ) => {
      const newProcesoBuilder = {
        llaveProceso: proceso.llaveProceso,
        sujetosProcesales: fixDemandado(
          proceso.sujetosProcesales
        ),
        idProceso: proceso.idProceso,
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
      {
        ordered: true,
      }
    );
    console.log(
      `${result.insertedCount} documents were inserted`
    );
  }
  finally {
    await client.close();
  }
}
run().catch(
  console.dir
);
