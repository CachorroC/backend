import * as fs from 'fs/promises';
process.env[ 'NODE_TLS_REJECT_UNAUTHORIZED' ] = '0';

const procesos = [
  '11001310301120170033500',
  '11001310302520170073600',
  '11001310303720170045300',
  '11001400300120170100100',
  '11001400300120170130900',
  '11001400300220170100200',
  '11001400300320170088400',
  '11001400300320170126400',
  '11001400300420170057500',
  '11001400300420170126600',
  '11001400300420180047500',
  '11001400300620170030200',
  '11001400300620170041900',
  '11001400300620170096400',
  '11001400300620180045400',
  '11001400300820170105800',
  '11001400300820170113400',
  '11001400300920170127900',
  '11001400301120170108400',
  '11001400301220170097100',
  '11001400301320170116200',
  '11001400301320170117800',
  '11001400301420180040600',
  '11001400301420180092900',
  '11001400301520170139400',
  '11001400301620170015700',
  '11001400301620170087500',
  '11001400301720170119500',
  '11001400301720170133600',
  '11001400301820170152200',
  '11001400302020100050100',
  '11001400302120170153200',
  '11001400302120180016300',
  '11001400302120180023600',
  '11001400302220170056700',
  '11001400302220170120800',
  '11001400302420170175000',
  '11001400302420180014300',
  '11001400302520170080700',
  '11001400302520170090300',
  '11001400302620170051100',
  '11001400302620170129300',
  '11001400302820170084900',
  '11001400302920170055700',
  '11001400303320170147400',
  '11001400303420170083600',
  '11001400303620170084100',
  '11001400303620180081800',
  '11001400303720170083900',
  '11001400303720170139100',
  '11001400303720180011100',
  '11001400303920170080000',
  '11001400304220170076000',
  '11001400304220200053500',
  '11001400304320180038400',
  '11001400304520170090500',
  '11001400304520170106300',
  '11001400304520170116400',
  '11001400304720170152000',
  '11001400304820170097400',
  '11001400305020170133600',
  '11001400305120170111300',
  '11001400305120180085000',
  '11001400305220180011700',
  '11001400305520170086000',
  '11001400305620180022100',
  '11001400305920170048300',
  '11001400305920180009000',
  '11001400306320170092400',
  '11001400306320170129000',
  '11001400306320180065000',
  '11001400306420170119100',
  '11001400306420170162300',
  '11001400306420180102900',
  '11001400306820170130600',
  '11001400306820200102100',
  '11001400306920170084500',
  '11001400307020170056600',
  '11001400307120170125000',
  '11001400307320170141100',
  '11001400307620170063500',
  '11001400307620170101600',
  '11001400307620180005200',
  '11001400307820170097500',
  '11001400307820170116400',
  '11001400307920170108200',
  '11001400307920170114200',
  '11001400308120180051400',
  '11001400308220170068000',
  '11001400308220180096400',
  '11001400308520170084900',
  '11001410375220170012800',
  '11001418900820180078500',
  '11001418901220180064400',
  '11001418901220180095100',
  '11001418901320190070800',
  '11001418901420190065600',
  '11001418901620190108500',
  '15842408900120170009500',
  '25035408900120170010800',
  '25126408900220180004800',
  '25148408900120170009600',
  '25175408900220170041200',
  '25175408900320170047700',
  '25175408900320180060200',
  '25183400300120170010600',
  '25245408900120170023900',
  '25307400300320210053900',
  '25320310300120170019500',
  '25377408900120180037100',
  '25754400300120170032300',
  '25754400300220170026500',
  '25754408900220180011300',
  '25754418900320170075500',
  '25754418900420180000600',
  '25843410300120180049900',
  '2589940010020200028900',
  '25899400300220170013100',
  '25899400300320180042900',
  '73449408900220170025900',
];
const rows: unknown[] = [];

const not23: unknown[] = [];

const finally23: unknown[] = [];

const ConsultaNumeroRadicacion: unknown[] = [];
const errorConsulta: unknown[] = [];
const notFullfilledFetch: unknown[] = [];

const fulfilledFetch: unknown[] = [];

const rejectedFetch: unknown[] = [];

export async function fetchProcesoRama (
  llaveProceso: string, iOfA: string
) {
  const req = await fetch(
    `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${ llaveProceso }&SoloActivos=false`
  );
  if ( !req.ok ) {
    const err = req.status;
    const errorMaker = {
      ...req,
      error: err,
      llaveProceso: llaveProceso,
      iOfA: iOfA,
    };
    rejectedFetch.push(
      errorMaker
    );
    fs.writeFile(
      'src/json/out/rejectedFetch.procesos.json',
      JSON.stringify(
        rejectedFetch
      )
    );
    return rejectedFetch;
  }
  const res = await req.json();
  if ( req.ok ) {
    if ( res.procesos.length === 0 ) {
      notFullfilledFetch.push(
        {
          ...res,
          llaveProceso: llaveProceso,
          iOfA: iOfA,
        }
      );
      fs.writeFile(
        'src/json/out/notFullfilledFetch.procesos.json',
        JSON.stringify(
          notFullfilledFetch
        )
      );
      return notFullfilledFetch;
    }
    fulfilledFetch.push(
      {
        ...res,
        llaveProceso: llaveProceso,
        iOfA: iOfA,
      }
    );
    fs.writeFile(
      'src/json/out/fulfilledFetch.procesos.json',
      JSON.stringify(
        fulfilledFetch
      )
    );
    return fulfilledFetch;
  }
  rows.push(
    {
      ...res,
      llaveProceso: llaveProceso,
      iOfA: iOfA,
    }
  );
  fs.writeFile(
    'src/json/out/rows.procesos.json',
    JSON.stringify(
      rows
    )
  );
  return rows;
}

export const fetchConsultaNumeroRadicacionfromRama = procesos.forEach(
  (
    llaveProceso, index, array
  ) => {
    const iOfA = `${ index }-${ array.length }`;
    if ( llaveProceso.length !== 23 ) {
      not23.push(
        {
          llaveProceso: llaveProceso,
          iOfA: iOfA,
        }
      );
      fs.writeFile(
        'src/json/out/not23.procesos.json',
        JSON.stringify(
          not23
        )
      );
    }
    if ( llaveProceso.length === 23 ) {
      finally23.push(
        {
          llaveProceso: llaveProceso,
          iOfA: iOfA,
        }
      );
      fs.writeFile(
        'src/json/out/finally23.procesos.json',
        JSON.stringify(
          finally23
        )
      );
    }
    setTimeout(
      () => {
        fetchProcesoRama(
          llaveProceso,
          iOfA
        ).then(
          (
            CNR
          ) => {
            ConsultaNumeroRadicacion.push(
              {
                ...CNR,
                llaveProceso: llaveProceso,
                iOfA: iOfA,
              }
            );
            fs.writeFile(
              'src/json/out/ConsultaNumeroRadicacion.procesos.json',
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
              {
                ...error,
                llaveProceso: llaveProceso,
                iOfA: iOfA,
              }
            );
            fs.writeFile(
              'src/json/out/error.procesos.json',
              JSON.stringify(
                errorConsulta
              )
            );
          }
        );

        if ( array.length - 1 === index ) {
          const newArr = ConsultaNumeroRadicacion.concat(
            rows,
            fulfilledFetch
          );
          fs.writeFile(
            'src/json/out/rowsFinal.procesos.json',
            JSON.stringify(
              newArr
            )
          );
        }
      },
      index * 1000
    );
  }
);

console.log(
  fetchConsultaNumeroRadicacionfromRama
);
fetchConsultaNumeroRadicacionfromRama;
