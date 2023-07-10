import clientPromise from './lib/mongodb';
import { intConsultaNumeroRadicacion } from './interface/procesos';
import * as fs from 'fs/promises';
import { IntCarpetas } from './Classes/animals';

const Carpetas: IntCarpetas[] = [
  {
    Carpeta: 14,
    Deudor : {
      Id    : 1077969975,
      Nombre: 'yesid albeiro ramos',
      Tel   : {
        Fijo   : 3193905254,
        Celular: 3212337597,
      },
      Email    : 'yess_Id@hotmail.com',
      Direccion: 'CARRERA 77B No. 68B - 19 BARRIO SANTA HELENITA',
    },

    Demanda: {
      VencimientoPagare: '2020-05-04',

      CapitalAdeudado          : '$ 33.791.309',
      EntregadeGarantiasAbogado: '2017-05-11',
      Departamento             : 'CUNDINAMARCA',
      Municipio                : 'BOGOTA',

      Proceso: {
        Tipo: 'PRENDARIO',
      },
      Ubicacion: {
        Juzgado: 'HMM PISO 5',
      },
      Radicado: '2017 - 00884',
    },
    idProceso    : 50468620,
    llaveProceso : '11001400300320170088400',
    EtapaProcesal: {
      Etapa: 'EMPLAZAMIENTO',
      Fecha: {
        MandamientodePago: '2017-06-02',
      },
    },
    Notificaciones: {
      '291': {
        AportaNotificacion: '2018-07-11',
      },
      '292': {
        AportaNotificacion: '2018-07-11',
      },

      AutoNotificado: '11/07/2018',
    },
    MedidasCautelares: {
      MedidaSolicitada: 'VEHICULO',

      Bienes               : 'VEHICULO',
      PlacaoNumeroMatricula: 'IYM-870',
      DescripcionMedida:
        'AUTOMOVIL MODELO 2017 MARCA CHEVROLET COLOR ROJO VELVET SERVICIOPARTICULAR  MINI SPARK',
      Oficios: {
        FechaRetiro: '2017-09-28',
      },
      FechaRadicaccion: '2018-05-31',
      RespuestaEmbargo: true,
      Fecha           : {
        DecretoSecuestrooCaptura: '2010-03-20',
        Captura                 : 43315,
        Secuestro               : 'PENDIENTE',
      },
      Extra: 'LA PRINCIPAL SAS',
    },
    Liquidacion: {
      Fecha: {
        Aprobacion: '1999-01-01',
      },

      Costas: {
        FechaAprobacion: '1999-01-01',
      },
    },
    Avaluo: {
      Remate: {
        Fecha: '1999-01-01',
      },
      Adjudicacion: {
        Fecha: '1999-01-01',
      },
    },
    Terminacion: {
      Fecha: {
        RadicacionMemorial: '1999-01-01',
        AutoTerminacion   : '1999-01-01',
      },
      Causal: 'N/A',
    },
    SuspencionProceso: {
      Fecha            : '1999-01-01',
      TerminoSuspencion: 'N/A',
    },
  },
  {
    Carpeta: 86,
    Deudor : {
      Id    : 1032432802,
      Nombre: 'luis esneider orduz farfan',

      Email    : 'orduzcrit2@hotmail.com',
      Direccion: 'CARRERA 95 # 138 - 58',
    },
    Codeudor: {
      Id    : 1015435620,
      Nombre: 'JESICA PAOLA GUZMAN OSPINA',
    },
    Demanda: {
      VencimientoPagare: '2020-06-09',

      CapitalAdeudado          : '$ 26.515.333',
      EntregadeGarantiasAbogado: '1899-12-30',
      Departamento             : 'CUNDINAMARCA',
      Municipio                : 'BOGOTA',
      Juzgado                  : {
        Origen   : '34 CM',
        Ejecucion: '12 CME',
      },
      Proceso: {
        Tipo: 'PRENDARIO',
      },
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION',
      },
      Radicado: '2017 - 00836',
    },
    idProceso    : 50521480,
    llaveProceso : '11001400303420170083600',
    EtapaProcesal: {
      Etapa: 'EJECUCION',
      Fecha: {
        PresentacionDemanda: '2017-06-20',
        MandamientodePago  : '2017-07-10',
      },
    },
    Notificaciones: {
      '291': {
        Recibo            : '2018-12-02',
        Resultado         : true,
        AportaNotificacion: '2018-07-18',
      },
      '292': {
        AportaNotificacion: '2018-07-18',
        Resultado         : true,
      },
      Certimail     : false,
      Fisico        : true,
      Tipo          : 'EMPLAZAMIENTO',
      AutoNotificado: '2019-01-25',
    },
    MedidasCautelares: {
      FechaOrdena     : '2017-07-10',
      MedidaSolicitada: 'VEHICULO',
      Oficio          : {
        Numero: 1355,
        Fecha : '2017-07-17',
      },
      Bienes               : 'VEHICULO',
      PlacaoNumeroMatricula: 'UBK-333',
      DescripcionMedida    : 'VEHICULO',
      Oficios              : {
        FechaRetiro: '2017-08-24',
      },
      FechaRadicaccion: '2018-08-24',
      RespuestaEmbargo: true,
      Fecha           : {
        SolicitudCapturaoSecuestro: '2019-04-11',
      },
    },
  },
  {
    Carpeta: 98,
    Deudor : {
      Id    : 1070329396,
      Nombre: 'erika alejandra quintero reyes',

      Direccion: 'CALL 2 # 8-40 EL COLEGIO',
    },

    Demanda: {
      VencimientoPagare: '2019-07-05',

      CapitalAdeudado          : '$ 50.000.000',
      EntregadeGarantiasAbogado: '2017-06-12',
      Departamento             : 'CUNDINAMARCA',
      Municipio                : 'MESITAS',

      Proceso: {
        Tipo: 'SINGULAR',
      },
      Ubicacion: {
        Juzgado: 'EL COLEGIO',
      },
      Radicado: '2017-00239',
    },

    llaveProceso : '25245408900120170023900',
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        PresentacionDemanda: '2017-08-29',
        MandamientodePago  : '2017-11-07',
      },
    },
    Notificaciones: {
      '291': {
        AportaNotificacion: '2018-05-17',
      },
      '292': {
        AportaNotificacion: '2018-05-17',
        Resultado         : true,
      },

      Tipo          : 'CORREO',
      AutoNotificado: '2018-07-17',
    },
    MedidasCautelares: {
      FechaOrdena     : '2017-11-07',
      MedidaSolicitada: 'EMBARGO DE DINEROS EN BANCOS',
      Oficio          : {
        Numero: 1461,
        Fecha : '2017-11-15',
      },
      Bienes: 'BANCOS',

      DescripcionMedida: 'RETENCION DINEROS',

      FechaRadicaccion: '2023-02-02',
      RespuestaEmbargo: true,
    },
    Liquidacion: {
      Fecha: {
        Solicitud   : '2018-09-04',
        Presentacion: '2018-11-26',
      },
    },
    Avaluo: {
      Valor:
        'SE ENVIA SOLICITUD OFICIO PARA ENVIAR POR EL JUZGADO A SALUD TOTAL EPS // PROCESO IRRECUPERABLE',
    },
  },
  {
    Carpeta: 116,
    Deudor : {
      Id    : 900212673,
      Nombre: 'jencell e.u.',

      Direccion: 'CARRERA 3 # 29A - 02',
    },
    Codeudor: {
      Id    : 52771090,
      Nombre: 'YENY ESPERANZA ARIAS MENDIETA',

      Direccion: 'CARRERA 3 # 29A - 02 LOCAL 1057',
    },
    Demanda: {
      VencimientoPagare: '2021-04-12',

      CapitalAdeudado          : '$ 13.906.249',
      EntregadeGarantiasAbogado: '2017-08-04',
      Departamento             : 'CUNDINAMARCA',
      Municipio                : 'SOACHA',

      Proceso: {
        Tipo: 'SINGULAR',
      },
      Ubicacion: {
        Juzgado: 'SOACHA',
      },
      Radicado: '2017 - 00755',
    },

    llaveProceso : '25754418900320170075500',
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        PresentacionDemanda: '2017-08-11',
        MandamientodePago  : '2017-09-08',
      },
    },
    Notificaciones: {
      '291': {
        Recibo            : '2017-12-12',
        Resultado         : true,
        AportaNotificacion: '2017-12-12',
      },
      '292': {
        AportaNotificacion: '2017-12-12',
        Resultado         : true,
      },
      Certimail     : true,
      Fisico        : false,
      Tipo          : 'CERTIMAIL',
      AutoNotificado: '2018-02-09',
    },
    MedidasCautelares: {
      FechaOrdena     : '2017-09-08',
      MedidaSolicitada: 'EMBARGO INMUEBLE DE LA CODEUDORA',
      Oficio          : {
        Numero: 1181,
        Fecha : '2017-09-15',
      },
      Bienes               : 'BANCOS',
      PlacaoNumeroMatricula: '051-130616',
      DescripcionMedida:
        'SOLICITA EMBARGO DE INMUEBLE PROPIEDAD DE REPRESENTANTE LEGAL Y CODEUDORA',
      Oficios: {
        FechaRetiro: '2018-09-15',
      },
      FechaRadicaccion: '06/2018',
    },
    Liquidacion: {
      Fecha: {
        Sentencia: '2018-02-09',

        Presentacion: '2018-06-20',
        Aprobacion  : '2018-08-01',
      },
      ValorCredito: '5003149,67',
    },
  },
  {
    Carpeta: 170,
    Deudor : {
      Id    : 52189873,
      Nombre: 'darnelly hernandez martinez',
      Tel   : {
        Fijo   : 4530972,
        Celular: 3144189224,
      },
      Email    : 'darnelly-74@hotmail.com',
      Direccion: 'CALLE 74G # 80 - 58 SUR',
    },

    Demanda: {
      VencimientoPagare: '2026-03-10',

      CapitalAdeudado          : '$ 14.795.921',
      EntregadeGarantiasAbogado: '2017-08-22',
      Departamento             : 'CUNDINAMARCA',
      Municipio                : 'BOGOTA',
      Juzgado                  : {
        Origen   : '25 CM',
        Ejecucion: '18 CME',
      },
      Proceso: {
        Tipo: 'HIPOTECARIO',
      },
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION',
      },
      Radicado: '2017 - 00903',
    },
    idProceso    : 112048180,
    llaveProceso : '11001400302520170090300',
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        PresentacionDemanda: '2017-08-28',
        MandamientodePago  : '2017-09-18',
      },
    },
    Notificaciones: {
      '291': {
        Recibo            : '2018-06-20',
        Resultado         : true,
        AportaNotificacion: '2018-06-20',
      },
      '292': {
        AportaNotificacion: '2018-06-20',
        Resultado         : true,
      },
      Certimail     : true,
      Fisico        : false,
      Tipo          : 'CERTIMAIL',
      AutoNotificado: '2018-06-22',
    },
    MedidasCautelares: {
      FechaOrdena     : '2017-09-18',
      MedidaSolicitada: 'EMBARGO DE INMUEBLE',
      Oficio          : {
        Numero: 3781,
        Fecha : '2017-09-25',
      },
      Bienes               : 'INMUEBLE APTO 504',
      PlacaoNumeroMatricula: '50S-40552545',
      DescripcionMedida    : 'INMUEBLE  CARRERA 88 C N° 62-65 SUR',

      FechaRadicaccion: '2018-01-28',
      RespuestaEmbargo: true,
      Fecha           : {
        SolicitudCapturaoSecuestro: '2018-03-22',
      },
    },
    Liquidacion: {
      Fecha: {
        Sentencia: '2018-06-22',

        Presentacion: '2019-01-11',
      },
    },
  },
  {
    Carpeta: 178,
    Deudor : {
      Id    : 11185630,
      Nombre: 'wilson alfonso jimenez mendieta',

      Email    : 'grupocomerciallasabana@hotmail.com',
      Direccion: 'CARRERA 81C # 2B - 80 PISO 2',
    },

    Demanda: {
      VencimientoPagare: '2019-11-03',

      CapitalAdeudado          : '$ 25.833.335',
      EntregadeGarantiasAbogado: '2017-08-01',
      Departamento             : 'CUNDINAMARCA',
      Municipio                : 'BOGOTA',
      Juzgado                  : {
        Origen   : '1 CM',
        Ejecucion: '17 CME',
      },
      Proceso: {
        Tipo: 'SINGULAR',
      },
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION',
      },
      Radicado: '2017 - 01001',
    },
    idProceso    : 50621670,
    llaveProceso : '11001400300120170100100',
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        PresentacionDemanda: '2017-08-08',
        MandamientodePago  : '2017-09-05',
      },
    },
    Notificaciones: {
      '291': {
        Recibo            : '2018-02-06',
        Resultado         : true,
        AportaNotificacion: '2018-06-06',
      },
      '292': {
        AportaNotificacion: '2018-06-06',
        Resultado         : true,
      },
      Certimail     : true,
      Fisico        : false,
      Tipo          : 'CORREO',
      AutoNotificado: '2018-06-22',
    },
    MedidasCautelares: {
      FechaOrdena     : '2017-09-05',
      MedidaSolicitada: 'EMBARGO DE DINEROS EN BANCOS',
      Oficio          : {
        Numero: '17-2849',
        Fecha : '2017-09-06',
      },
      Bienes               : 'BANCOS',
      PlacaoNumeroMatricula: 'SLJ234',
      DescripcionMedida:
        'PEDIR EMBARGO Y SECUESTRO VEHICULO PROPIEDAD DEL DEUDOR',

      RespuestaEmbargo: false,
    },
    Liquidacion: {
      Fecha: {
        Solicitud   : '2018-06-22',
        Presentacion: '2018-06-29',
        Aprobacion  : '2018-07-13',
      },
    },
    Avaluo: {
      Valor:
        'SOLICITAR JUZGADO REQUERIR A SECRETARIA DE MOVILIDAD DE COTA LAS RAZONES POR LAS CUALES NO SE HA REGISTRADO MEDIDA CAUTELAR VEHICULO SLJ234 // RECONOCE PERSONERIA 31/01/22 // REVISAR URGENTE NUEVO APODERADO CISA // BANCOLOMBIA NO HA CEDIDO A REINTEGRA CREDITO // SEPT 9 RECONOCE PODER A CISA',
    },
  },
  {
    Carpeta: 231,
    Deudor : {
      Id    : 79853115,
      Nombre: 'fanor diaz agudelo',
      Tel   : {
        Fijo   : 8060271,
        Celular: 3212406193,
      },
      Email    : 'fanor.diaz@gmail.com',
      Direccion: 'DIAGONAL 56 BIS 84 A 10 SUR TR 1',
    },

    Demanda: {
      VencimientoPagare: '2017-02-14',

      CapitalAdeudado          : '$ 27.603.821',
      EntregadeGarantiasAbogado: '2017-09-06',
      Departamento             : 'CUNDINAMARCA',
      Municipio                : 'BOGOTA',
      Juzgado                  : {
        Origen   : '8 CM',
        Ejecucion: '6 CME',
      },
      Proceso: {
        Tipo: 'HIPOTECARIO',
      },
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION',
      },
      Radicado: '2017 - 01134',
    },
    idProceso    : 50716620,
    llaveProceso : '11001400300820170113400',
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        PresentacionDemanda: '2017-09-18',
        MandamientodePago  : '2017-09-21',
      },
    },
    Notificaciones: {
      '291': {
        Recibo            : '2018-02-06',
        Resultado         : true,
        AportaNotificacion: '2018-02-06',
      },
      '292': {
        AportaNotificacion: '2018-02-06',
        Resultado         : true,
      },
      Certimail     : true,
      Fisico        : false,
      Tipo          : 'CERTIMAIL',
      AutoNotificado: '2018-05-07',
    },
    MedidasCautelares: {
      FechaOrdena     : '2017-09-21',
      MedidaSolicitada: 'EMBARGO DE INMUEBLE',
      Oficio          : {
        Numero: 2746,
        Fecha : '2017-10-04',
      },
      Bienes               : 'INMUEBLE',
      PlacaoNumeroMatricula: '50S-40590187',
      DescripcionMedida:
        'APARTAMENTO 502 INT. 17 CONJUNTO RESIDNCIAL ALONDRA  P.H.  DIAGONAL 56 BIS SUR N° 84 A -20',
      Oficios: {
        FechaRetiro: '2017-10-04',
      },
      FechaRadicaccion: '2018-05-15',
      RespuestaEmbargo: true,
    },
    Liquidacion: {
      Fecha: {
        Sentencia   : '2018-07-16',
        Solicitud   : '2018-07-24',
        Presentacion: '2019-01-11',
      },
    },
  },
  {
    Carpeta: 274,
    Deudor : {
      Id    : 35506033,
      Nombre: 'luz dary puerta jaramillo',
      Tel   : {
        Fijo   : 4357832,
        Celular: 3103430010,
      },
      Email    : 'natis-rolita@hotmail.con',
      Direccion: 'CARRERA  101  No 71 B - 53',
    },
    Codeudor: {
      Id    : 4337296,
      Nombre: 'JOSE NOEL PUERTA PUERTA',

      Direccion: 'CARRERA  115 No 89 A - 31 INT 12 APART 202',
    },
    Demanda: {
      VencimientoPagare: '2019-03-18',

      CapitalAdeudado          : '$ 12.347.548',
      EntregadeGarantiasAbogado: '2017-09-28',
      Departamento             : 'CUNDINAMARCA',
      Municipio                : 'BOGOTA',
      Juzgado                  : {
        Origen   : '37 CM',
        Ejecucion: '11 CME',
      },
      Proceso: {
        Tipo: 'SINGULAR',
      },
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION',
      },
      Radicado: '2017 - 01391',
    },
    idProceso    : 112945420,
    llaveProceso : '11001400303720170139100',
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        PresentacionDemanda: '2017-10-10',
        MandamientodePago  : '2018-01-16',
      },
    },
    Notificaciones: {
      '291': {
        Recibo            : '2018-04-30',
        Resultado         : true,
        AportaNotificacion: '2018-09-14',
      },
      '292': {
        Recibo            : '2018-05-15',
        AportaNotificacion: '2018-06-08',
        Resultado         : true,
      },
      Certimail     : false,
      Fisico        : true,
      Tipo          : 'CORREO',
      AutoNotificado: '2018-09-03',
    },
  },
  {
    Carpeta: 278,
    Deudor : {
      Id    : 19255260,
      Nombre: 'matias humberto avila aguilar',
      Tel   : {
        Fijo   : 4170527,
        Celular: 3125024008,
      },
      Email    : 'maifren_13@yahoo.es',
      Direccion: 'CALLE 2 C No 62 - 20',
    },
    Codeudor: {
      Id    : '41759787 // 39710157',
      Nombre: 'CARMELINA AGUILAR  //  ANA LUCIA AGUILAR',
      Tel   : {
        Celular: 3204613419,
        Fijo   : 3107627120,
      },
      Direccion: 'DG 3B No. 0-78 ESTE',
    },
    Demanda: {
      VencimientoPagare: '2024-05-05',

      CapitalAdeudado          : '$ 66.362.959',
      EntregadeGarantiasAbogado: '2017-09-21',
      Departamento             : 'CUNDINAMARCA',
      Municipio                : 'BOGOTA',
      Juzgado                  : {
        Origen   : '15 CM',
        Ejecucion: '11 CME',
      },
      Proceso: {
        Tipo: 'HIPOTECARIO',
      },
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION',
      },
      Radicado: '2017 - 01394',
    },

    llaveProceso : '11001400301520170139400',
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        PresentacionDemanda: '2017-10-10',
        MandamientodePago  : '2018-02-09',
      },
    },
    Notificaciones: {
      '291': {
        Recibo            : '2018-02-14',
        Resultado         : true,
        AportaNotificacion: '2018-06-08',
      },
      '292': {
        Recibo            : '2018-02-23',
        AportaNotificacion: '2018-06-08',
        Resultado         : true,
      },
      Certimail     : false,
      Fisico        : true,
      Tipo          : 'CORREO/ PERSONAL',
      AutoNotificado: '2018-02-23',
    },
    MedidasCautelares: {
      FechaOrdena     : '2017-11-08',
      MedidaSolicitada: 'EMBARGO DE INMUEBLE',
      Oficio          : {
        Numero: 284,
        Fecha : '2018-02-16',
      },
      Bienes               : 'CASA',
      PlacaoNumeroMatricula: '50C-643759',

      Oficios: {
        FechaRetiro: '2018-02-16',
      },
      FechaRadicaccion: '2018-03-12',
      RespuestaEmbargo: false,
    },
  },
  {
    Carpeta: 289,
    Deudor : {
      Id    : 1032383389,
      Nombre: 'anderson revelo santos',
      Tel   : {
        Fijo   : 4725511,
        Celular: 3118526428,
      },
      Email    : 'ars.09@hotmail.com',
      Direccion: 'CALLE 64 SUR  No 85 B - 40  APARTAMENTO  104',
    },

    Demanda: {
      VencimientoPagare: '2020-03-05',
      Obligacion       : {
        '1': '320088443  / 377813441863587',
        '2': 4513070212799642,
      },
      CapitalAdeudado          : '$ 12.249.598',
      EntregadeGarantiasAbogado: '2017-09-19',
      Departamento             : 'CUNDINAMARCA',
      Municipio                : 'BOGOTA',
      Juzgado                  : {
        Origen   : '48 CM',
        Ejecucion: '7 CME',
      },
      Proceso: {
        Tipo: 'SINGULAR',
      },
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION',
      },
      Radicado: '2017 - 00974',
    },

    llaveProceso : '11001400304820170097400',
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        PresentacionDemanda: '2017-10-06',
        MandamientodePago  : '2017-11-03',
      },
    },
    Notificaciones: {
      '291': {
        Recibo            : '2018-01-30',
        Resultado         : true,
        AportaNotificacion: '2018-01-30',
      },
      '292': {
        AportaNotificacion: '2018-01-30',
        Resultado         : true,
      },
      Certimail     : true,
      Fisico        : false,
      Tipo          : 'CERTIMAIL',
      AutoNotificado: '2018-02-23',
    },
    MedidasCautelares: {
      FechaOrdena     : '2017-11-03',
      MedidaSolicitada: 'EMBARGO DE INMUEBLE',
      Oficio          : {
        Numero: 799,
        Fecha : '2017-12-01',
      },
      Bienes               : 'APTO 104 TORRE 4',
      PlacaoNumeroMatricula: '50S-40606676',
      DescripcionMedida    : 'EMBARGO DE SALARIOS',

      FechaRadicaccion: '2018-01-31',
      RespuestaEmbargo: false,
    },
    Liquidacion: {
      Fecha: {
        Solicitud   : '2018-02-23',
        Presentacion: '2018-06-05',
        Aprobacion  : '2018-06-15',
      },
    },
    Avaluo: {
      Valor:
        'RETIRAR DEL JUZGADO RESPUESTA DE ETB Y ALIANSALUD EPS SE RADICA OFICIO ACLARANDO CESIÓN DEL CRÉDITO',
    },
  },
  {
    Carpeta: 306,
    Deudor : {
      Id    : 79388145,
      Nombre: 'libardo alfonso gonzalez triviño',

      Email    : 'li_bcar@hotmail.com',
      Direccion: 'CARRERA 72 A- No 9 - 44',
    },

    Demanda: {
      VencimientoPagare: '2020-03-23',
      Obligacion       : {
        '1': '1740086734 4513073749673967',
        '2': 5303719549810730,
      },
      CapitalAdeudado          : '$ 40.406.421',
      EntregadeGarantiasAbogado: '2017-10-04',
      Departamento             : 'CUNDINAMARCA',
      Municipio                : 'BOGOTA',
      Juzgado                  : {
        Origen   : '21 CM',
        Ejecucion: '15 CME',
      },
      Proceso: {
        Tipo: 'SINGULAR',
      },
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION',
      },
      Radicado: '2017 - 01532',
    },

    llaveProceso : '11001400302120170153200',
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        PresentacionDemanda: '2017-10-10',
        MandamientodePago  : '2017-11-30',
      },
    },
    Notificaciones: {
      '291': {
        Recibo            : '2018-04-25',
        Resultado         : true,
        AportaNotificacion: '2018-07-06',
      },
      '292': {
        Recibo            : '2019-05-27',
        AportaNotificacion: '2019-05-27',
        Resultado         : true,
      },
      Certimail     : false,
      Fisico        : true,
      Tipo          : 'CORREO',
      AutoNotificado: '2019-06-17',
    },
    MedidasCautelares: {
      FechaOrdena     : '2017-11-30',
      MedidaSolicitada: 'EMBARGO DE VEHICULO',
      Oficio          : {
        Numero: 4273,
        Fecha : '2017-11-08',
      },
      Bienes               : 'VEHICULO',
      PlacaoNumeroMatricula: 'WLQ-216',
      DescripcionMedida:
        'CAMIONETA PUBLICO// ENVIO DERECHO DE PETICION PARA REGISTRAR LA MEDIDA',
      Oficios: {
        FechaRetiro: '2017-11-30',
      },
      FechaRadicaccion: '2017-11-30',
      RespuestaEmbargo: false,
    },

    Avaluo: {
      Valor: 'VALIDAR COMO IRRECUPERABLE',
    },
  },
  {
    Carpeta: 312,
    Deudor : {
      Id    : 8799171,
      Nombre: 'manuel enrique arteaga orozco',

      Email    : 'saliradelante2012@hotmail.com',
      Direccion: 'CARRERA 18 B No 4 C -  20  SOACHA',
    },

    Demanda: {
      VencimientoPagare: '2030-01-05',
      Obligacion       : {
        '1': '180049   53037120066499008',
        '2': '3778133433049336 /4513075801129044',
      },
      CapitalAdeudado          : '$ 44.944.657',
      EntregadeGarantiasAbogado: '2017-10-26',
      Departamento             : 'CUNDINAMARCA',
      Municipio                : 'SOACHA',

      Proceso: {
        Tipo: 'HIPOTECARIO',
      },
      Ubicacion: {
        Juzgado: 'REMATE DEL INMUEBLE',
      },
      Radicado: '2017 - 00323',
    },

    llaveProceso : '25754400300120170032300',
    EtapaProcesal: {
      Etapa: 'EJECUCION',
      Fecha: {
        PresentacionDemanda: '2017-11-01',
        MandamientodePago  : '2017-11-24',
      },
    },
    Notificaciones: {
      '291': {
        Recibo            : '2018-02-15',
        Resultado         : true,
        AportaNotificacion: '2018-02-15',
      },
      '292': {
        Resultado: true,
      },
      Certimail     : true,
      Fisico        : false,
      Tipo          : 'CERTIMAIL',
      AutoNotificado: '2018-02-22',
    },
    MedidasCautelares: {
      FechaOrdena     : '2017-11-24',
      MedidaSolicitada: 'EMBARGO DE INMUEBLE',
      Oficio          : {
        Numero: 8469,
        Fecha : '2018-08-01',
      },
      Bienes               : 'APTO 101 TORRE 20',
      PlacaoNumeroMatricula: '051-162001',

      RespuestaEmbargo: true,
    },
    Liquidacion: {
      Fecha: {
        Sentencia: '2018-11-06',
        Solicitud: '2018-11-13',
      },
    },
  },
  {
    Carpeta: 401,
    Deudor : {
      Id    : 79396995,
      Nombre: 'arturo lince gomez',
      Tel   : {
        Fijo   : 4244358,
        Celular: 31088445603,
      },
      Email    : 'arthurlingo64@hotmail.com',
      Direccion: 'CALLE 12 A No 71 B - 60',
    },

    Demanda: {
      VencimientoPagare: '2021-01-27',

      CapitalAdeudado          : '$ 22.592.583',
      EntregadeGarantiasAbogado: '2018-02-15',
      Departamento             : 'CUNDINAMARCA',
      Municipio                : 'BOGOTA',
      Juzgado                  : {
        Origen   : '21 CM',
        Ejecucion: '13 CME',
      },
      Proceso: {
        Tipo: 'HIPOTECARIO',
      },
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION',
      },
      Radicado: '2018 - 00236',
    },

    llaveProceso : '11001400302120180023600',
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        PresentacionDemanda: '2018-02-22',
        MandamientodePago  : '2018-03-02',
      },
    },
    Notificaciones: {
      '291': {
        Recibo            : '2018-04-08',
        Resultado         : true,
        AportaNotificacion: '2018-04-10',
      },
      '292': {
        Resultado: true,
      },
      Certimail     : true,
      Fisico        : false,
      Tipo          : 'PERSONAL',
      AutoNotificado: '2018-04-19',
    },
    MedidasCautelares: {
      FechaOrdena     : '20108-03-01',
      MedidaSolicitada: 'EMBARGO DE INMUEBLE',
      Oficio          : {
        Numero: 832,
        Fecha : '2018-03-09',
      },
      Bienes               : 'CASA 176',
      PlacaoNumeroMatricula: '50C-1645938',

      Oficios: {
        FechaRetiro: '2018-03-09',
      },
      FechaRadicaccion: '2018-06-28',
      RespuestaEmbargo: true,
      Fecha           : {
        DecretoSecuestrooCaptura: '2018-08-27',
      },
    },
    Liquidacion: {
      Fecha: {
        Sentencia: '2018-09-25',

        Presentacion: '2018-08-02',
        Aprobacion  : '2018-08-27',
      },

      Costas: {
        Valor          : 20,
        FechaAprobacion: '2018-07-11',
      },
    },
  },
  {
    Carpeta: 405,
    Deudor : {
      Id    : 900545720,
      Nombre: 'creas soluciones s.a.s',
      Tel   : {
        Fijo   : 8626344,
        Celular: 3107982028,
      },
      Email    : 'andibarracosta@gmail.com',
      Direccion: 'CARRERA 50 1# 47 - 50 INT 1 APTO 101',
    },
    Codeudor: {
      Id    : 12192291,
      Nombre: 'ANDRES ENRIQUE IBARRA ACOSTA',

      Direccion: 'CALLE 56 # 17 - 03 CASA 65 NEIVA',
    },
    Demanda: {
      VencimientoPagare: '2018-06-20',

      CapitalAdeudado          : '$ 11.949.471',
      EntregadeGarantiasAbogado: '2018-02-15',
      Departamento             : 'CUNDINAMARCA',
      Municipio                : 'BOGOTA',
      Juzgado                  : {
        Origen   : '56 CM',
        Ejecucion: '7 CME',
      },
      Proceso: {
        Tipo: 'SINGULAR',
      },
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION',
      },
      Radicado: '2018 - 00221',
    },

    llaveProceso : '11001400305620180022100',
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        PresentacionDemanda: '2018-02-28',
        MandamientodePago  : '2018-03-22',
      },
    },
    Notificaciones: {
      '291': {
        Recibo            : '2018-05-18',
        Resultado         : true,
        AportaNotificacion: '2018-05-18',
      },
      '292': {
        AportaNotificacion: '2018-05-18',
        Resultado         : true,
      },
      Certimail     : true,
      Fisico        : false,
      Tipo          : 'CERTIMAIL',
      AutoNotificado: '2018-05-18',
    },
    MedidasCautelares: {
      FechaOrdena     : '2018-03-22',
      MedidaSolicitada: 'EMBARGO DE DINEROS EN BANCOS',
      Oficio          : {
        Numero: 747,
        Fecha : '2018-04-02',
      },
      Bienes: 'BANCOS',

      RespuestaEmbargo: false,
    },
    Liquidacion: {
      Fecha: {
        Sentencia: '2018-06-07',
      },
    },
  },
  {
    Carpeta: 461,
    Deudor : {
      Id    : 52883958,
      Nombre: 'leidy yaneth vidal rodriguez',

      Email    : 'leidyyaneth.lyv@gmail.com',
      Direccion: 'DIAGONAL 2 # 21 B-20',
    },

    Demanda: {
      VencimientoPagare: '2021-02-16',
      Obligacion       : {
        '1': 'AMERICAN 0377814037749057',
        '2': 'VISA 4513083943843365 // MASTER 5303729958258417',
      },
      CapitalAdeudado          : '$ 24.501.535',
      EntregadeGarantiasAbogado: '2018-07-05',
      Departamento             : 'CUNDINAMARCA',
      Municipio                : 'BOGOTA',

      Proceso: {
        Tipo: 'SINGULAR',
      },
      Ubicacion: {
        Juzgado: 'JARAMILLO',
      },
      Radicado: '2019 - 00656',
    },

    llaveProceso : '11001418901420190065600',
    EtapaProcesal: {
      Etapa: 'CONTESTACION DEMANDA',
      Fecha: {
        PresentacionDemanda: '2018-07-12',
        MandamientodePago  : '2019-05-07',
      },
    },
    Notificaciones: {
      '291': {
        Recibo            : '2019-09-28',
        Resultado         : false,
        AportaNotificacion: '2019-09-28',
      },
      '292': {
        Resultado: true,
      },
      Certimail     : true,
      Fisico        : true,
      Tipo          : 'CERTIMAIL Y CORREO',
      AutoNotificado: '2020-01-29',
    },
    MedidasCautelares: {
      FechaOrdena     : '2019-05-14',
      MedidaSolicitada: 'EMBARGO DE INMUEBLE',
      Oficio          : {
        Numero: 937,
        Fecha : '2019-05-14',
      },
      Bienes               : 'PREDIO RURAL',
      PlacaoNumeroMatricula: '372-19300',

      RespuestaEmbargo: false,
    },
  },
  {
    Carpeta: 489,
    Deudor : {
      Id    : 51987570,
      Nombre: 'sandra patricia pacheco ramirez',

      Email: 'sandrabogota2007@yahoo.com',
      Direccion:
        'CALLE 163 B No 50-80  INTERIOR 10 APT 231 CONJUNTO LA ESTANCIA III',
    },

    Demanda: {
      VencimientoPagare: '2021-07-05',
      Obligacion       : {
        '1': 'AUDIOPRESTAMO',
        '2': '0377816345049476 // 4513070259455355 // 5303720114305077',
      },
      CapitalAdeudado          : '$ 18.100.699',
      EntregadeGarantiasAbogado: '2018-09-03',
      Departamento             : 'CUNDINAMARCA',
      Municipio                : 'BOGOTA',
      Juzgado                  : {
        Origen   : '8 PCYCM',
        Ejecucion: '5 CME',
      },
      Proceso: {
        Tipo: 'SINGULAR',
      },
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION',
      },
      Radicado: '2018 - 00785',
    },

    llaveProceso : '11001418900820180078500',
    EtapaProcesal: {
      Etapa: 'EMBARGO DE REMANENTES JUZGADO 27 PROCESO 2019 - 00251',
      Fecha: {
        PresentacionDemanda: '2018-09-20',
        MandamientodePago  : '2018-10-04',
      },
    },
    Notificaciones: {
      '291': {
        Recibo            : '2018-11-02',
        Resultado         : true,
        AportaNotificacion: '2018-11-02',
      },
      '292': {
        Resultado: true,
      },
      Certimail: true,
      Fisico   : false,
      Tipo     : 'CORREO',
    },
    MedidasCautelares: {
      FechaOrdena     : '2018-11-20',
      MedidaSolicitada: 'EMBARGO DE INMUEBLE',
      Oficio          : {
        Numero: 2288,
        Fecha : '2018-11-20',
      },
      Bienes               : 'APTO 231',
      PlacaoNumeroMatricula: '50N - 20247423',

      RespuestaEmbargo: false,
    },
  },
  {
    Carpeta: 494,
    Deudor : {
      Id    : 13222728,
      Nombre: 'modesto pineda perez',

      Email    : 'mopadinco@yahoo.com',
      Direccion: 'CARRERA 6 No 6-59',
    },

    Demanda: {
      VencimientoPagare: '2021-09-14',
      Obligacion       : {
        '1': 'AUDIOPRESTAMO',
        '2': 5491570347356810,
      },
      CapitalAdeudado          : '$ 27.373.832',
      EntregadeGarantiasAbogado: '2018-09-18',
      Departamento             : 'CUNDINAMARCA',
      Municipio                : 'CHIA',

      Proceso: {
        Tipo: 'SINGULAR',
      },
      Ubicacion: {
        Juzgado: 'CHIA',
      },
      Radicado: '2018 - 00602',
    },

    llaveProceso : '25175408900320180060200',
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        PresentacionDemanda: '2018-10-04',
        MandamientodePago  : '2018-10-12',
      },
    },
    Notificaciones: {
      '291': {
        Recibo            : '2018-11-26',
        Resultado         : true,
        AportaNotificacion: '2018-12-06',
      },
      '292': {
        Resultado: true,
      },
      Certimail: false,
      Fisico   : true,
      Tipo     : 'CERTIMAIL',
    },
    MedidasCautelares: {
      FechaOrdena     : '2018-10-22',
      MedidaSolicitada: 'EMBARGO DE INMUEBLE',
      Oficio          : {
        Numero: '1939-2018',
        Fecha : '2019-02-11',
      },
      Bienes               : 'CASA',
      PlacaoNumeroMatricula: 'YESID',

      RespuestaEmbargo: true,
    },
  },
  {
    Carpeta: 497,
    Deudor : {
      Id    : 3208569,
      Nombre: 'floresmiro aponte acosta',

      Email    : 'dcentro@pcpplasticos.com',
      Direccion: 'DIAGONAL 77B No 119 A-74 APTO 504 INT6',
    },
    Codeudor: {
      Id    : 51955296,
      Nombre: 'FLOR ANGELA RODRIGUEZ',

      Direccion: 'DIAGONAL 77B No 119 A-74 APTO 504 INT6',
    },
    Demanda: {
      VencimientoPagare: '2024-11-30',
      Obligacion       : {
        '1': '20990123680  7/  377813468472239',
        '2': '4513079359765043 // 53037220341399596',
      },
      CapitalAdeudado          : '$ 24.807.317',
      EntregadeGarantiasAbogado: '2018-10-08',
      Departamento             : 'CUNDINAMARCA',
      Municipio                : 'BOGOTA',

      Proceso: {
        Tipo: 'HIPOTECARO',
      },
      Ubicacion: {
        Juzgado: 'HMM PISO 5',
      },
      Radicado: '2019 - 00708',
    },

    llaveProceso : '11001418901320190070800',
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        PresentacionDemanda: '2018-10-12',
        MandamientodePago  : '2019-07-31',
      },
    },
    Notificaciones: {
      '291': {
        Recibo: '2020-02-18',

        AportaNotificacion: '2020-02-18',
      },
      '292': {
        Resultado: true,
      },
      Certimail: true,
      Fisico   : false,
      Tipo     : 'CORREO',
    },
    MedidasCautelares: {
      FechaOrdena     : '2020-02-13',
      MedidaSolicitada: 'EMBARGO DE INMUEBLE',
      Oficio          : {
        Numero: 422,
        Fecha : '2020-02-13',
      },
      Bienes: 'APTO 504',

      RespuestaEmbargo: 'pending',
    },
  },
  {
    Carpeta: 506,
    Deudor : {
      Id    : 11230400,
      Nombre: 'jose alfonso vasquez tovar',

      Email    : 'joalvato09@hotmail.com',
      Direccion: 'CALLE 2 A # 5-22 APTO 503',
    },

    Demanda: {
      VencimientoPagare: '2026-03-01',

      CapitalAdeudado          : '$ 29.416.113',
      EntregadeGarantiasAbogado: '2018-11-26',
      Departamento             : 'CUNDINAMARCA',
      Municipio                : 'LA CALERA',

      Proceso: {
        Tipo: 'SINGULAR',
      },
      Ubicacion: {
        Juzgado: 'LA CALERA',
      },
      Radicado: '2018 - 00371',
    },

    llaveProceso : '25377408900120180037100',
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        PresentacionDemanda: '2018-12-07',
        MandamientodePago  : '2019-01-17',
      },
    },
    Notificaciones: {
      '291': {
        Recibo            : '2019-04-24',
        Resultado         : true,
        AportaNotificacion: '2019-04-24',
      },
      '292': {
        Resultado: true,
      },
      Certimail: false,
      Fisico   : true,
      Tipo     : 'CORREO',
    },
    MedidasCautelares: {
      FechaOrdena     : '2019-01-28',
      MedidaSolicitada: 'EMBARGO INMUEBLES',

      Bienes               : 'APTO 503',
      PlacaoNumeroMatricula: '50N - 20288831',

      RespuestaEmbargo: false,
    },
  },
  {
    Carpeta: 529,
    Deudor : {
      Id    : 51813018,
      Nombre: 'sandra leonor paez murcia',
      Tel   : {
        Fijo   : 6139147,
        Celular: 3134386087,
      },
      Email    : 'yadelcis@hotmail.com',
      Direccion: 'KR 81 No. 127 A - 46 CONJUNTO MONTE AZUL BOGOTA',
    },
    Codeudor: {
      Id    : 19299851,
      Nombre: 'MARCO TULIO SANCHEZ MEDINA',

      Direccion: 'KR 81 No. 127 - 46 Torre 1 Apt 401',
    },
    Demanda: {
      Obligacion: {
        '1': 2020084294,
        '2': '2020087484 // 4594250317705437 //5303723260933890',
      },
      CapitalAdeudado          : '$ 35.608.653',
      EntregadeGarantiasAbogado: '2020-10-07',
      Departamento             : 'CUNDINAMARCA',
      Municipio                : 'BOGOTA',

      Proceso: {
        Tipo: 'SINGULAR',
      },
      Ubicacion: {
        Juzgado: 'HMM PISO 13',
      },
      Radicado: '2020 - 00535',
    },

    llaveProceso : '11001400304220200053500',
    EtapaProcesal: {
      Etapa: 'EJECUCION',
      Fecha: {
        PresentacionDemanda: '2020-10-07',
      },
    },
    Notificaciones: {
      '291': {
        Recibo   : '2021-06-22',
        Resultado: true,
      },

      Certimail: true,
      Fisico   : true,
    },
  },
  {
    Carpeta: 530,
    Deudor : {
      Id    : 900520023,
      Nombre: 'dimoin colombia s.a.s.',

      Direccion: 'AV BOYACA 63D - 26 OFICINA 103',
    },

    Demanda: {
      Obligacion: {
        '1': 65886140334,
        '2': 4594260446916180,
      },
      CapitalAdeudado          : '$ 15.324.570',
      EntregadeGarantiasAbogado: '2020-09-05',
      Departamento             : 'CUNDINAMARCA',
      Municipio                : 'BOGOTA',
      Juzgado                  : {
        Origen: '50 PCYCM/ 68 CM',
      },
      Proceso: {
        Tipo: 'SINGULAR',
      },
      Ubicacion: {
        Juzgado: 'HMM PISO 15',
      },
      Radicado: '2020-1021',
    },

    llaveProceso : '11001400306820200102100',
    EtapaProcesal: {
      Etapa: 'NOTIFICACION',
    },
  },
  {
    Carpeta: 366,
    Deudor : {
      Id    : 79522009,
      Nombre: 'jairo alfonso pardo jaimes',

      Email    : 'jairopardo8-11-70@hotmail.com',
      Direccion: 'DIAGONAL 28 No 33-27  TORRE 7 APART 203  SOACHA',
    },

    Demanda: {
      VencimientoPagare: '2021-11-15',
      Obligacion       : {
        '1': 1680097436,
        '2': 148653,
      },
      CapitalAdeudado          : '$ 56.987.693',
      EntregadeGarantiasAbogado: '2017-11-14',
      Departamento             : 'CUNDINAMARCA',
      Municipio                : 'SOACHA',

      Proceso: {
        Tipo: 'HIPOTECARIO',
      },
      Ubicacion: {
        Juzgado: 'SOACHA',
      },
      Radicado: '2018 - 00060',
    },

    llaveProceso : '2575440030042018000600',
    EtapaProcesal: {
      Etapa: 'EJECUCION',
    },
  },
  {
    Deudor: {
      Nombre: 'pedro jonathan ramirez gomez',
    },

    Demanda: {
      Departamento: 'CUNDINAMARCA',
      Municipio   : 'FUSAGASUGA',

      Proceso: {
        Tipo: 'SINGULAR',
      },
      Ubicacion: {
        Juzgado: 'CIVIL MUNICIPAL',
      },
      Radicado: '2023 - 763',
    },

    llaveProceso: '00000000000000000000000',
  },
];

const rows: unknown[] = [];

const Collection = async () => {
  const client = await clientPromise;
  if (!client) {
    throw new Error (
      'no hay cliente mongólico'
    );
  }

  const db = client.db (
    'RyS'
  );

  const demandados = db.collection (
    'Demandados'
  );
  return demandados;
};

export async function EditDemandado(
  {
    demandado 
  }: { demandado: IntCarpetas }
) {
  try {
    const collection = await Collection ();

    const result = await collection.updateOne (
      {
        llaveProceso: demandado.llaveProceso,
      },
      {
        $set: demandado,
      }
    );
    console.log (
      result.acknowledged
    );
    return result.acknowledged;
  }
  catch (err) {
    console.log (
      err
    );
  }
}

export async function fetchProcesoRama(
  {
    carpeta 
  }: { carpeta: IntCarpetas }
) {
  try {
    const req = await fetch (
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${ carpeta.llaveProceso }&SoloActivos=false`
    );
    if (!req.ok) {
      const newCarpeta: IntCarpetas = {
        ...carpeta,
        idProceso: req.status,
      };
      return newCarpeta;
    }

    const res = (await req.json ()) as intConsultaNumeroRadicacion;
    if (res.procesos.length === 0) {
      const newCarpeta: IntCarpetas = {
        ...carpeta,
        idProceso: 0,
      };
      return newCarpeta;
    }

    const procesos = res.procesos;

    const ids = procesos.map (
      (
        proceso
      ) => proceso.idProceso
    );

    const nIds = ids.map (
      (
        i
      ) => {
        const newCarpeta: IntCarpetas = {
          ...carpeta,
          idProceso: i,
        };
        return newCarpeta;
      }
    );

    return nIds;
  }
  catch (err) {
    console.log (
      err
    );
    return carpeta;
  }
}

Carpetas.forEach (
  (
    carpeta, index
  ) => {
    setTimeout (
      async () =>
        await fetchProcesoRama (
          {
            carpeta: carpeta,
          }
        ).then (
          async (
            carpetaArreglada
          ) => {
            console.log (
              carpetaArreglada
            );
            rows.push (
              carpetaArreglada
            );
            fs.writeFile (
              './newCarpetas.json',
              JSON.stringify (
                rows
              )
            );

            const edit = await EditDemandado (
              {
                demandado: carpeta,
              }
            );
            return edit ?? false;
          },
          (
            error
          ) => {
            console.log (
              JSON.stringify (
                error
              )
            );
            return false;
          }
        ),
      index * 1000
    );
  }
);

export const sleep = (
  ms: number
) =>
  new Promise (
    (
      resolve
    ) => setTimeout (
      resolve,
      ms
    )
  );
