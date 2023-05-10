import { intConsultaNumeroRadicacion } from '../interface/procesos.js';
import * as fs from 'fs/promises';
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
import procesos from '../json/llaves.json' assert { type: 'json' };
const rows: unknown[] = [];

const not23: string[] = [];

const finally23: string[] = [];

const ConsultaNumeroRadicacion: intConsultaNumeroRadicacion[] = [];
const errorConsulta: unknown[] = [];

const fulfilledFetch: intConsultaNumeroRadicacion[] = [];

const rejectedFetch: unknown[] = [];

export async function fetchProcesoRama(
  llaveProceso: string
): Promise<intConsultaNumeroRadicacion> {
  const req = await fetch(
    `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${llaveProceso}&SoloActivos=false`
  );
  if (!req.ok) {
    const err = await req.json();
    console.log(
      JSON.stringify(
        err
      )
    );
    rejectedFetch.push(
      err
    );
    fs.writeFile(
      'src/data/rejectedFetch.procesos.json',
      JSON.stringify(
        rejectedFetch
      )
    );
    return err;
  }
  if (req.ok) {
    const res = (await req.json()) as intConsultaNumeroRadicacion;
    console.log(
      JSON.stringify(
        res
      )
    );
    fulfilledFetch.push(
      res
    );
    fs.writeFile(
      'src/data/fulfilledFetch.procesos.json',
      JSON.stringify(
        fulfilledFetch
      )
    );
    return res;
  }
  const res = (await req.json()) as intConsultaNumeroRadicacion;
  rows.push(
    res
  );
  fs.writeFile(
    'src/data/rows.procesos.json',
    JSON.stringify(
      rows
    )
  );
  return res;
}
console.log(
  procesos.llaves.length
);
export const fetchConsultaNumeroRadicacionfromRama = procesos.llaves.forEach(
  (
    llaveProceso, index, array
  ) => {
    console.log(
      array.length - index
    );
    if (llaveProceso.length !== 23) {
      console.log(
        JSON.stringify(
          not23
        ) + index
      );

      not23.push(
        llaveProceso
      );
      fs.writeFile(
        'src/data/not23.procesos.json',
        JSON.stringify(
          not23
        )
      );
    }
    if (llaveProceso.length === 23) {
      console.log(
        JSON.stringify(
          finally23
        ) + index
      );

      finally23.push(
        llaveProceso
      );
      setTimeout(
        () => {
          return fetchProcesoRama(
            llaveProceso
          ).then(
            (
              CNR
            ) => {
              console.log(
                JSON.stringify(
                  CNR
                )
              );
              ConsultaNumeroRadicacion.push(
                CNR
              );
              fs.writeFile(
                'src/data/ConsultaNumeroRadicacion.procesos.json',
                JSON.stringify(
                  ConsultaNumeroRadicacion
                )
              );
            },
            (
              error
            ) => {
              console.log(
                JSON.stringify(
                  error
                )
              );
              errorConsulta.push(
                error
              );
              fs.writeFile(
                'src/data/error.procesos.json',
                JSON.stringify(
                  errorConsulta
                )
              );
            }
          );
        },
        index * 400
      );

      if (index === array.length) {
        fs.writeFile(
          'src/data/finally23.procesos.json',
          JSON.stringify(
            finally23
          )
        );
      }
    }
  }
);

console.log(
  fetchConsultaNumeroRadicacionfromRama
);
fetchConsultaNumeroRadicacionfromRama;
