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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Procesos = exports.fixDemandado = exports.fixFechas = exports.cleanProcesos = void 0;
const fs = __importStar(require("fs/promises"));
const rows_js_1 = __importDefault(require("../data/rows.js"));
exports.cleanProcesos = rows_js_1.default.flatMap((radicado) => {
    console.log(rows_js_1.default);
    return radicado.procesos;
});
exports.cleanProcesos;
function fixFechas(fechaUltimaActuacion) {
    if (fechaUltimaActuacion === null) {
        return 'no hay contenido';
    }
    if (fechaUltimaActuacion === undefined) {
        return 'no se ha definido el contenido';
    }
    const date = new Date(fechaUltimaActuacion);
    const months = [
        'enero',
        'febrero',
        'marzo',
        'abril',
        'mayo',
        'junio',
        'julio',
        'agosto',
        'septiembre',
        'octubre',
        'noviembre',
        'diciembre',
    ];
    const month = months[date.getMonth()];
    const dia = date.getDate();
    const ano = date.getFullYear();
    return dia + ' de ' + month + ' de ' + ano;
}
exports.fixFechas = fixFechas;
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
        return nombreOapellido.replace(/^./, (str) => {
            return str.toUpperCase();
        });
    });
    console.log(splitDemandadotoUnify);
    const unifyDemandado = splitDemandadotoUnify.join(' ');
    return unifyDemandado;
}
exports.fixDemandado = fixDemandado;
exports.Procesos = exports.cleanProcesos.map((proceso) => {
    const Proceso = {
        idProceso: proceso.idProceso,
        idConexion: proceso.idConexion,
        llaveProceso: proceso.llaveProceso,
        fechaProceso: fixFechas(proceso.fechaProceso),
        fechaUltimaActuacion: fixFechas(proceso.fechaUltimaActuacion),
        despacho: proceso.despacho.toLowerCase(),
        departamento: proceso.departamento.toLowerCase().replace(/^./, (str) => {
            return str.toUpperCase();
        }),
        sujetosProcesales: fixDemandado(proceso.sujetosProcesales),
        esPrivado: proceso.esPrivado,
        cantFilas: proceso.cantFilas,
    };
    console.log(Proceso);
    return Proceso;
});
fs.writeFile('src/middleware/Procesos.polishProcesos.json', JSON.stringify(exports.Procesos));
//# sourceMappingURL=polishProcesos.js.map