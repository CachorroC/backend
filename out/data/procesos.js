var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as fs from "fs/promises";
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
import procesos from '../json/llaves.json' assert { type: 'json' };
const rows = [];
const not23 = [];
const finally23 = [];
const ConsultaNumeroRadicacion = [];
const errorConsulta = [];
const fulfilledFetch = [];
const rejectedFetch = [];
export function fetchProcesoRama(llaveProceso) {
    return __awaiter(this, void 0, void 0, function* () {
        const req = yield fetch(`https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${llaveProceso}&SoloActivos=false`);
        if (!req.ok) {
            const err = yield req.json();
            console.log(JSON.stringify(err));
            rejectedFetch.push(err);
            fs.writeFile("src/data/rejectedFetch.procesos.json", JSON.stringify(rejectedFetch));
            return err;
        }
        if (req.ok) {
            const res = (yield req.json());
            console.log(JSON.stringify(res));
            fulfilledFetch.push(res);
            fs.writeFile("src/data/fulfilledFetch.procesos.json", JSON.stringify(fulfilledFetch));
            return res;
        }
        const res = (yield req.json());
        rows.push(res);
        fs.writeFile("src/data/rows.procesos.json", JSON.stringify(rows));
        return res;
    });
}
console.log(procesos.llaves.length);
export const fetchConsultaNumeroRadicacionfromRama = procesos.llaves.forEach((llaveProceso, index, array) => {
    console.log(array.length - index);
    if (llaveProceso.length !== 23) {
        console.log(JSON.stringify(not23) + index);
        not23.push(llaveProceso);
        fs.writeFile("src/data/not23.procesos.json", JSON.stringify(not23));
    }
    if (llaveProceso.length === 23) {
        console.log(JSON.stringify(finally23) + index);
        finally23.push(llaveProceso);
        setTimeout(() => {
            return fetchProcesoRama(llaveProceso).then((CNR) => {
                console.log(JSON.stringify(CNR));
                ConsultaNumeroRadicacion.push(CNR);
                fs.writeFile("src/data/ConsultaNumeroRadicacion.procesos.json", JSON.stringify(ConsultaNumeroRadicacion));
            }, (error) => {
                console.log(JSON.stringify(error));
                errorConsulta.push(error);
                fs.writeFile("src/data/error.procesos.json", JSON.stringify(errorConsulta));
            });
        }, index * 400);
        if (index === array.length) {
            fs.writeFile("src/data/finally23.procesos.json", JSON.stringify(finally23));
        }
    }
});
console.log(fetchConsultaNumeroRadicacionfromRama);
fetchConsultaNumeroRadicacionfromRama;
//# sourceMappingURL=procesos.js.map