"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
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
        Object.defineProperty(o, "default", { enumerable: true, value: v });
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
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
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
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProcesosRama = exports.fetchProcesoRama = void 0;
const fs = __importStar(require("fs/promises"));
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
const llaves = [
  "11001400300320170088400",
  "11001400303420170083600",
  "25245408900120170023900",
  "25754418900320170075500",
  "11001400302520170090300",
  "11001400300120170100100",
  "11001400300820170113400",
  "11001400303720170139100",
  "11001400301520170139400",
  "11001400304820170097400",
  "11001400302120170153200",
  "25754400300120170032300",
  "11001400302120180023600",
  "11001400305620180022100",
  "11001418901420190065600",
  "11001418900820180078500",
  "25175408900320180060200",
  "11001418901320190070800",
  "25377408900120180037100",
  "11001400304220200053500",
  "11001400306820200102100",
  "11001400308520170084900",
  "11001310301120170033500",
  "11001400304320180038400",
  "11001400302620170051100",
  "25035408900120170010800",
  "25183400300120170010600",
  "11001400300620170030200",
  "11001400300620170041900",
  "11001400304220170076000",
  "11001400303920170080000",
  "11001400302220170056700",
  "11001400308220170068000",
  "11001400300420170057500",
  "11001400305920170048300",
  "11001310302520170073600",
  "11001400307020170056600",
  "11001400304720170152000",
  "11001400304520170090500",
  "11001400307620170063500",
  "11001400300320170126400",
  "11001400301120170108400",
  "11001400302520170080700",
  "25175408900220170041200",
  "11001400307920170108200",
  "11001400302420170175000",
  "73449408900220170025900",
  "11001400304520170106300",
  "11001400301220170097100",
  "25754400300220170026500",
  "11001400306420170119100",
  "11001400302120180016300",
  "11001400305520170086000",
  "11001400302820170084900",
  "11001400306920170084500",
  "11001400301620170087500",
  "11001400301320170116200",
  "25175408900320170047700",
  "11001400301320170117800",
  "11001400300820170105800",
  "11001400300920170127900",
  "11001400301720170119500",
  "11001400301820170152200",
  "11001410375220170012800",
  "11001400306320170092400",
  "11001400305120170111300",
  "15842408900120170009500",
  "11001400306820170130600",
  "25148408900120170009600",
  "11001400303320170147400",
  "11001400300120170130900",
  "11001400304820170097400",
  "11001400307620170101600",
  "11001400307820170097500",
  "11001400301720170133600",
  "11001400302220170120800",
  "11001400305020170133600",
  "11001400300420170126600",
  "25899400300220170013100",
  "11001400306420170162300",
  "11001400307820170116400",
  "11001400307120170125000",
  "25126408900220180004800",
  "11001400301420180040600",
  "11001400305920180009000",
  "11001400303720180011100",
  "11001400305220180011700",
  "25754408900220180011300",
  "11001400300420180047500",
  "25307400300320210053900",
  "11001400300620180045400",
  "11001418901620190108500",
  "11001400308120180051400",
  "2589940010020200028900",
  "11001400305120180085000",
  "11001400303620180081800",
  "11001400301420180092900",
  "11001400308220180096400",
  "11001418901220180064400",
  "11001418901220180095100",
  "11001400300220170100200",
  "11001400306320170129000",
  "25754418900420180000600",
  "25320310300120170019500",
  "11001400302920170055700",
  "11001400307920170114200",
  "11001400302020100050100",
  "11001400306420180102900",
  "11001400301620170015700",
  "11001400303720170083900",
  "11001400303620170084100",
  "11001310303720170045300",
  "11001400307620180005200",
  "25899400300320180042900",
  "11001400304520170116400",
  "11001400307320170141100",
  "11001400302620170129300",
  "25843410300120180049900",
  "11001400302420180014300",
];
const rows = [];
function fetchProcesoRama(llaveProceso) {
  return __awaiter(this, void 0, void 0, function* () {
    const res = yield fetch(
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${llaveProceso}&SoloActivos=false`
    );
    if (!res.ok) {
      throw new Error("no pudimos consultar el numero del radicado");
    }
    const dataRaw = yield res.json();
    console.log(JSON.stringify(dataRaw)); //
    rows.push(dataRaw);
    const rowsString = JSON.stringify(rows);
    fs.writeFile("src/middleware/rows.fetchProcesos.json", rowsString);
    return dataRaw;
  });
}
exports.fetchProcesoRama = fetchProcesoRama;
exports.getProcesosRama = llaves.forEach((llave, index) => {
  setTimeout(
    () =>
      fetchProcesoRama(llave).then(
        (intConsultaNumeroRadicacion) =>
          console.log(JSON.stringify(intConsultaNumeroRadicacion)),
        (error) =>
          fs.writeFile(
            "src/middleware/error.fetchProcesos.json",
            JSON.stringify(error)
          )
      ),
    index * 1000
  );
});
//# sourceMappingURL=fetchProcesos.js.map
