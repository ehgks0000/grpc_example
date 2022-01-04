import { Db, MongoClient } from "mongodb";
import { MONGODB_URL } from "../config";

let connection: MongoClient | undefined;
let dbConnection: Db | undefined;

export async function initialize() {
  if (!connection) {
    connection = await MongoClient.connect(MONGODB_URL, {
      ignoreUndefined: true,
    });
    dbConnection = connection.db(
      new URL(MONGODB_URL).pathname.replace(/^\//, "")
    );

    console.log("mongoDB is connected!");
  }
}

export function db(): Db {
  return dbConnection!;
}
