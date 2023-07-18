import { MongoClient } from "mongodb";
import * as fs from "fs/promises";
import { IntCarpeta } from "../../out/types/index";

// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://cachorro_cami:Tengo1amo@cluster0.ffbyjzl.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

const Collection = async () => {
  const db = client.db("RyS");

  const carpetas = db.collection<IntCarpeta>("Demandados");
  return carpetas;
};

const Transform = async () => {
  const carpetasMap = new Map();

  const collection = await Collection();

  const carpetasRaw = await collection.find({}).toArray();

  carpetasRaw.forEach((carpeta, index, arr) => {
    const carpetaToMongo = {
      ...carpeta,
      _id: carpeta._id.toString(),
    };

    console.log(carpeta._id.toString());
    return carpetasMap.set(carpeta._id.toHexString(), carpetaToMongo);
  });
  console.log(carpetasMap);
  return carpetasMap;
};

const tr = Transform()
  .then((res) => {
    fs.writeFile("mongoQuery.json", JSON.stringify(res));
    fs.writeFile(
      "mongoQueryParse.ts",
      `const carpetas = ${JSON.stringify(res)}`
    );
    return res;
  })
  .catch((err: { message: string }) => {
    console.log(err);
    return err.message;
  });

console.log(
  tr.then((res) => {
    return res;
  })
);
