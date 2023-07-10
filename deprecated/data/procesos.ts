import * as fs from 'fs/promises';
process.env[ 'NODE_TLS_REJECT_UNAUTHORIZED' ] = '0';

const procesos = [
  '11001400302520170090300',
  '11001400300320170088400',
  '11001400303420170083600',
  '25245408900120170023900',
  '25754418900320170075500',
  '11001400302520170090300',
  '11001400300120170100100',
  '11001400300820170113400',
  '11001400303720170139100',
  '11001400301520170139400',
  '11001400304820170097400',
  '11001400302120170153200',
  '25754400300120170032300',
  '11001400302120180023600',
  '11001400305620180022100',
  '11001418901420190065600',
  '11001418900820180078500',
  '25175408900320180060200',
  '11001418901320190070800',
  '25377408900120180037100',
  '11001400304220200053500',
  '11001400306820200102100',
  '2575440030042018000600',
];

const rows: unknown[] = [];

const proc: unknown[] = [];

const not23: unknown[] = [];

const finally23: unknown[] = [];

const ConsultaNumeroRadicacion: unknown[] = [];

const errorConsulta: unknown[] = [];

const notFullfilledFetch: unknown[] = [];

const fulfilledFetch: unknown[] = [];

const rejectedFetch: unknown[] = [];

export async function fetchProcesoRama(
  llaveProceso: string, iOfA: string
) {
  const req = await fetch (
    `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${ llaveProceso }&SoloActivos=false`
  );
  if (!req.ok) {
    const err = req.status;

    const errorMaker = {
      ...req,
      error       : err,
      llaveProceso: llaveProceso,
      iOfA        : iOfA,
    };
    rejectedFetch.push (
      errorMaker
    );
    fs.writeFile (
      'src/json/out/rejectedFetch.procesos.json',
      JSON.stringify (
        rejectedFetch
      )
    );
    return rejectedFetch;
  }

  const res = await req.json ();
  if (req.ok) {
    if (res.procesos.length === 0) {
      notFullfilledFetch.push (
        {
          ...res,
          llaveProceso: llaveProceso,
          iOfA        : iOfA,
        }
      );
      fs.writeFile (
        'src/json/out/notFullfilledFetch.procesos.json',
        JSON.stringify (
          notFullfilledFetch
        )
      );
      return notFullfilledFetch;
    }
    proc.push (
      res.procesos
    );

    const newProcs = proc.flatMap (
      (
        m
      ) => m
    );
    fs.writeFile (
      'src/json/out/proc.procesos.json',
      JSON.stringify (
        newProcs
      )
    );
    fulfilledFetch.push (
      {
        ...res,
        llaveProceso: llaveProceso,
        iOfA        : iOfA,
      }
    );
    fs.writeFile (
      'src/json/out/fulfilledFetch.procesos.json',
      JSON.stringify (
        fulfilledFetch
      )
    );
    return fulfilledFetch;
  }
  rows.push (
    {
      ...res,
      llaveProceso: llaveProceso,
      iOfA        : iOfA,
    }
  );
  fs.writeFile (
    'src/json/out/rows.procesos.json',
    JSON.stringify (
      rows
    )
  );
  return rows;
}

export const fetchConsultaNumeroRadicacionfromRama = procesos.forEach (
  (
    llaveProceso, index, array
  ) => {
    const iOfA = `${ index + 1 }-${ array.length }`;
    if (llaveProceso.length !== 23) {
      not23.push (
        {
          llaveProceso: llaveProceso,
          iOfA        : iOfA,
        }
      );
      fs.writeFile (
        'src/json/out/not23.procesos.json',
        JSON.stringify (
          not23
        )
      );
    }
    if (llaveProceso.length === 23) {
      finally23.push (
        {
          llaveProceso: llaveProceso,
          iOfA        : iOfA,
        }
      );
      fs.writeFile (
        'src/json/out/finally23.procesos.json',
        JSON.stringify (
          finally23
        )
      );
    }
    setTimeout (
      () => {
        fetchProcesoRama (
          llaveProceso,
          iOfA
        ).then (
          (
            CNR
          ) => {
            ConsultaNumeroRadicacion.push (
              {
                ...CNR,
                llaveProceso: llaveProceso,
                iOfA        : iOfA,
              }
            );
            fs.writeFile (
              'src/json/out/ConsultaNumeroRadicacion.procesos.json',
              JSON.stringify (
                ConsultaNumeroRadicacion
              )
            );
          },
          (
            error
          ) => {
            console.log (
              JSON.stringify (
                error
              )
            );
            errorConsulta.push (
              {
                ...error,
                llaveProceso: llaveProceso,
                iOfA        : iOfA,
              }
            );
            fs.writeFile (
              'src/json/out/error.procesos.json',
              JSON.stringify (
                errorConsulta
              )
            );
          }
        );

        if (array.length === index + 1) {
          const newArr = ConsultaNumeroRadicacion.concat (
            rows,
            fulfilledFetch
          );
          fs.writeFile (
            'src/json/out/rowsFinal.procesos.json',
            JSON.stringify (
              rows
            )
          );
        }
      },
      index * 1000
    );
  }
);

console.log (
  fetchConsultaNumeroRadicacionfromRama
);
fetchConsultaNumeroRadicacionfromRama;
