import { IntCarpetaDemandado, intFecha } from "#@/interface/demandados";
import { intActuacion, intConsultaActuaciones } from "#@/interface/procesos";
import { sleep } from "../carpetas.Update";
import { MonCarpetaDemandado } from "#@/interface/demandados";

const Carpetas: MonCarpetaDemandado[] = [
  {
    _id: "64982e38a5c4bdf6f8dde791",
    Carpeta: 14,
    Demandado: {
      Id: 1077969975,
      Nombre: "YESID ALBEIRO RAMOS",
      Tel: {
        Celular: 3212337597,
      },
      Email: "yess_Id@hotmail.com",
      Direccion: "CARRERA 77B No. 68B - 19 BARRIO SANTA HELENITA",
    },
    llaveProceso: "11001400300320170088400",
    Category: "Bancolombia",
    idProceso: 50468620,
  },
  {
    _id: "64982e38a5c4bdf6f8dde792",
    Carpeta: 14,
    Demandado: {
      Id: 1077969975,
      Nombre: "YESID ALBEIRO RAMOS",
      Tel: {
        Celular: 3212337597,
      },
      Email: "yess_Id@hotmail.com",
      Direccion: "CARRERA 77B No. 68B - 19 BARRIO SANTA HELENITA",
    },
    llaveProceso: "11001400300320170088400",
    Category: "Bancolombia",
    idProceso: 113956611,
  },
  {
    _id: "64982e38a5c4bdf6f8dde793",
    Carpeta: 86,
    Demandado: {
      Id: 1032432802,
      Nombre: "LUIS ESNEIDER ORDUZ FARFAN",
      Tel: {
        Fijo: 4712921,
      },
      Email: "orduzcrit2@hotmail.com",
      Direccion: "CARRERA 95 # 138 - 58",
    },
    llaveProceso: "11001400303420170083600",
    Codeudor: {
      Id: 1015435620,
      Nombre: "JESICA PAOLA GUZMAN OSPINA",
    },
    Category: "Bancolombia",
    idProceso: 50521480,
  },
  {
    _id: "64982e38a5c4bdf6f8dde794",
    Carpeta: 86,
    Demandado: {
      Id: 1032432802,
      Nombre: "LUIS ESNEIDER ORDUZ FARFAN",
      Tel: {
        Fijo: 4712921,
      },
      Email: "orduzcrit2@hotmail.com",
      Direccion: "CARRERA 95 # 138 - 58",
    },
    llaveProceso: "11001400303420170083600",
    Codeudor: {
      Id: 1015435620,
      Nombre: "JESICA PAOLA GUZMAN OSPINA",
    },
    Category: "Bancolombia",
    idProceso: 81728891,
  },
  {
    _id: "64982e38a5c4bdf6f8dde795",
    Carpeta: 98,
    Demandado: {
      Id: 1070329396,
      Nombre: "ERIKA ALEJANDRA QUINTERO REYES",
      Tel: {
        Celular: 3114456631,
      },
      Direccion: "CALL 2 No. 8-40 EL COLEGIO",
    },
    llaveProceso: "25245408900120170023900",
    Category: "Bancolombia",
    idProceso: 0,
  },
  {
    _id: "64982e38a5c4bdf6f8dde796",
    Carpeta: 116,
    Demandado: {
      Id: 900212673,
      Nombre: "JENCELL E.U.",
      Tel: {
        Fijo: 5753416,
      },
      Direccion: "CARRERA 3 # 29A - 02",
    },
    llaveProceso: "25754418900320170075500",
    Codeudor: {
      Id: 52771090,
      Nombre: "YENY ESPERANZA ARIAS MENDIETA",
      Tel: {
        Fijo: 5753416,
      },
      Direccion: "CARRERA 3 # 29A - 02 LOCAL 1057",
    },
    Category: "Bancolombia",
    idProceso: 0,
  },
  {
    _id: "64982e38a5c4bdf6f8dde797",
    Carpeta: 170,
    Demandado: {
      Id: 52189873,
      Nombre: "DARNELLY HERNANDEZ MARTINEZ",
      Tel: {
        Fijo: 4530972,
        Celular: 3144189224,
      },
      Email: "darnelly-74@hotmail.com",
      Direccion: "CALLE 74G # 80 - 58 SUR",
    },
    llaveProceso: "11001400302520170090300",
    Category: "Bancolombia",
    idProceso: 112048180,
  },
  {
    _id: "64982e38a5c4bdf6f8dde798",
    Carpeta: 178,
    Demandado: {
      Id: 11185630,
      Nombre: "WILSON ALFONSO JIMENEZ MENDIETA",
      Tel: {
        Fijo: 5714329,
      },
      Email: "grupocomerciallasabana@hotmail.com",
      Direccion: "CARRERA 81C # 2B - 80 PISO 2",
    },
    llaveProceso: "11001400300120170100100",
    Category: "Bancolombia",
    idProceso: 50621670,
  },
  {
    _id: "64982e38a5c4bdf6f8dde799",
    Carpeta: 231,
    Demandado: {
      Id: 79853115,
      Nombre: "FANOR DIAZ AGUDELO",
      Tel: {
        Fijo: 8060271,
        Celular: 3212406193,
      },
      Email: "fanor.diaz@gmail.com",
      Direccion: "DIAGONAL 56 BIS 84 A 10 SUR TR 1",
    },
    llaveProceso: "11001400300820170113400",
    Category: "Bancolombia",
    idProceso: 50716620,
  },
  {
    _id: "64982e38a5c4bdf6f8dde79a",
    Carpeta: 274,
    Demandado: {
      Id: 35506033,
      Nombre: "LUZ DARY PUERTA JARAMILLO",
      Tel: {
        Fijo: 4357832,
        Celular: 3103430010,
      },
      Email: "natis-rolita@hotmail.con",
      Direccion: "CARRERA  101  No 71 B - 53",
    },
    llaveProceso: "11001400303720170139100",
    Codeudor: {
      Id: 4337296,
      Nombre: "JOSE NOEL PUERTA PUERTA",
      Tel: {
        Celular: 3103431255,
      },
      Direccion: "CARRERA  115 No 89 A - 31 INT 12 APART 202",
    },
    Category: "Bancolombia",
    idProceso: 112945420,
  },
  {
    _id: "64982e38a5c4bdf6f8dde79b",
    Carpeta: 278,
    Demandado: {
      Id: 19255260,
      Nombre: "MATIAS HUMBERTO AVILA AGUILAR",
      Tel: {
        Fijo: 4170527,
        Celular: 3125024008,
      },
      Email: "maifren_13@yahoo.es",
      Direccion: "CALLE 2 C No 62 - 20",
    },
    llaveProceso: "11001400301520170139400",
    Codeudor: {
      Id: "41759787  39710157",
      Nombre: "CARMELINA AGUILAR    ANA LUCIA AGUILAR",
      Tel: {
        Fijo: 3204613419,
        Celular: 3107627120,
      },
      Direccion: "DG 3B No. 0-78 ESTE",
    },
    Category: "Bancolombia",
    idProceso: 50777890,
  },
  {
    _id: "64982e38a5c4bdf6f8dde79c",
    Carpeta: 289,
    Demandado: {
      Id: 1032383389,
      Nombre: "ANDERSON REVELO SANTOS",
      Tel: {
        Fijo: 4725511,
        Celular: 3118526428,
      },
      Email: "ars.09@hotmail.com",
      Direccion: "CALLE 64 SUR  No 85 B - 40  APARTAMENTO  104",
    },
    llaveProceso: "11001400304820170097400",
    Category: "Bancolombia",
    idProceso: 50762570,
  },
  {
    _id: "64982e38a5c4bdf6f8dde79d",
    Carpeta: 306,
    Demandado: {
      Id: 79388145,
      Nombre: "LIBARDO ALFONSO GONZALEZ TRIVIÑO",
      Tel: {
        Fijo: 2928108,
      },
      Email: "li_bcar@hotmail.com",
      Direccion: "CARRERA 72 A- No 9 - 44",
    },
    llaveProceso: "11001400302120170153200",
    Category: "Bancolombia",
    idProceso: 50769660,
  },
  {
    _id: "64982e38a5c4bdf6f8dde79e",
    Carpeta: 306,
    Demandado: {
      Id: 79388145,
      Nombre: "LIBARDO ALFONSO GONZALEZ TRIVIÑO",
      Tel: {
        Fijo: 2928108,
      },
      Email: "li_bcar@hotmail.com",
      Direccion: "CARRERA 72 A- No 9 - 44",
    },
    llaveProceso: "11001400302120170153200",
    Category: "Bancolombia",
    idProceso: 81620291,
  },
  {
    _id: "64982e38a5c4bdf6f8dde79f",
    Carpeta: 312,
    Demandado: {
      Id: 8799171,
      Nombre: "MANUEL ENRIQUE ARTEAGA OROZCO",
      Tel: {
        Fijo: 5164071,
      },
      Email: "saliradelante2012@hotmail.com",
      Direccion: "CARRERA 18 B No 4 C -  20  SOACHA",
    },
    llaveProceso: "25754400300120170032300",
    Category: "Bancolombia",
    idProceso: 0,
  },
  {
    _id: "64982e38a5c4bdf6f8dde7a0",
    Carpeta: 401,
    Demandado: {
      Id: 79396995,
      Nombre: "ARTURO LINCE GOMEZ",
      Tel: {
        Fijo: 4244358,
        Celular: 31088445603,
      },
      Email: "arthurlingo64@hotmail.com",
      Direccion: "CALLE 12 A No 71 B - 60",
    },
    llaveProceso: "11001400302120180023600",
    Category: "Bancolombia",
    idProceso: 51029180,
  },
  {
    _id: "64982e38a5c4bdf6f8dde7a1",
    Carpeta: 405,
    Demandado: {
      Id: 900545720,
      Nombre: "CREAS SOLUCIONES S.A.S",
      Tel: {
        Fijo: 8626344,
        Celular: 3107982028,
      },
      Email: "andibarracosta@gmail.com",
      Direccion: "CARRERA 50 1# 47 - 50 INT 1 APTO 101",
    },
    llaveProceso: "11001400305620180022100",
    Codeudor: {
      Id: 12192291,
      Nombre: "ANDRES ENRIQUE IBARRA ACOSTA",
      Tel: {
        Fijo: 8626344,
      },
      Direccion: "CALLE 56 # 17 - 03 CASA 65 NEIVA",
    },
    Category: "Bancolombia",
    idProceso: 51042800,
  },
  {
    _id: "64982e38a5c4bdf6f8dde7a2",
    Carpeta: 461,
    Demandado: {
      Id: 52883958,
      Nombre: "LEIDY YANETH VIDAL RODRIGUEZ",
      Tel: {
        Fijo: 7114516,
      },
      Email: "leidyyaneth.lyv@gmail.com",
      Direccion: "DIAGONAL 2 No 21 B-20",
    },
    llaveProceso: "11001418901420190065600",
    Category: "Bancolombia",
    idProceso: 51816100,
  },
  {
    _id: "64982e38a5c4bdf6f8dde7a3",
    Carpeta: 461,
    Demandado: {
      Id: 52883958,
      Nombre: "LEIDY YANETH VIDAL RODRIGUEZ",
      Tel: {
        Fijo: 7114516,
      },
      Email: "leidyyaneth.lyv@gmail.com",
      Direccion: "DIAGONAL 2 No 21 B-20",
    },
    llaveProceso: "11001418901420190065600",
    Category: "Bancolombia",
    idProceso: 135801811,
  },
  {
    _id: "64982e38a5c4bdf6f8dde7a4",
    Carpeta: 489,
    Demandado: {
      Id: 51987570,
      Nombre: "SANDRA PATRICIA PACHECO RAMIREZ",
      Tel: {
        Fijo: 8121692,
      },
      Email: "sandrabogota2007@yahoo.com",
      Direccion:
        "CALLE 163 B No 50-80  INTERIOR 10 APT 231 CONJUNTO LA ESTANCIA III",
    },
    llaveProceso: "11001418900820180078500",
    Category: "Bancolombia",
    idProceso: 87350810,
  },
  {
    _id: "64982e38a5c4bdf6f8dde7a5",
    Carpeta: 494,
    Demandado: {
      Id: 13222728,
      Nombre: "MODESTO PINEDA PEREZ",
      Tel: {
        Fijo: 8852490,
      },
      Email: "mopadinco@yahoo.com",
      Direccion: "CARRERA 6 No 6-59",
    },
    llaveProceso: "25175408900320180060200",
    Category: "Bancolombia",
    idProceso: 0,
  },
  {
    _id: "64982e38a5c4bdf6f8dde7a6",
    Carpeta: 497,
    Demandado: {
      Id: 3208569,
      Nombre: "FLORESMIRO APONTE ACOSTA",
      Tel: {
        Fijo: 3208569,
      },
      Email: "dcentro@pcpplasticos.com",
      Direccion: "DIAGONAL 77B No 119 A-74 APTO 504 INT6",
    },
    llaveProceso: "11001418901320190070800",
    Codeudor: {
      Id: 51955296,
      Nombre: "FLOR ANGELA RODRIGUEZ",
      Tel: {
        Fijo: 2286617,
      },
      Direccion: "DIAGONAL 77B No 119 A-74 APTO 504 INT6",
    },
    Category: "Bancolombia",
    idProceso: 0,
  },
  {
    _id: "64982e38a5c4bdf6f8dde7a7",
    Carpeta: 506,
    Demandado: {
      Id: 11230400,
      Nombre: "JOSE ALFONSO VASQUEZ TOVAR",
      Tel: {
        Celular: 3123703828,
      },
      Email: "joalvato09@hotmail.com",
      Direccion: "CALLE 2 A No 5-22 APTO 503",
    },
    llaveProceso: "25377408900120180037100",
    Category: "Bancolombia",
    idProceso: 0,
  },
  {
    _id: "64982e38a5c4bdf6f8dde7a8",
    Carpeta: 529,
    Demandado: {
      Id: 51813018,
      Nombre: "SANDRA LEONOR PAEZ MURCIA",
      Tel: {
        Fijo: 6139147,
        Celular: 3134386087,
      },
      Email: "yadelcis@hotmail.com",
      Direccion: "KR 81 No. 127 A - 46 CONJUNTO MONTE AZUL BOGOTA",
    },
    llaveProceso: "11001400304220200053500",
    Codeudor: {
      Id: 19299851,
      Nombre: "MARCO TULIO SANCHEZ MEDINA",
      Tel: {
        Fijo: 6139147,
      },
      Direccion: "KR 81 No. 127 - 46 Torre 1 Apt 401",
    },
    Category: "Bancolombia",
    idProceso: 128164881,
  },
  {
    _id: "64982e38a5c4bdf6f8dde7a9",
    Carpeta: 530,
    Demandado: {
      Id: 900520023,
      Nombre: "DIMOIN COLOMBIA S.A.S.",
      Tel: {
        Fijo: 6708086,
      },
      Direccion: "AV BOYACA 63D - 26 OFICINA 103",
    },
    llaveProceso: "11001400306820200102100",
    Category: "Bancolombia",
    idProceso: 112628300,
  },
  {
    _id: "64982e38a5c4bdf6f8dde7aa",
    Carpeta: 366,
    Demandado: {
      Id: 79522009,
      Nombre: "JAIRO ALFONSO PARDO JAIMES",
      Tel: {
        Fijo: 7808590,
      },
      Email: "jairopardo8-11-70@hotmail.com",
      Direccion: "DIAGONAL 28 No 33-27  TORRE 7 APART 203  SOACHA",
    },
    llaveProceso: "2575440030042018000600",
    Category: "Bancolombia",
    idProceso: 0,
  },
];

const Acts = new Map();

export async function fetchActuacionesByidProceso(idProceso: number) {
  const request = await fetch(
    `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${idProceso}`
  );
  if (!request.ok) {
    throw new Error("fetch failed @ fetchActuacionesByidProceso");
  }

  const response = (await request.json()) as intConsultaActuaciones;
  if (response.actuaciones.length === 0) {
    throw new Error("actuaciones length = zero");
  }

  const actuaciones = response.actuaciones;
  Acts.set(idProceso, actuaciones);
  console.log(Acts);
  return actuaciones;
}

const fechas = [];

export async function carpetaBuild({
  carpeta,
  index,
}: {
  carpeta: IntCarpetaDemandado;
  index: number;
}) {
  const actuaciones = new Map();
  if (carpeta.idProceso) {
    const { idProceso } = carpeta;
    for (const x of idProceso) {
      const request = await fetchActuacionesByidProceso(x);
      actuaciones.set(x, request);
    }
  }
  console.log(actuaciones);
  return actuaciones;
}

Carpetas.forEach((carpeta, index, arr) => {
  setTimeout(
    carpetaBuild({
      carpeta: carpeta,
      index: index,
    }),
    index * 1000,
    carpeta
  );
});

const first_promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved First after 1 second");
  }, 1000);
});

const second_promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved First after 2 seconds");
  }, 2000);
});

const third_promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved First after 3 seconds");
  }, 3000);
});

try {
  const result = Promise.all([first_promise, second_promise, third_promise]);
  result.then((data) => console.log(data));
} catch (error) {
  console.log(error);
}

// This code is contributed by Aman Singla...
