<<<<<<< HEAD
"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const newProcesos_json_1 = __importDefault(require("../json/newProcesos.json"));
const llaves_json_1 = __importDefault(require("../json/llaves.json"));
const filterProcesosbyKey = llaves_json_1.default.map((llave, index, array) => {
  const findKeyinProcesos = newProcesos_json_1.default.filter(
    (proceso) => proceso.llaveProceso === llave
  );
  return findKeyinProcesos; /*? findKeyinProcesos*/
});
console.log(filterProcesosbyKey);
//# sourceMappingURL=contrastKeysbyId.js.map
=======
'use strict';
var __importDefault = (this && this.__importDefault) || function (
  mod
) {
  return (mod && mod.__esModule)
    ? mod
    : { 'default': mod };
};
Object.defineProperty(
  exports,
  '__esModule',
  { value: true }
);
const newProcesos_json_1 = __importDefault(
  require(
    '../json/newProcesos.json'
  )
);
const llaves_json_1 = __importDefault(
  require(
    '../json/llaves.json'
  )
);
const filterProcesosbyKey = llaves_json_1.default.map(
  (
    llave, index, array
  ) => {
    const findKeyinProcesos = newProcesos_json_1.default.filter(
      (
        proceso
      ) => proceso.llaveProceso === llave
    );
    return findKeyinProcesos; /*? findKeyinProcesos*/
  }
);
console.log(
  filterProcesosbyKey
);
//# sourceMappingURL=contrastKeysbyId.js.map
>>>>>>> 2e92fe5 (Signed-off-by: CachorroC <juankpato87@gmail.com>)
