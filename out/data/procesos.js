"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchConsultaNumeroRadicacionfromRama = exports.fetchProcesoRama = void 0;
const fs = __importStar(require("fs/promises"));
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
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
const rows = [];
const proc = [];
const not23 = [];
const finally23 = [];
const ConsultaNumeroRadicacion = [];
const errorConsulta = [];
const notFullfilledFetch = [];
const fulfilledFetch = [];
const rejectedFetch = [];
function fetchProcesoRama(llaveProceso, iOfA) {
    return __awaiter(this, void 0, void 0, function* () {
        const req = yield fetch(`https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${llaveProceso}&SoloActivos=false`);
        if (!req.ok) {
            const err = req.status;
            const errorMaker = Object.assign(Object.assign({}, req), { error: err, llaveProceso: llaveProceso, iOfA: iOfA });
            rejectedFetch.push(errorMaker);
            fs.writeFile('src/json/out/rejectedFetch.procesos.json', JSON.stringify(rejectedFetch));
            return rejectedFetch;
        }
        const res = yield req.json();
        if (req.ok) {
            if (res.procesos.length === 0) {
                notFullfilledFetch.push(Object.assign(Object.assign({}, res), { llaveProceso: llaveProceso, iOfA: iOfA }));
                fs.writeFile('src/json/out/notFullfilledFetch.procesos.json', JSON.stringify(notFullfilledFetch));
                return notFullfilledFetch;
            }
            proc.push(res.procesos);
            const newProcs = proc.flatMap((m) => m);
            fs.writeFile('src/json/out/proc.procesos.json', JSON.stringify(newProcs));
            fulfilledFetch.push(Object.assign(Object.assign({}, res), { llaveProceso: llaveProceso, iOfA: iOfA }));
            fs.writeFile('src/json/out/fulfilledFetch.procesos.json', JSON.stringify(fulfilledFetch));
            return fulfilledFetch;
        }
        rows.push(Object.assign(Object.assign({}, res), { llaveProceso: llaveProceso, iOfA: iOfA }));
        fs.writeFile('src/json/out/rows.procesos.json', JSON.stringify(rows));
        return rows;
    });
}
exports.fetchProcesoRama = fetchProcesoRama;
exports.fetchConsultaNumeroRadicacionfromRama = procesos.forEach((llaveProceso, index, array) => {
    const iOfA = `${index + 1}-${array.length}`;
    if (llaveProceso.length !== 23) {
        not23.push({
            llaveProceso: llaveProceso,
            iOfA: iOfA,
        });
        fs.writeFile('src/json/out/not23.procesos.json', JSON.stringify(not23));
    }
    if (llaveProceso.length === 23) {
        finally23.push({
            llaveProceso: llaveProceso,
            iOfA: iOfA,
        });
        fs.writeFile('src/json/out/finally23.procesos.json', JSON.stringify(finally23));
    }
    setTimeout(() => {
        fetchProcesoRama(llaveProceso, iOfA).then((CNR) => {
            ConsultaNumeroRadicacion.push(Object.assign(Object.assign({}, CNR), { llaveProceso: llaveProceso, iOfA: iOfA }));
            fs.writeFile('src/json/out/ConsultaNumeroRadicacion.procesos.json', JSON.stringify(ConsultaNumeroRadicacion));
        }, (error) => {
            console.log(JSON.stringify(error));
            errorConsulta.push(Object.assign(Object.assign({}, error), { llaveProceso: llaveProceso, iOfA: iOfA }));
            fs.writeFile('src/json/out/error.procesos.json', JSON.stringify(errorConsulta));
        });
        if (array.length === index + 1) {
            const newArr = ConsultaNumeroRadicacion.concat(rows, fulfilledFetch);
            fs.writeFile('src/json/out/rowsFinal.procesos.json', JSON.stringify(rows));
        }
    }, index * 1000);
});
console.log(exports.fetchConsultaNumeroRadicacionfromRama);
exports.fetchConsultaNumeroRadicacionfromRama;
//# sourceMappingURL=procesos.js.map