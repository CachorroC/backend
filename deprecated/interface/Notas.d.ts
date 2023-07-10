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

export declare class Convert {
  static toIntNota(json: string): IntNota[];
  static intNotaToJson(value: IntNota[]): string;
}
