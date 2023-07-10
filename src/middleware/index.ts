import { IntCarpeta } from '#@/types';
import { MongoClient } from 'mongodb';
import * as fs from 'fs/promises';

const carpetas: IntCarpeta[] = [
  {

    Avaluo: {
      Adjudicacion: {
        Fecha: new Date (
          '1999-01-01'
        ),
      },
      Remate: {
        Fecha: new Date (
          '1999-01-01'
        ),
      },
    },
    Carpeta: 14,
    Demanda: {
      Departamento     : 'CUNDINAMARCA',
      Municipio        : 'BOGOTA',
      VencimientoPagare: new Date (
        '2020-05-04'
      ),
      EntregadeGarantiasAbogado: new Date (
        '2017-05-11'
      ),
      Radicado       : '2017 - 00884',
      CapitalAdeudado: '$ 33.791.309',
      Proceso        : {
        Tipo: 'PRENDARIO',
      },
      Ubicacion: {
        Juzgado: 'HMM PISO 5',
      },
    },
    Deudor: {
      Id       : 1077969975,
      Email    : 'yess_Id@hotmail.com',
      Nombre   : 'yesid albeiro ramos',
      Direccion: 'CARRERA 77B No. 68B - 19 BARRIO SANTA HELENITA',
      Tel      : {
        Fijo   : 3193905254,
        Celular: 3212337597,
      },
    },
    EtapaProcesal: {
      Etapa: 'EMPLAZAMIENTO',
      Fecha: {
        MandamientodePago: new Date (
          '2017-06-02'
        ),
      },
    },
    Liquidacion: {
      Costas: {
        FechaAprobacion: new Date (
          '1999-01-01'
        ),
      },
      Fecha: {
        Aprobacion: new Date (
          '1999-01-01'
        ),
      },
    },
    MedidasCautelares: {
      Bienes               : 'VEHICULO',
      MedidaSolicitada     : 'VEHICULO',
      Extra                : 'LA PRINCIPAL SAS',
      PlacaoNumeroMatricula: 'IYM-870',
      DescripcionMedida:
        'AUTOMOVIL MODELO 2017 MARCA CHEVROLET COLOR ROJO VELVET SERVICIOPARTICULAR  MINI SPARK',
      Fecha: {
        Captura                 : 43315,
        Secuestro               : 'PENDIENTE',
        DecretoSecuestrooCaptura: new Date (
          '2010-03-20'
        ),
      },
      FechaRadicaccion: new Date (
        '2018-05-31'
      ),
      Oficios: {
        FechaRetiro: new Date (
          '2017-09-28'
        ),
      },
      RespuestaEmbargo: true,
    },
    Notificaciones: {
      291: {
        AportaNotificacion: new Date (
          '2018-07-11'
        ),
      },
      292: {
        AportaNotificacion: new Date (
          '2018-07-11'
        ),
      },
      AutoNotificado: new Date (
        '2018-07-11'
      ),
    },
    SuspencionProceso: {
      TerminoSuspencion: 'N/A',
      Fecha            : new Date (
        '1999-01-01'
      ),
    },
    Terminacion: {
      Causal: 'N/A',
      Fecha : {
        AutoTerminacion: new Date (
          '1999-01-01'
        ),
        RadicacionMemorial: new Date (
          '1999-01-01'
        ),
      },
    },
    idProceso   : 50468620,
    llaveProceso: '11001400300320170088400',
  },
  {

    Avaluo: {
      Adjudicacion: {
        Fecha: new Date (
          '1999-01-01'
        ),
      },
      Remate: {
        Fecha: new Date (
          '1999-01-01'
        ),
      },
    },
    Carpeta: 14,
    Demanda: {
      Departamento     : 'CUNDINAMARCA',
      Municipio        : 'BOGOTA',
      VencimientoPagare: new Date (
        '2020-05-04'
      ),
      EntregadeGarantiasAbogado: new Date (
        '2017-05-11'
      ),
      Radicado       : '2017 - 00884',
      CapitalAdeudado: '$ 33.791.309',
      Proceso        : {
        Tipo: 'PRENDARIO',
      },
      Ubicacion: {
        Juzgado: 'HMM PISO 5',
      },
    },
    Deudor: {
      Id       : 1077969975,
      Email    : 'yess_Id@hotmail.com',
      Nombre   : 'yesid albeiro ramos',
      Direccion: 'CARRERA 77B No. 68B - 19 BARRIO SANTA HELENITA',
      Tel      : {
        Fijo   : 3193905254,
        Celular: 3212337597,
      },
    },
    EtapaProcesal: {
      Etapa: 'EMPLAZAMIENTO',
      Fecha: {
        MandamientodePago: new Date (
          '2017-06-02'
        ),
      },
    },
    Liquidacion: {
      Costas: {
        FechaAprobacion: new Date (
          '1999-01-01'
        ),
      },
      Fecha: {
        Aprobacion: new Date (
          '1999-01-01'
        ),
      },
    },
    MedidasCautelares: {
      Bienes               : 'VEHICULO',
      MedidaSolicitada     : 'VEHICULO',
      Extra                : 'LA PRINCIPAL SAS',
      PlacaoNumeroMatricula: 'IYM-870',
      DescripcionMedida:
        'AUTOMOVIL MODELO 2017 MARCA CHEVROLET COLOR ROJO VELVET SERVICIOPARTICULAR  MINI SPARK',
      Fecha: {
        Captura                 : 43315,
        Secuestro               : 'PENDIENTE',
        DecretoSecuestrooCaptura: new Date (
          '2010-03-20'
        ),
      },
      FechaRadicaccion: new Date (
        '2018-05-31'
      ),
      Oficios: {
        FechaRetiro: new Date (
          '2017-09-28'
        ),
      },
      RespuestaEmbargo: true,
    },
    Notificaciones: {
      291: {
        AportaNotificacion: new Date (
          '2018-07-11'
        ),
      },
      292: {
        AportaNotificacion: new Date (
          '2018-07-11'
        ),
      },
      AutoNotificado: new Date (
        '11/07/2018'
      ),
    },
    SuspencionProceso: {
      TerminoSuspencion: 'N/A',
      Fecha            : new Date (
        '1999-01-01'
      ),
    },
    Terminacion: {
      Causal: 'N/A',
      Fecha : {
        AutoTerminacion: new Date (
          '1999-01-01'
        ),
        RadicacionMemorial: new Date (
          '1999-01-01'
        ),
      },
    },
    idProceso   : 113956611,
    llaveProceso: '11001400300320170088400',
  },
  {

    Carpeta : 86,
    Codeudor: {
      Id    : 1015435620,
      Nombre: 'JESICA PAOLA GUZMAN OSPINA',
    },
    Demanda: {
      Departamento     : 'CUNDINAMARCA',
      Municipio        : 'BOGOTA',
      VencimientoPagare: new Date (
        '2020-06-09'
      ),
      Radicado                 : '2017 - 00836',
      EntregadeGarantiasAbogado: new Date (
        '1899-12-30'
      ),
      CapitalAdeudado: '$ 26.515.333',
      Juzgado        : {
        Origen   : '34 CM',
        Ejecucion: '12 CME',
      },
      Proceso: {
        Tipo: 'PRENDARIO',
      },
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION',
      },
    },
    Deudor: {
      Id       : 1032432802,
      Email    : 'orduzcrit2@hotmail.com',
      Nombre   : 'luis esneider orduz farfan',
      Direccion: 'CARRERA 95 # 138 - 58',
    },
    EtapaProcesal: {
      Etapa: 'EJECUCION',
      Fecha: {
        MandamientodePago: new Date (
          '2017-07-10'
        ),
        PresentacionDemanda: new Date (
          '2017-06-20'
        ),
      },
    },
    MedidasCautelares: {
      Bienes: 'VEHICULO',
      Fecha : {
        SolicitudCapturaoSecuestro: new Date (
          '2019-04-11'
        ),
      },
      MedidaSolicitada     : 'VEHICULO',
      DescripcionMedida    : 'VEHICULO',
      PlacaoNumeroMatricula: 'UBK-333',
      FechaRadicaccion     : new Date (
        '2018-08-24'
      ),
      FechaOrdena: new Date (
        '2017-07-10'
      ),
      Oficio: {
        Numero: 1355,
        Fecha : new Date (
          '2017-07-17'
        ),
      },
      Oficios: {
        FechaRetiro: new Date (
          '2017-08-24'
        ),
      },
      RespuestaEmbargo: true,
    },
    Notificaciones: {
      291: {
        Recibo: new Date (
          '2018-12-02'
        ),
        AportaNotificacion: new Date (
          '2018-07-18'
        ),
        Resultado: true,
      },
      292: {
        AportaNotificacion: new Date (
          '2018-07-18'
        ),
        Resultado: true,
      },
      AutoNotificado: new Date (
        '2019-01-25'
      ),
      Certimail: false,
      Fisico   : true,
      Tipo     : 'EMPLAZAMIENTO',
    },
    idProceso   : 50521480,
    llaveProceso: '11001400303420170083600',
  },
  {

    Carpeta : 86,
    Codeudor: {
      Id    : 1015435620,
      Nombre: 'JESICA PAOLA GUZMAN OSPINA',
    },
    Demanda: {
      Departamento     : 'CUNDINAMARCA',
      Municipio        : 'BOGOTA',
      VencimientoPagare: new Date (
        '2020-06-09'
      ),
      Radicado                 : '2017 - 00836',
      EntregadeGarantiasAbogado: new Date (
        '1899-12-30'
      ),
      CapitalAdeudado: '$ 26.515.333',
      Juzgado        : {
        Origen   : '34 CM',
        Ejecucion: '12 CME',
      },
      Proceso: {
        Tipo: 'PRENDARIO',
      },
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION',
      },
    },
    Deudor: {
      Id       : 1032432802,
      Email    : 'orduzcrit2@hotmail.com',
      Nombre   : 'luis esneider orduz farfan',
      Direccion: 'CARRERA 95 # 138 - 58',
    },
    EtapaProcesal: {
      Etapa: 'EJECUCION',
      Fecha: {
        MandamientodePago: new Date (
          '2017-07-10'
        ),
        PresentacionDemanda: new Date (
          '2017-06-20'
        ),
      },
    },
    MedidasCautelares: {
      Bienes: 'VEHICULO',
      Fecha : {
        SolicitudCapturaoSecuestro: new Date (
          '2019-04-11'
        ),
      },
      MedidaSolicitada     : 'VEHICULO',
      DescripcionMedida    : 'VEHICULO',
      PlacaoNumeroMatricula: 'UBK-333',
      FechaRadicaccion     : new Date (
        '2018-08-24'
      ),
      FechaOrdena: new Date (
        '2017-07-10'
      ),
      Oficio: {
        Numero: 1355,
        Fecha : new Date (
          '2017-07-17'
        ),
      },
      Oficios: {
        FechaRetiro: new Date (
          '2017-08-24'
        ),
      },
      RespuestaEmbargo: true,
    },
    Notificaciones: {
      291: {
        Recibo: new Date (
          '2018-12-02'
        ),
        AportaNotificacion: new Date (
          '2018-07-18'
        ),
        Resultado: true,
      },
      292: {
        AportaNotificacion: new Date (
          '2018-07-18'
        ),
        Resultado: true,
      },
      AutoNotificado: new Date (
        '2019-01-25'
      ),
      Certimail: false,
      Fisico   : true,
      Tipo     : 'EMPLAZAMIENTO',
    },
    idProceso   : 81728891,
    llaveProceso: '11001400303420170083600',
  },
  {

    Avaluo: {
      Valor:
        'SE ENVIA SOLICITUD OFICIO PARA ENVIAR POR EL JUZGADO A SALUD TOTAL EPS // PROCESO IRRECUPERABLE',
    },
    Carpeta: 98,
    Demanda: {
      Municipio        : 'MESITAS',
      Departamento     : 'CUNDINAMARCA',
      VencimientoPagare: new Date (
        '2019-07-05'
      ),
      Radicado                 : '2017-00239',
      EntregadeGarantiasAbogado: new Date (
        '2017-06-12'
      ),
      CapitalAdeudado: '$ 50.000.000',
      Proceso        : {
        Tipo: 'SINGULAR',
      },
      Ubicacion: {
        Juzgado: 'EL COLEGIO',
      },
    },
    Deudor: {
      Id       : 1070329396,
      Nombre   : 'erika alejandra quintero reyes',
      Direccion: 'CALL 2 # 8-40 EL COLEGIO',
    },
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        MandamientodePago: new Date (
          '2017-11-07'
        ),
        PresentacionDemanda: new Date (
          '2017-08-29'
        ),
      },
    },
    Liquidacion: {
      Fecha: {
        Presentacion: new Date (
          '2018-11-26'
        ),
        Solicitud: new Date (
          '2018-09-04'
        ),
      },
    },
    MedidasCautelares: {
      DescripcionMedida: 'RETENCION DINEROS',
      MedidaSolicitada : 'EMBARGO DE DINEROS EN BANCOS',
      Bienes           : 'BANCOS',
      FechaRadicaccion : new Date (
        '2023-02-02'
      ),
      FechaOrdena: new Date (
        '2017-11-07'
      ),
      Oficio: {
        Numero: 1461,
        Fecha : new Date (
          '2017-11-15'
        ),
      },
      RespuestaEmbargo: true,
    },
    Notificaciones: {
      291: {
        AportaNotificacion: new Date (
          '2018-05-17'
        ),
      },
      292: {
        AportaNotificacion: new Date (
          '2018-05-17'
        ),
        Resultado: true,
      },
      Tipo          : 'CORREO',
      AutoNotificado: new Date (
        '2018-07-17'
      ),
    },
    idProceso   : 0,
    llaveProceso: '25245408900120170023900',
  },
  {

    Carpeta : 116,
    Codeudor: {
      Id       : 52771090,
      Nombre   : 'YENY ESPERANZA ARIAS MENDIETA',
      Direccion: 'CARRERA 3 # 29A - 02 LOCAL 1057',
    },
    Demanda: {
      Municipio        : 'SOACHA',
      Departamento     : 'CUNDINAMARCA',
      VencimientoPagare: new Date (
        '2021-04-12'
      ),
      EntregadeGarantiasAbogado: new Date (
        '2017-08-04'
      ),
      Radicado       : '2017 - 00755',
      CapitalAdeudado: '$ 13.906.249',
      Proceso        : {
        Tipo: 'SINGULAR',
      },
      Ubicacion: {
        Juzgado: 'SOACHA',
      },
    },
    Deudor: {
      Id       : 900212673,
      Nombre   : 'jencell e.u.',
      Direccion: 'CARRERA 3 # 29A - 02',
    },
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        MandamientodePago: new Date (
          '2017-09-08'
        ),
        PresentacionDemanda: new Date (
          '2017-08-11'
        ),
      },
    },
    Liquidacion: {
      Fecha: {
        Aprobacion: new Date (
          '2018-08-01'
        ),
        Presentacion: new Date (
          '2018-06-20'
        ),
        Sentencia: new Date (
          '2018-02-09'
        ),
      },
      ValorCredito: '5003149,67',
    },
    MedidasCautelares: {
      DescripcionMedida:
        'SOLICITA EMBARGO DE INMUEBLE PROPIEDAD DE REPRESENTANTE LEGAL Y CODEUDORA',
      MedidaSolicitada: 'EMBARGO INMUEBLE DE LA CODEUDORA',
      Bienes          : 'BANCOS',
      FechaOrdena     : new Date (
        '2017-09-08'
      ),
      FechaRadicaccion: new Date (
        '2018-06'
      ),
      Oficio: {
        Numero: 1181,
        Fecha : new Date (
          '2017-09-15'
        ),
      },
      Oficios: {
        FechaRetiro: new Date (
          '2018-09-15'
        ),
      },
      PlacaoNumeroMatricula: '051-130616',
    },
    Notificaciones: {
      291: {
        AportaNotificacion: new Date (
          '2017-12-12'
        ),
        Recibo: new Date (
          '2017-12-12'
        ),
        Resultado: true,
      },
      292: {
        AportaNotificacion: new Date (
          '2017-12-12'
        ),
        Resultado: true,
      },
      AutoNotificado: new Date (
        '2018-02-09'
      ),
      Certimail: true,
      Fisico   : false,
      Tipo     : 'CERTIMAIL',
    },
    idProceso   : 0,
    llaveProceso: '25754418900320170075500',
  },
  {

    Carpeta: 170,
    Demanda: {
      Departamento     : 'CUNDINAMARCA',
      Municipio        : 'BOGOTA',
      VencimientoPagare: new Date (
        '2026-03-10'
      ),
      EntregadeGarantiasAbogado: new Date (
        '2017-08-22'
      ),
      CapitalAdeudado: '$ 14.795.921',
      Juzgado        : {
        Origen   : '25 CM',
        Ejecucion: '18 CME',
      },
      Proceso: {
        Tipo: 'HIPOTECARIO',
      },
      Radicado : '2017 - 00903',
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION',
      },
    },
    Deudor: {
      Id       : 52189873,
      Email    : 'darnelly-74@hotmail.com',
      Nombre   : 'darnelly hernandez martinez',
      Direccion: 'CALLE 74G # 80 - 58 SUR',
      Tel      : {
        Fijo   : 4530972,
        Celular: 3144189224,
      },
    },
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        MandamientodePago: new Date (
          '2017-09-18'
        ),
        PresentacionDemanda: new Date (
          '2017-08-28'
        ),
      },
    },
    Liquidacion: {
      Fecha: {
        Presentacion: new Date (
          '2019-01-11'
        ),
        Sentencia: new Date (
          '2018-06-22'
        ),
      },
    },
    MedidasCautelares: {
      Bienes           : 'INMUEBLE APTO 504',
      DescripcionMedida: 'INMUEBLE  CARRERA 88 C N° 62-65 SUR',
      Fecha            : {
        SolicitudCapturaoSecuestro: new Date (
          '2018-03-22'
        ),
      },
      MedidaSolicitada: 'EMBARGO DE INMUEBLE',
      FechaRadicaccion: new Date (
        '2018-01-28'
      ),
      FechaOrdena: new Date (
        '2017-09-18'
      ),
      Oficio: {
        Numero: 3781,
        Fecha : new Date (
          '2017-09-25'
        ),
      },
      PlacaoNumeroMatricula: '50S-40552545',
      RespuestaEmbargo     : true,
    },
    Notificaciones: {
      291: {
        AportaNotificacion: new Date (
          '2018-06-20'
        ),
        Recibo: new Date (
          '2018-06-20'
        ),
        Resultado: true,
      },
      292: {
        AportaNotificacion: new Date (
          '2018-06-20'
        ),
        Resultado: true,
      },
      AutoNotificado: new Date (
        '2018-06-22'
      ),
      Certimail: true,
      Fisico   : false,
      Tipo     : 'CERTIMAIL',
    },
    idProceso   : 112048180,
    llaveProceso: '11001400302520170090300',
  },
  {

    Avaluo: {
      Valor:
        'SOLICITAR JUZGADO REQUERIR A SECRETARIA DE MOVILIDAD DE COTA LAS RAZONES POR LAS CUALES NO SE HA REGISTRADO MEDIDA CAUTELAR VEHICULO SLJ234 // RECONOCE PERSONERIA 31/01/22 // REVISAR URGENTE NUEVO APODERADO CISA // BANCOLOMBIA NO HA CEDIDO A REINTEGRA CREDITO // SEPT 9 RECONOCE PODER A CISA',
    },
    Carpeta: 178,
    Demanda: {
      Departamento     : 'CUNDINAMARCA',
      Municipio        : 'BOGOTA',
      VencimientoPagare: new Date (
        '2019-11-03'
      ),
      EntregadeGarantiasAbogado: new Date (
        '2017-08-01'
      ),
      CapitalAdeudado: '$ 25.833.335',
      Juzgado        : {
        Ejecucion: '17 CME',
        Origen   : '1 CM',
      },
      Proceso: {
        Tipo: 'SINGULAR',
      },
      Radicado : '2017 - 01001',
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION',
      },
    },
    Deudor: {
      Id       : 11185630,
      Nombre   : 'wilson alfonso jimenez mendieta',
      Email    : 'grupocomerciallasabana@hotmail.com',
      Direccion: 'CARRERA 81C # 2B - 80 PISO 2',
    },
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        MandamientodePago: new Date (
          '2017-09-05'
        ),
        PresentacionDemanda: new Date (
          '2017-08-08'
        ),
      },
    },
    Liquidacion: {
      Fecha: {
        Aprobacion: new Date (
          '2018-07-13'
        ),
        Presentacion: new Date (
          '2018-06-29'
        ),
        Solicitud: new Date (
          '2018-06-22'
        ),
      },
    },
    MedidasCautelares: {
      PlacaoNumeroMatricula: 'SLJ234',
      DescripcionMedida:
        'PEDIR EMBARGO Y SECUESTRO VEHICULO PROPIEDAD DEL DEUDOR',
      MedidaSolicitada: 'EMBARGO DE DINEROS EN BANCOS',
      Bienes          : 'BANCOS',
      FechaOrdena     : new Date (
        '2017-09-05'
      ),
      Oficio: {
        Fecha: new Date (
          '2017-09-06'
        ),
        Numero: 2849,
      },
      RespuestaEmbargo: false,
    },
    Notificaciones: {
      291: {
        AportaNotificacion: new Date (
          '2018-06-06'
        ),
        Recibo: new Date (
          '2018-02-06'
        ),
        Resultado: true,
      },
      292: {
        AportaNotificacion: new Date (
          '2018-06-06'
        ),
        Resultado: true,
      },
      AutoNotificado: new Date (
        '2018-06-22'
      ),
      Certimail: true,
      Fisico   : false,
      Tipo     : 'CORREO',
    },
    idProceso   : 50621670,
    llaveProceso: '11001400300120170100100',
  },
  {

    Carpeta: 231,
    Demanda: {
      Departamento             : 'CUNDINAMARCA',
      Municipio                : 'BOGOTA',
      EntregadeGarantiasAbogado: new Date (
        '2017-09-06'
      ),
      VencimientoPagare: new Date (
        '2017-02-14'
      ),
      CapitalAdeudado: '$ 27.603.821',
      Juzgado        : {
        Origen   : '8 CM',
        Ejecucion: '6 CME',
      },
      Proceso: {
        Tipo: 'HIPOTECARIO',
      },
      Radicado : '2017 - 01134',
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION',
      },
    },
    Deudor: {
      Id       : 79853115,
      Email    : 'fanor.diaz@gmail.com',
      Nombre   : 'fanor diaz agudelo',
      Direccion: 'DIAGONAL 56 BIS 84 A 10 SUR TR 1',
      Tel      : {
        Fijo   : 8060271,
        Celular: 3212406193,
      },
    },
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        MandamientodePago: new Date (
          '2017-09-21'
        ),
        PresentacionDemanda: new Date (
          '2017-09-18'
        ),
      },
    },
    Liquidacion: {
      Fecha: {
        Presentacion: new Date (
          '2019-01-11'
        ),
        Solicitud: new Date (
          '2018-07-24'
        ),
        Sentencia: new Date (
          '2018-07-16'
        ),
      },
    },
    MedidasCautelares: {
      Bienes          : 'INMUEBLE',
      MedidaSolicitada: 'EMBARGO DE INMUEBLE',
      DescripcionMedida:
        'APARTAMENTO 502 INT. 17 CONJUNTO RESIDNCIAL ALONDRA  P.H.  DIAGONAL 56 BIS SUR N° 84 A -20',
      FechaRadicaccion: new Date (
        '2018-05-15'
      ),
      FechaOrdena: new Date (
        '2017-09-21'
      ),
      Oficio: {
        Numero: 2746,
        Fecha : new Date (
          '2017-10-04'
        ),
      },
      Oficios: {
        FechaRetiro: new Date (
          '2017-10-04'
        ),
      },
      PlacaoNumeroMatricula: '50S-40590187',
      RespuestaEmbargo     : true,
    },
    Notificaciones: {
      291: {
        AportaNotificacion: new Date (
          '2018-02-06'
        ),
        Recibo: new Date (
          '2018-02-06'
        ),
        Resultado: true,
      },
      292: {
        AportaNotificacion: new Date (
          '2018-02-06'
        ),
        Resultado: true,
      },
      AutoNotificado: new Date (
        '2018-05-07'
      ),
      Certimail: true,
      Fisico   : false,
      Tipo     : 'CERTIMAIL',
    },
    idProceso   : 50716620,
    llaveProceso: '11001400300820170113400',
  },
  {

    Carpeta : 274,
    Codeudor: {
      Id       : 4337296,
      Nombre   : 'JOSE NOEL PUERTA PUERTA',
      Direccion: 'CARRERA  115 No 89 A - 31 INT 12 APART 202',
    },
    Demanda: {
      Departamento     : 'CUNDINAMARCA',
      Municipio        : 'BOGOTA',
      VencimientoPagare: new Date (
        '2019-03-18'
      ),
      EntregadeGarantiasAbogado: new Date (
        '2017-09-28'
      ),
      CapitalAdeudado: '$ 12.347.548',
      Juzgado        : {
        Origen   : '37 CM',
        Ejecucion: '11 CME',
      },
      Proceso: {
        Tipo: 'SINGULAR',
      },
      Radicado : '2017 - 01391',
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION',
      },
    },
    Deudor: {
      Id       : 35506033,
      Email    : 'natis-rolita@hotmail.con',
      Nombre   : 'luz dary puerta jaramillo',
      Direccion: 'CARRERA  101  No 71 B - 53',
      Tel      : {
        Fijo   : 4357832,
        Celular: 3103430010,
      },
    },
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        MandamientodePago: new Date (
          '2018-01-16'
        ),
        PresentacionDemanda: new Date (
          '2017-10-10'
        ),
      },
    },
    Notificaciones: {
      291: {
        AportaNotificacion: new Date (
          '2018-09-14'
        ),
        Recibo: new Date (
          '2018-04-30'
        ),
        Resultado: true,
      },
      292: {
        AportaNotificacion: new Date (
          '2018-06-08'
        ),
        Recibo: new Date (
          '2018-05-15'
        ),
        Resultado: true,
      },
      AutoNotificado: new Date (
        '2018-09-03'
      ),
      Certimail: false,
      Fisico   : true,
      Tipo     : 'CORREO',
    },
    idProceso   : 112945420,
    llaveProceso: '11001400303720170139100',
  },
  {

    Carpeta : 278,
    Codeudor: {
      Direccion: 'DG 3B No. 0-78 ESTE',
      Nombre   : [
        'CARMELINA AGUILAR ',
        ' ANA LUCIA AGUILAR'
      ],
      Id: [
        41759787,
        39710157
      ],
      Tel: {
        Fijo   : 3107627120,
        Celular: 3204613419,
      },
    },
    Demanda: {
      Departamento     : 'CUNDINAMARCA',
      Municipio        : 'BOGOTA',
      VencimientoPagare: new Date (
        '2024-05-05'
      ),
      EntregadeGarantiasAbogado: new Date (
        '2017-09-21'
      ),
      CapitalAdeudado: '$ 66.362.959',
      Juzgado        : {
        Origen   : '15 CM',
        Ejecucion: '11 CME',
      },
      Proceso: {
        Tipo: 'HIPOTECARIO',
      },
      Radicado : '2017 - 01394',
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION',
      },
    },
    Deudor: {
      Id       : 19255260,
      Nombre   : 'matias humberto avila aguilar',
      Email    : 'maifren_13@yahoo.es',
      Direccion: 'CALLE 2 C No 62 - 20',
      Tel      : {
        Fijo   : 4170527,
        Celular: 3125024008,
      },
    },
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        MandamientodePago: new Date (
          '2018-02-09'
        ),
        PresentacionDemanda: new Date (
          '2017-10-10'
        ),
      },
    },
    MedidasCautelares: {
      MedidaSolicitada: 'EMBARGO DE INMUEBLE',
      Bienes          : 'CASA',
      FechaRadicaccion: new Date (
        '2018-03-12'
      ),
      FechaOrdena: new Date (
        '2017-11-08'
      ),
      Oficio: {
        Numero: 284,
        Fecha : new Date (
          '2018-02-16'
        ),
      },
      Oficios: {
        FechaRetiro: new Date (
          '2018-02-16'
        ),
      },
      PlacaoNumeroMatricula: '50C-643759',
      RespuestaEmbargo     : false,
    },
    Notificaciones: {
      291: {
        AportaNotificacion: new Date (
          '2018-06-08'
        ),
        Recibo: new Date (
          '2018-02-14'
        ),
        Resultado: true,
      },
      292: {
        AportaNotificacion: new Date (
          '2018-06-08'
        ),
        Recibo: new Date (
          '2018-02-23'
        ),
        Resultado: true,
      },
      AutoNotificado: new Date (
        '2018-02-23'
      ),
      Certimail: false,
      Fisico   : true,
      Tipo     : 'CORREO/ PERSONAL',
    },
    idProceso   : 50777890,
    llaveProceso: '11001400301520170139400',
  },
  {

    Avaluo: {
      Valor:
        'RETIRAR DEL JUZGADO RESPUESTA DE ETB Y ALIANSALUD EPS SE RADICA OFICIO ACLARANDO CESIÓN DEL CRÉDITO',
    },
    Carpeta: 289,
    Demanda: {
      Departamento     : 'CUNDINAMARCA',
      Municipio        : 'BOGOTA',
      VencimientoPagare: new Date (
        '2020-03-05'
      ),
      EntregadeGarantiasAbogado: new Date (
        '2017-09-19'
      ),
      Radicado       : '2017 - 00974',
      CapitalAdeudado: '$ 12.249.598',
      Juzgado        : {
        Origen   : '48 CM',
        Ejecucion: '7 CME',
      },
      Obligacion: {
        1: '320088443  / 377813441863587',
        2: 4513070212799642,
      },
      Proceso: {
        Tipo: 'SINGULAR',
      },
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION',
      },
    },
    Deudor: {
      Id       : 1032383389,
      Direccion: 'CALLE 64 SUR  No 85 B - 40  APARTAMENTO  104',
      Email    : 'ars.09@hotmail.com',
      Nombre   : 'anderson revelo santos',
      Tel      : {
        Fijo   : 4725511,
        Celular: 3118526428,
      },
    },
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        MandamientodePago: new Date (
          '2017-11-03'
        ),
        PresentacionDemanda: new Date (
          '2017-10-06'
        ),
      },
    },
    Liquidacion: {
      Fecha: {
        Aprobacion: new Date (
          '2018-06-15'
        ),
        Presentacion: new Date (
          '2018-06-05'
        ),
        Solicitud: new Date (
          '2018-02-23'
        ),
      },
    },
    MedidasCautelares: {
      DescripcionMedida: 'EMBARGO DE SALARIOS',
      MedidaSolicitada : 'EMBARGO DE INMUEBLE',
      Bienes           : 'APTO 104 TORRE 4',
      FechaRadicaccion : new Date (
        '2018-01-31'
      ),
      FechaOrdena: new Date (
        '2017-11-03'
      ),
      Oficio: {
        Numero: 799,
        Fecha : new Date (
          '2017-12-01'
        ),
      },
      PlacaoNumeroMatricula: '50S-40606676',
      RespuestaEmbargo     : false,
    },
    Notificaciones: {
      291: {
        AportaNotificacion: new Date (
          '2018-01-30'
        ),
        Recibo: new Date (
          '2018-01-30'
        ),
        Resultado: true,
      },
      292: {
        AportaNotificacion: new Date (
          '2018-01-30'
        ),
        Resultado: true,
      },
      AutoNotificado: new Date (
        '2018-02-23'
      ),
      Certimail: true,
      Fisico   : false,
      Tipo     : 'CERTIMAIL',
    },
    idProceso   : 50762570,
    llaveProceso: '11001400304820170097400',
  },
  {

    Avaluo: {
      Valor: 'VALIDAR COMO IRRECUPERABLE',
    },
    Carpeta: 306,
    Demanda: {
      Departamento     : 'CUNDINAMARCA',
      Municipio        : 'BOGOTA',
      VencimientoPagare: new Date (
        '2020-03-23'
      ),
      EntregadeGarantiasAbogado: new Date (
        '2017-10-04'
      ),
      Radicado       : '2017 - 01532',
      CapitalAdeudado: '$ 40.406.421',
      Juzgado        : {
        Origen   : '21 CM',
        Ejecucion: '15 CME',
      },
      Obligacion: {
        1: '1740086734 4513073749673967',
        2: 5303719549810730,
      },
      Proceso: {
        Tipo: 'SINGULAR',
      },
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION',
      },
    },
    Deudor: {
      Id       : 79388145,
      Nombre   : 'libardo alfonso gonzalez triviño',
      Email    : 'li_bcar@hotmail.com',
      Direccion: 'CARRERA 72 A- No 9 - 44',
    },
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        MandamientodePago: new Date (
          '2017-11-30'
        ),
        PresentacionDemanda: new Date (
          '2017-10-10'
        ),
      },
    },
    MedidasCautelares: {
      PlacaoNumeroMatricula: 'WLQ-216',
      Bienes               : 'VEHICULO',
      MedidaSolicitada     : 'EMBARGO DE VEHICULO',
      DescripcionMedida:
        'CAMIONETA PUBLICO// ENVIO DERECHO DE PETICION PARA REGISTRAR LA MEDIDA',
      FechaOrdena: new Date (
        '2017-11-30'
      ),
      FechaRadicaccion: new Date (
        '2017-11-30'
      ),
      Oficio: {
        Numero: 4273,
        Fecha : new Date (
          '2017-11-08'
        ),
      },
      Oficios: {
        FechaRetiro: new Date (
          '2017-11-30'
        ),
      },
      RespuestaEmbargo: false,
    },
    Notificaciones: {
      291: {
        AportaNotificacion: new Date (
          '2018-07-06'
        ),
        Recibo: new Date (
          '2018-04-25'
        ),
        Resultado: true,
      },
      292: {
        AportaNotificacion: new Date (
          '2019-05-27'
        ),
        Recibo: new Date (
          '2019-05-27'
        ),
        Resultado: true,
      },
      AutoNotificado: new Date (
        '2019-06-17'
      ),
      Certimail: false,
      Fisico   : true,
      Tipo     : 'CORREO',
    },
    idProceso   : 50769660,
    llaveProceso: '11001400302120170153200',
  },
  {

    Avaluo: {
      Valor: 'VALIDAR COMO IRRECUPERABLE',
    },
    Carpeta: 306,
    Demanda: {
      Departamento     : 'CUNDINAMARCA',
      Municipio        : 'BOGOTA',
      VencimientoPagare: new Date (
        '2020-03-23'
      ),
      EntregadeGarantiasAbogado: new Date (
        '2017-10-04'
      ),
      Radicado       : '2017 - 01532',
      CapitalAdeudado: '$ 40.406.421',
      Juzgado        : {
        Origen   : '21 CM',
        Ejecucion: '15 CME',
      },
      Obligacion: {
        1: '1740086734 4513073749673967',
        2: 5303719549810730,
      },
      Proceso: {
        Tipo: 'SINGULAR',
      },
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION',
      },
    },
    Deudor: {
      Id       : 79388145,
      Nombre   : 'libardo alfonso gonzalez triviño',
      Email    : 'li_bcar@hotmail.com',
      Direccion: 'CARRERA 72 A- No 9 - 44',
    },
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        MandamientodePago: new Date (
          '2017-11-30'
        ),
        PresentacionDemanda: new Date (
          '2017-10-10'
        ),
      },
    },
    MedidasCautelares: {
      PlacaoNumeroMatricula: 'WLQ-216',
      Bienes               : 'VEHICULO',
      MedidaSolicitada     : 'EMBARGO DE VEHICULO',
      DescripcionMedida:
        'CAMIONETA PUBLICO// ENVIO DERECHO DE PETICION PARA REGISTRAR LA MEDIDA',
      FechaOrdena: new Date (
        '2017-11-30'
      ),
      FechaRadicaccion: new Date (
        '2017-11-30'
      ),
      Oficio: {
        Numero: 4273,
        Fecha : new Date (
          '2017-11-08'
        ),
      },
      Oficios: {
        FechaRetiro: new Date (
          '2017-11-30'
        ),
      },
      RespuestaEmbargo: false,
    },
    Notificaciones: {
      291: {
        AportaNotificacion: new Date (
          '2018-07-06'
        ),
        Recibo: new Date (
          '2018-04-25'
        ),
        Resultado: true,
      },
      292: {
        AportaNotificacion: new Date (
          '2019-05-27'
        ),
        Recibo: new Date (
          '2019-05-27'
        ),
        Resultado: true,
      },
      AutoNotificado: new Date (
        '2019-06-17'
      ),
      Certimail: false,
      Fisico   : true,
      Tipo     : 'CORREO',
    },
    idProceso   : 81620291,
    llaveProceso: '11001400302120170153200',
  },
  {

    Carpeta: 312,
    Demanda: {
      Municipio        : 'SOACHA',
      Departamento     : 'CUNDINAMARCA',
      VencimientoPagare: new Date (
        '2030-01-05'
      ),
      EntregadeGarantiasAbogado: new Date (
        '2017-10-26'
      ),
      CapitalAdeudado: '$ 44.944.657',
      Obligacion     : {
        1: '180049   53037120066499008',
        2: '3778133433049336 /4513075801129044',
      },
      Proceso: {
        Tipo: 'HIPOTECARIO',
      },
      Radicado : '2017 - 00323',
      Ubicacion: {
        Juzgado: 'REMATE DEL INMUEBLE',
      },
    },
    Deudor: {
      Id       : 8799171,
      Email    : 'saliradelante2012@hotmail.com',
      Nombre   : 'manuel enrique arteaga orozco',
      Direccion: 'CARRERA 18 B No 4 C -  20  SOACHA',
    },
    EtapaProcesal: {
      Etapa: 'EJECUCION',
      Fecha: {
        MandamientodePago: new Date (
          '2017-11-24'
        ),
        PresentacionDemanda: new Date (
          '2017-11-01'
        ),
      },
    },
    Liquidacion: {
      Fecha: {
        Solicitud: new Date (
          '2018-11-13'
        ),
        Sentencia: new Date (
          '2018-11-06'
        ),
      },
    },
    MedidasCautelares: {
      MedidaSolicitada: 'EMBARGO DE INMUEBLE',
      Bienes          : 'APTO 101 TORRE 20',
      FechaOrdena     : new Date (
        '2017-11-24'
      ),
      Oficio: {
        Numero: 8469,
        Fecha : new Date (
          '2018-08-01'
        ),
      },
      PlacaoNumeroMatricula: '051-162001',
      RespuestaEmbargo     : true,
    },
    Notificaciones: {
      291: {
        AportaNotificacion: new Date (
          '2018-02-15'
        ),
        Recibo: new Date (
          '2018-02-15'
        ),
        Resultado: true,
      },
      292: {
        Resultado: true,
      },
      AutoNotificado: new Date (
        '2018-02-22'
      ),
      Certimail: true,
      Fisico   : false,
      Tipo     : 'CERTIMAIL',
    },
    idProceso   : 0,
    llaveProceso: '25754400300120170032300',
  },
  {

    Carpeta: 401,
    Demanda: {
      Departamento     : 'CUNDINAMARCA',
      Municipio        : 'BOGOTA',
      VencimientoPagare: new Date (
        '2021-01-27'
      ),
      EntregadeGarantiasAbogado: new Date (
        '2018-02-15'
      ),
      CapitalAdeudado: '$ 22.592.583',
      Juzgado        : {
        Origen   : '21 CM',
        Ejecucion: '13 CME',
      },
      Proceso: {
        Tipo: 'HIPOTECARIO',
      },
      Radicado : '2018 - 00236',
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION',
      },
    },
    Deudor: {
      Id       : 79396995,
      Direccion: 'CALLE 12 A No 71 B - 60',
      Nombre   : 'arturo lince gomez',
      Email    : 'arthurlingo64@hotmail.com',
      Tel      : {
        Fijo   : 4244358,
        Celular: 31088445603,
      },
    },
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        MandamientodePago: new Date (
          '2018-03-02'
        ),
        PresentacionDemanda: new Date (
          '2018-02-22'
        ),
      },
    },
    Liquidacion: {
      Costas: {
        Valor          : 20,
        FechaAprobacion: new Date (
          '2018-07-11'
        ),
      },
      Fecha: {
        Sentencia: new Date (
          '2018-09-25'
        ),
        Aprobacion: new Date (
          '2018-08-27'
        ),
        Presentacion: new Date (
          '2018-08-02'
        ),
      },
    },
    MedidasCautelares: {
      Bienes: 'CASA 176',
      Fecha : {
        DecretoSecuestrooCaptura: new Date (
          '2018-08-27'
        ),
      },
      MedidaSolicitada: 'EMBARGO DE INMUEBLE',
      FechaOrdena     : new Date (
        '2018-03-01'
      ),
      FechaRadicaccion: new Date (
        '2018-06-28'
      ),
      Oficio: {
        Numero: 832,
        Fecha : new Date (
          '2018-03-09'
        ),
      },
      Oficios: {
        FechaRetiro: new Date (
          '2018-03-09'
        ),
      },
      PlacaoNumeroMatricula: '50C-1645938',
      RespuestaEmbargo     : true,
    },
    Notificaciones: {
      291: {
        AportaNotificacion: new Date (
          '2018-04-10'
        ),
        Recibo: new Date (
          '2018-04-08'
        ),
        Resultado: true,
      },
      292: {
        Resultado: true,
      },
      AutoNotificado: new Date (
        '2018-04-19'
      ),
      Certimail: true,
      Fisico   : false,
      Tipo     : 'PERSONAL',
    },
    idProceso   : 51029180,
    llaveProceso: '11001400302120180023600',
  },
  {

    Carpeta : 405,
    Codeudor: {
      Id       : 12192291,
      Direccion: 'CALLE 56 # 17 - 03 CASA 65 NEIVA',
      Nombre   : 'ANDRES ENRIQUE IBARRA ACOSTA',
    },
    Demanda: {
      Departamento     : 'CUNDINAMARCA',
      Municipio        : 'BOGOTA',
      VencimientoPagare: new Date (
        '2018-06-20'
      ),
      EntregadeGarantiasAbogado: new Date (
        '2018-02-15'
      ),
      CapitalAdeudado: '$ 11.949.471',
      Juzgado        : {
        Origen   : '56 CM',
        Ejecucion: '7 CME',
      },
      Proceso: {
        Tipo: 'SINGULAR',
      },
      Radicado : '2018 - 00221',
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION',
      },
    },
    Deudor: {
      Id       : 900545720,
      Nombre   : 'creas soluciones s.a.s',
      Direccion: 'CARRERA 50 1# 47 - 50 INT 1 APTO 101',
      Email    : 'andibarracosta@gmail.com',
      Tel      : {
        Fijo   : 8626344,
        Celular: 3107982028,
      },
    },
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        MandamientodePago: new Date (
          '2018-03-22'
        ),
        PresentacionDemanda: new Date (
          '2018-02-28'
        ),
      },
    },
    Liquidacion: {
      Fecha: {
        Sentencia: new Date (
          '2018-06-07'
        ),
      },
    },
    MedidasCautelares: {
      MedidaSolicitada: 'EMBARGO DE DINEROS EN BANCOS',
      Bienes          : 'BANCOS',
      FechaOrdena     : new Date (
        '2018-03-22'
      ),
      Oficio: {
        Numero: 747,
        Fecha : new Date (
          '2018-04-02'
        ),
      },
      RespuestaEmbargo: false,
    },
    Notificaciones: {
      291: {
        AportaNotificacion: new Date (
          '2018-05-18'
        ),
        Recibo: new Date (
          '2018-05-18'
        ),
        Resultado: true,
      },
      292: {
        AportaNotificacion: new Date (
          '2018-05-18'
        ),
        Resultado: true,
      },
      AutoNotificado: new Date (
        '2018-05-18'
      ),
      Certimail: true,
      Fisico   : false,
      Tipo     : 'CERTIMAIL',
    },
    idProceso   : 51042800,
    llaveProceso: '11001400305620180022100',
  },
  {

    Carpeta: 461,
    Demanda: {
      Departamento     : 'CUNDINAMARCA',
      Municipio        : 'BOGOTA',
      VencimientoPagare: new Date (
        '2021-02-16'
      ),
      Radicado                 : '2019 - 00656',
      EntregadeGarantiasAbogado: new Date (
        '2018-07-05'
      ),
      CapitalAdeudado: '$ 24.501.535',
      Obligacion     : {
        1: 'AMERICAN 0377814037749057',
        2: 'VISA 4513083943843365 // MASTER 5303729958258417',
      },
      Proceso: {
        Tipo: 'SINGULAR',
      },
      Ubicacion: {
        Juzgado: 'JARAMILLO',
      },
    },
    Deudor: {
      Id       : 52883958,
      Email    : 'leidyyaneth.lyv@gmail.com',
      Nombre   : 'leidy yaneth vidal rodriguez',
      Direccion: 'DIAGONAL 2 # 21 B-20',
    },
    EtapaProcesal: {
      Etapa: 'CONTESTACION DEMANDA',
      Fecha: {
        MandamientodePago: new Date (
          '2019-05-07'
        ),
        PresentacionDemanda: new Date (
          '2018-07-12'
        ),
      },
    },
    MedidasCautelares: {
      Bienes          : 'PREDIO RURAL',
      MedidaSolicitada: 'EMBARGO DE INMUEBLE',
      FechaOrdena     : new Date (
        '2019-05-14'
      ),
      Oficio: {
        Numero: 937,
        Fecha : new Date (
          '2019-05-14'
        ),
      },
      PlacaoNumeroMatricula: '372-19300',
      RespuestaEmbargo     : false,
    },
    Notificaciones: {
      291: {
        AportaNotificacion: new Date (
          '2019-09-28'
        ),
        Recibo: new Date (
          '2019-09-28'
        ),
        Resultado: false,
      },
      292: {
        Resultado: true,
      },
      AutoNotificado: new Date (
        '2020-01-29'
      ),
      Certimail: true,
      Fisico   : true,
      Tipo     : 'CERTIMAIL Y CORREO',
    },
    idProceso   : 51816100,
    llaveProceso: '11001418901420190065600',
  },
  {

    Carpeta: 461,
    Demanda: {
      Departamento     : 'CUNDINAMARCA',
      Municipio        : 'BOGOTA',
      VencimientoPagare: new Date (
        '2021-02-16'
      ),
      Radicado                 : '2019 - 00656',
      EntregadeGarantiasAbogado: new Date (
        '2018-07-05'
      ),
      CapitalAdeudado: '$ 24.501.535',
      Obligacion     : {
        1: 'AMERICAN 0377814037749057',
        2: 'VISA 4513083943843365 // MASTER 5303729958258417',
      },
      Proceso: {
        Tipo: 'SINGULAR',
      },
      Ubicacion: {
        Juzgado: 'JARAMILLO',
      },
    },
    Deudor: {
      Id       : 52883958,
      Email    : 'leidyyaneth.lyv@gmail.com',
      Nombre   : 'leidy yaneth vidal rodriguez',
      Direccion: 'DIAGONAL 2 # 21 B-20',
    },
    EtapaProcesal: {
      Etapa: 'CONTESTACION DEMANDA',
      Fecha: {
        MandamientodePago: new Date (
          '2019-05-07'
        ),
        PresentacionDemanda: new Date (
          '2018-07-12'
        ),
      },
    },
    MedidasCautelares: {
      Bienes          : 'PREDIO RURAL',
      MedidaSolicitada: 'EMBARGO DE INMUEBLE',
      FechaOrdena     : new Date (
        '2019-05-14'
      ),
      Oficio: {
        Numero: 937,
        Fecha : new Date (
          '2019-05-14'
        ),
      },
      PlacaoNumeroMatricula: '372-19300',
      RespuestaEmbargo     : false,
    },
    Notificaciones: {
      291: {
        AportaNotificacion: new Date (
          '2019-09-28'
        ),
        Recibo: new Date (
          '2019-09-28'
        ),
        Resultado: false,
      },
      292: {
        Resultado: true,
      },
      AutoNotificado: new Date (
        '2020-01-29'
      ),
      Certimail: true,
      Fisico   : true,
      Tipo     : 'CERTIMAIL Y CORREO',
    },
    idProceso   : 135801811,
    llaveProceso: '11001418901420190065600',
  },
  {

    Carpeta: 489,
    Demanda: {
      Departamento     : 'CUNDINAMARCA',
      Municipio        : 'BOGOTA',
      VencimientoPagare: new Date (
        '2021-07-05'
      ),
      EntregadeGarantiasAbogado: new Date (
        '2018-09-03'
      ),
      Radicado       : '2018 - 00785',
      CapitalAdeudado: '$ 18.100.699',
      Juzgado        : {
        Origen   : '8 PCYCM',
        Ejecucion: '5 CME',
      },
      Obligacion: {
        1: 'AUDIOPRESTAMO',
        2: '0377816345049476 // 4513070259455355 // 5303720114305077',
      },
      Proceso: {
        Tipo: 'SINGULAR',
      },
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION',
      },
    },
    Deudor: {
      Id    : 51987570,
      Email : 'sandrabogota2007@yahoo.com',
      Nombre: 'sandra patricia pacheco ramirez',
      Direccion:
        'CALLE 163 B No 50-80  INTERIOR 10 APT 231 CONJUNTO LA ESTANCIA III',
    },
    EtapaProcesal: {
      Etapa: 'EMBARGO DE REMANENTES JUZGADO 27 PROCESO 2019 - 00251',
      Fecha: {
        MandamientodePago: new Date (
          '2018-10-04'
        ),
        PresentacionDemanda: new Date (
          '2018-09-20'
        ),
      },
    },
    MedidasCautelares: {
      MedidaSolicitada: 'EMBARGO DE INMUEBLE',
      Bienes          : 'APTO 231',
      FechaOrdena     : new Date (
        '2018-11-20'
      ),
      Oficio: {
        Numero: 2288,
        Fecha : new Date (
          '2018-11-20'
        ),
      },
      PlacaoNumeroMatricula: '50N - 20247423',
      RespuestaEmbargo     : false,
    },
    Notificaciones: {
      291: {
        AportaNotificacion: new Date (
          '2018-11-02'
        ),
        Recibo: new Date (
          '2018-11-02'
        ),
        Resultado: true,
      },
      292: {
        Resultado: true,
      },
      Certimail: true,
      Fisico   : false,
      Tipo     : 'CORREO',
    },
    idProceso   : 87350810,
    llaveProceso: '11001418900820180078500',
  },
  {

    Carpeta: 494,
    Demanda: {
      Departamento     : 'CUNDINAMARCA',
      Municipio        : 'CHIA',
      VencimientoPagare: new Date (
        '2021-09-14'
      ),
      EntregadeGarantiasAbogado: new Date (
        '2018-09-18'
      ),
      CapitalAdeudado: '$ 27.373.832',
      Obligacion     : {
        1: 'AUDIOPRESTAMO',
        2: 5491570347356810,
      },
      Proceso: {
        Tipo: 'SINGULAR',
      },
      Radicado : '2018 - 00602',
      Ubicacion: {
        Juzgado: 'CHIA',
      },
    },
    Deudor: {
      Id       : 13222728,
      Email    : 'mopadinco@yahoo.com',
      Nombre   : 'modesto pineda perez',
      Direccion: 'CARRERA 6 No 6-59',
    },
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        MandamientodePago: new Date (
          '2018-10-12'
        ),
        PresentacionDemanda: new Date (
          '2018-10-04'
        ),
      },
    },
    MedidasCautelares: {
      PlacaoNumeroMatricula: 'YESID',
      MedidaSolicitada     : 'EMBARGO DE INMUEBLE',
      Bienes               : 'CASA',
      FechaOrdena          : new Date (
        '2018-10-22'
      ),
      Oficio: {
        Fecha: new Date (
          '2019-02-11'
        ),
        Numero: 1939,
      },
      RespuestaEmbargo: true,
    },
    Notificaciones: {
      291: {
        AportaNotificacion: new Date (
          '2018-12-06'
        ),
        Recibo: new Date (
          '2018-11-26'
        ),
        Resultado: true,
      },
      292: {
        Resultado: true,
      },
      Certimail: false,
      Fisico   : true,
      Tipo     : 'CERTIMAIL',
    },
    idProceso   : 0,
    llaveProceso: '25175408900320180060200',
  },
  {

    Carpeta : 497,
    Codeudor: {
      Id       : 51955296,
      Nombre   : 'FLOR ANGELA RODRIGUEZ',
      Direccion: 'DIAGONAL 77B No 119 A-74 APTO 504 INT6',
    },
    Demanda: {
      Departamento     : 'CUNDINAMARCA',
      Municipio        : 'BOGOTA',
      VencimientoPagare: new Date (
        '2024-11-30'
      ),
      Radicado                 : '2019 - 00708',
      EntregadeGarantiasAbogado: new Date (
        '2018-10-08'
      ),
      CapitalAdeudado: '$ 24.807.317',
      Obligacion     : {
        1: '20990123680  7/  377813468472239',
        2: '4513079359765043 // 53037220341399596',
      },
      Proceso: {
        Tipo: 'HIPOTECARIO',
      },
      Ubicacion: {
        Juzgado: 'HMM PISO 5',
      },
    },
    Deudor: {
      Id       : 3208569,
      Nombre   : 'floresmiro aponte acosta',
      Direccion: 'DIAGONAL 77B No 119 A-74 APTO 504 INT6',
      Email    : 'dcentro@pcpplasticos.com',
    },
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        MandamientodePago: new Date (
          '2019-07-31'
        ),
        PresentacionDemanda: new Date (
          '2018-10-12'
        ),
      },
    },
    MedidasCautelares: {
      RespuestaEmbargo: false,
      MedidaSolicitada: 'EMBARGO DE INMUEBLE',
      Bienes          : 'APTO 504',
      FechaOrdena     : new Date (
        '2020-02-13'
      ),
      Oficio: {
        Numero: 422,
        Fecha : new Date (
          '2020-02-13'
        ),
      },
    },
    Notificaciones: {
      291: {
        AportaNotificacion: new Date (
          '2020-02-18'
        ),
        Recibo: new Date (
          '2020-02-18'
        ),
      },
      292: {
        Resultado: true,
      },
      Certimail: true,
      Fisico   : false,
      Tipo     : 'CORREO',
    },
    idProceso   : 0,
    llaveProceso: '11001418901320190070800',
  },
  {

    Carpeta: 506,
    Demanda: {
      Municipio        : 'LA CALERA',
      Departamento     : 'CUNDINAMARCA',
      VencimientoPagare: new Date (
        '2026-03-01'
      ),
      EntregadeGarantiasAbogado: new Date (
        '2018-11-26'
      ),
      Radicado       : '2018 - 00371',
      CapitalAdeudado: '$ 29.416.113',
      Proceso        : {
        Tipo: 'SINGULAR',
      },
      Ubicacion: {
        Juzgado: 'LA CALERA',
      },
    },
    Deudor: {
      Id       : 11230400,
      Nombre   : 'jose alfonso vasquez tovar',
      Email    : 'joalvato09@hotmail.com',
      Direccion: 'CALLE 2 A # 5-22 APTO 503',
    },
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        MandamientodePago: new Date (
          '2019-01-17'
        ),
        PresentacionDemanda: new Date (
          '2018-12-07'
        ),
      },
    },
    MedidasCautelares: {
      MedidaSolicitada: 'EMBARGO INMUEBLES',
      Bienes          : 'APTO 503',
      FechaOrdena     : new Date (
        '2019-01-28'
      ),
      PlacaoNumeroMatricula: '50N - 20288831',
      RespuestaEmbargo     : false,
    },
    Notificaciones: {
      291: {
        AportaNotificacion: new Date (
          '2019-04-24'
        ),
        Recibo: new Date (
          '2019-04-24'
        ),
        Resultado: true,
      },
      292: {
        Resultado: true,
      },
      Certimail: false,
      Fisico   : true,
      Tipo     : 'CORREO',
    },
    idProceso   : 0,
    llaveProceso: '25377408900120180037100',
  },
  {

    Carpeta : 529,
    Codeudor: {
      Id       : 19299851,
      Nombre   : 'MARCO TULIO SANCHEZ MEDINA',
      Direccion: 'KR 81 No. 127 - 46 Torre 1 Apt 401',
    },
    Demanda: {
      Departamento             : 'CUNDINAMARCA',
      Municipio                : 'BOGOTA',
      EntregadeGarantiasAbogado: new Date (
        '2020-10-07'
      ),
      CapitalAdeudado: '$ 35.608.653',
      Obligacion     : {
        1: 2020084294,
        2: '2020087484 // 4594250317705437 //5303723260933890',
      },
      Proceso: {
        Tipo: 'SINGULAR',
      },
      Radicado : '2020 - 00535',
      Ubicacion: {
        Juzgado: 'HMM PISO 13',
      },
    },
    Deudor: {
      Id       : 51813018,
      Email    : 'yadelcis@hotmail.com',
      Nombre   : 'sandra leonor paez murcia',
      Direccion: 'KR 81 No. 127 A - 46 CONJUNTO MONTE AZUL BOGOTA',
      Tel      : {
        Fijo   : 6139147,
        Celular: 3134386087,
      },
    },
    EtapaProcesal: {
      Etapa: 'EJECUCION',
      Fecha: {
        PresentacionDemanda: new Date (
          '2020-10-07'
        ),
      },
    },
    Notificaciones: {
      291: {
        Recibo: new Date (
          '2021-06-22'
        ),
        Resultado: true,
      },
      Certimail: true,
      Fisico   : true,
    },
    idProceso   : 128164881,
    llaveProceso: '11001400304220200053500',
  },
  {

    Carpeta: 530,
    Demanda: {
      Departamento             : 'CUNDINAMARCA',
      Municipio                : 'BOGOTA',
      Radicado                 : '2020-1021',
      EntregadeGarantiasAbogado: new Date (
        '2020-09-05'
      ),
      CapitalAdeudado: '$ 15.324.570',
      Juzgado        : {
        Origen: '50 PCYCM/ 68 CM',
      },
      Obligacion: {
        1: 65886140334,
        2: 4594260446916180,
      },
      Proceso: {
        Tipo: 'SINGULAR',
      },
      Ubicacion: {
        Juzgado: 'HMM PISO 15',
      },
    },
    Deudor: {
      Id       : 900520023,
      Nombre   : 'dimoin colombia s.a.s.',
      Direccion: 'AV BOYACA 63D - 26 OFICINA 103',
    },
    EtapaProcesal: {
      Etapa: 'NOTIFICACION',
    },
    idProceso   : 112628300,
    llaveProceso: '11001400306820200102100',
  },
  {

    Carpeta: 366,
    Demanda: {
      Municipio        : 'SOACHA',
      Departamento     : 'CUNDINAMARCA',
      VencimientoPagare: new Date (
        '2021-11-15'
      ),
      Radicado                 : '2018 - 00060',
      EntregadeGarantiasAbogado: new Date (
        '2017-11-14'
      ),
      CapitalAdeudado: '$ 56.987.693',
      Obligacion     : {
        1: 1680097436,
        2: 148653,
      },
      Proceso: {
        Tipo: 'HIPOTECARIO',
      },
      Ubicacion: {
        Juzgado: 'SOACHA',
      },
    },
    Deudor: {
      Id       : 79522009,
      Email    : 'jairopardo8-11-70@hotmail.com',
      Nombre   : 'jairo alfonso pardo jaimes',
      Direccion: 'DIAGONAL 28 No 33-27  TORRE 7 APART 203  SOACHA',
    },
    EtapaProcesal: {
      Etapa: 'EJECUCION',
    },
    idProceso   : 404,
    llaveProceso: '2575440030042018000600',
  },
  {

    Demanda: {
      Municipio   : 'FUSAGASUGA',
      Departamento: 'CUNDINAMARCA',
      Proceso     : {
        Tipo: 'SINGULAR',
      },
      Radicado : '2023 - 763',
      Ubicacion: {
        Juzgado: 'CIVIL MUNICIPAL',
      },
    },
    Deudor: {
      Nombre: 'pedro jonathan ramirez gomez',
    },
    idProceso   : 404,
    llaveProceso: '00000000000000000000000',
  },
];


function getUsers (): IntCarpeta[] {
  return carpetas;
}
console.log (
  getUsers ()
);



// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  'mongodb+srv://cachorro_cami:Tengo1amo@cluster0.ffbyjzl.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient (
  uri
);

async function run() {
  try {
    const database = client.db (
      'RyS'
    );

    const carpetasCollection = database.collection (
      'Demandados'
    );

    const result = await carpetasCollection.insertMany (
      carpetas,
      {
        ordered: true,
      }
    );
    console.log (
      `${ result.insertedCount } documents were inserted`
    );
  }
  finally {
    await client.close ();
  }
}

run ().then (
  (
    res
  ) => {
    console.log (
      res
    );
  }
).catch (
  (
    err
  ) => {
    console.log (
      err
    );
  }
);
fs.writeFile (
  'carpetas.json',
  JSON.stringify (
    carpetas
  )
);
