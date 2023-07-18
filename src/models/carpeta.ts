//^ External dependencies
import { ObjectId } from 'mongodb';

//^ Class Implementation
export class Carpeta {
  public cedula: number;
  public idProceso: number[];
  public llaveProceso: string;
  public primerNombre: string;
  public primerApellido: string;
  public segundoNombre?: string;
  public segundoApellido?: string;
  public email?: string;
  public tel?: {
    fijo?: number;
    celular?: number;
  };
  public direccion?: string;
  public _id?: ObjectId;
  constructor(
    {
      cedula,
      idProceso,
      llaveProceso,
      primerNombre,
      primerApellido,
      segundoNombre,
      segundoApellido,
      email,
      tel,
      direccion,
      _id,
    }: {
    cedula: number;
    idProceso: number[];
    llaveProceso: string;
    primerNombre: string;
    primerApellido: string;
    segundoNombre?: string;
    segundoApellido?: string;
    email?: string;
    tel?: {
      fijo?: number;
      celular?: number;
    };
    direccion?: string;
    _id?: ObjectId;
  }
  ) {
    this.cedula = cedula;
    this.idProceso = idProceso;
    this.llaveProceso = llaveProceso;
    this.primerNombre = primerNombre;
    this.primerApellido = primerApellido;
    this.segundoNombre = segundoNombre;
    this.segundoApellido = segundoApellido;
    this.email = email;
    this.tel = tel;
    this.direccion = direccion;
    this._id = _id;
  }
}
