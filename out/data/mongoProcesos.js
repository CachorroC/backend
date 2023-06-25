"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixDemandado = void 0;
const rawprocesos_fetchConsultas_json_1 = __importDefault(require("../json/rawprocesos.fetchConsultas.json"));
const mongodb_1 = require("mongodb");
function fixDemandado(sujetosProcesales) {
    const locateDemandado = sujetosProcesales.search(/(demandado|causante)+:(?:\s*?|'\s*?')/gi);
    console.log(locateDemandado);
    if (locateDemandado === -1) {
        return 'missing demandado';
    }
    const extractDemandado = sujetosProcesales
        .slice(locateDemandado + 10)
        .toLocaleLowerCase();
    console.log(extractDemandado);
    const trimDemandado = extractDemandado.replace(/^\s+|\s+$/gm, '');
    console.log(trimDemandado);
    const splitDemandado = trimDemandado.split(' ');
    console.log(splitDemandado);
    const splitDemandadotoUnify = splitDemandado.map((nombreOapellido, index) => {
        if (index >= 5) {
            return '';
        }
        console.log(nombreOapellido);
        if (nombreOapellido === '|') {
            return '';
        }
        if (nombreOapellido.includes('s.a.s')) {
            return '';
        }
        if (nombreOapellido.includes('sas')) {
            return '';
        }
        if (nombreOapellido.includes('(emplazado)')) {
            return '';
        }
        return nombreOapellido.replace(/^./, (str) => str.toUpperCase());
    });
    console.log(splitDemandadotoUnify);
    const unifyDemandado = splitDemandadotoUnify.join(' ');
    return unifyDemandado;
}
exports.fixDemandado = fixDemandado;
// Replace the uri string with your MongoDB deployment's connection string.
const uri = 'mongodb+srv://cachorro_cami:Tengo1amo@cluster0.ffbyjzl.mongodb.net/?retryWrites=true&w=majority';
const client = new mongodb_1.MongoClient(uri);
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const updateProcesosArray = rawprocesos_fetchConsultas_json_1.default.map((proceso) => {
            const newProcesoBuilder = {
                llaveProceso: proceso.llaveProceso,
                sujetosProcesales: fixDemandado(proceso.sujetosProcesales),
                idProceso: proceso.idProceso,
            }; /*? newProcesoBuilder*/
            return newProcesoBuilder;
        });
        try {
            const database = client.db('RyS');
            // Specifying a schema is optional, but it enables type hints on
            // finds and inserts
            const foods = database.collection('Procesos');
            const result = yield foods.insertMany(updateProcesosArray, {
                ordered: true,
            });
            console.log(`${result.insertedCount} documents were inserted`);
        }
        finally {
            yield client.close();
        }
    });
}
run().catch(console.dir);
//# sourceMappingURL=mongoProcesos.js.map