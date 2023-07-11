// To parse this data:
//
//   import { Convert } from "./file";
//
//   const intNota = Convert.toIntNota(json);

export interface IntNota {
  _id: string;
  nota: string;
  tareas: Tarea[];
  llaveProceso: string;
  pathname: string;
  fecha: Date | string;
}

export interface Tarea {
  tarea: string;
  isDone: boolean;
  dueDate: Date | string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toIntNota(json: string): IntNota[] {
    return JSON.parse(json);
  }

  public static intNotaToJson(value: IntNota[]): string {
    return JSON.stringify(value);
  }
}
