"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Convert = void 0;
// Converts JSON strings to/from your types
class Convert {
    static toIntConsultaActuaciones(json) {
        return JSON.parse(json);
    }
    static intConsultaActuacionesToJson(value) {
        return JSON.stringify(value);
    }
}
exports.Convert = Convert;
//# sourceMappingURL=procesos.js.map