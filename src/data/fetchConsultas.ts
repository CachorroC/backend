import {
    intConsultaNumeroRadicacion,
    intProceso,
} from '#@/interface/procesos.js';
import llaves from '../json/llaves.json';
import * as fs from 'fs';
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

const reqNoOk: string[] = [];
const missingProcesos: string[] = [];
const rawprocesos: intProceso[][] = [];
const fps: intProceso[][] = [];
const fpe: unknown[] = [];
async function fetchProceso(
    llaveProceso: string
) {
    const req = await fetch(
        `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${llaveProceso}&SoloActivos=false`
    );
    if (!req.ok) {
        reqNoOk.push(
            llaveProceso
        ); /*? reqNoOk*/
    }
    const res = (await req.json()) as intConsultaNumeroRadicacion;
    const procesos = res.procesos;
    if (procesos.length === 0) {
        missingProcesos.push(
            llaveProceso
        );
    }
    else {
        rawprocesos.push(
            procesos
        ); /*? procesos*/
    }
    return procesos;
}

llaves.forEach(
    (
        llave, index, array
    ) => {
        setTimeout(
            () => {
                fetchProceso(
                    llave
                ).then(
                    (
                        output
                    ) => {
                        fetchProcesoSuccess(
                            output
                        );
                    },
                    (
                        error
                    ) => {
                        fetchProcesoError(
                            error,
                            llave
                        );
                    }
                );
                if (index === array.length - 1) {
                    const Procesos = rawprocesos.flatMap(
                        (
                            proceso
                        ) => {
                            return proceso;
                        }
                    );
                    lastIteration(
                        reqNoOk /*? reqNoOk*/,
                        Procesos,
                        missingProcesos
                    );
                }
            },
            index * 1000
        );
    }
);

function fetchProcesoSuccess(
    output: intProceso[]
) {
    console.log(
        output
    );
    fps.push(
        output
    );
    fs.writeFileSync(
        'successful.fetchConsultas.json',
        JSON.stringify(
            fps
        )
    );
    return;
}
function fetchProcesoError(
    error: unknown, llave: string
) {
    console.log(
        error
    );
    fpe.push(
        error
    );
    fs.writeFileSync(
        'error.fetchConsultas.json',
        JSON.stringify(
            fpe + llave
        )
    );
    return;
}

function lastIteration(
    a: string[], b: intProceso[], c: string[]
) {
    fs.writeFileSync(
        'src/json/reqNoOk.fetchConsultas.json',
        JSON.stringify(
            a /*? a*/
        )
    );
    fs.writeFileSync(
        'src/json/rawprocesos.fetchConsultas.json',
        JSON.stringify(
            b /*? b*/
        )
    );
    fs.writeFileSync(
        'src/json/missingProcesos.fetchConsultas.json',
        JSON.stringify(
            c /*? c*/
        )
    );
}
