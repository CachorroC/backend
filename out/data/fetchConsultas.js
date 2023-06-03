"use strict";
var __createBinding =
    (this && this.__createBinding) ||
    (Object.create
        ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              var desc = Object.getOwnPropertyDescriptor(m, k);
              if (
                  !desc ||
                  ("get" in desc
                      ? !m.__esModule
                      : desc.writable || desc.configurable)
              ) {
                  desc = {
                      enumerable: true,
                      get: function () {
                          return m[k];
                      },
                  };
              }
              Object.defineProperty(o, k2, desc);
          }
        : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              o[k2] = m[k];
          });
var __setModuleDefault =
    (this && this.__setModuleDefault) ||
    (Object.create
        ? function (o, v) {
              Object.defineProperty(o, "default", {
                  enumerable: true,
                  value: v,
              });
          }
        : function (o, v) {
              o["default"] = v;
          });
var __importStar =
    (this && this.__importStar) ||
    function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (
                    k !== "default" &&
                    Object.prototype.hasOwnProperty.call(mod, k)
                )
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };
var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : adopt(result.value).then(fulfilled, rejected);
            }
            step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
            );
        });
    };
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, "__esModule", { value: true });
const llaves_json_1 = __importDefault(require("../json/llaves.json"));
const fs = __importStar(require("fs"));
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
const reqNoOk = [];
const missingProcesos = [];
const rawprocesos = [];
const fps = [];
const fpe = [];
function fetchProceso(llaveProceso) {
    return __awaiter(this, void 0, void 0, function* () {
        const req = yield fetch(
            `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${llaveProceso}&SoloActivos=false`
        );
        if (!req.ok) {
            reqNoOk.push(llaveProceso); /*? reqNoOk*/
        }
        const res = yield req.json();
        const procesos = res.procesos;
        if (procesos.length === 0) {
            missingProcesos.push(llaveProceso);
        } else {
            rawprocesos.push(procesos); /*? procesos*/
        }
        return procesos;
    });
}
llaves_json_1.default.forEach((llave, index, array) => {
    setTimeout(() => {
        fetchProceso(llave).then(
            (output) => {
                fetchProcesoSuccess(output);
            },
            (error) => {
                fetchProcesoError(error, llave);
            }
        );
        if (index === array.length - 1) {
            const Procesos = rawprocesos.flatMap((proceso) => {
                return proceso;
            });
            lastIteration(reqNoOk /*? reqNoOk*/, Procesos, missingProcesos);
        }
    }, index * 1000);
});
function fetchProcesoSuccess(output) {
    console.log(output);
    fps.push(output);
    fs.writeFileSync("successful.fetchConsultas.json", JSON.stringify(fps));
    return;
}
function fetchProcesoError(error, llave) {
    console.log(error);
    fpe.push(error);
    fs.writeFileSync("error.fetchConsultas.json", JSON.stringify(fpe + llave));
    return;
}
function lastIteration(a, b, c) {
    fs.writeFileSync(
        "src/json/reqNoOk.fetchConsultas.json",
        JSON.stringify(a /*? a*/)
    );
    fs.writeFileSync(
        "src/json/rawprocesos.fetchConsultas.json",
        JSON.stringify(b /*? b*/)
    );
    fs.writeFileSync(
        "src/json/missingProcesos.fetchConsultas.json",
        JSON.stringify(c /*? c*/)
    );
}
//# sourceMappingURL=fetchConsultas.js.map
