import { Filter, InsertOneOptions, ObjectId } from "mongodb";
import { db } from ".";

function convert({ _id, ...rest }: any) {
  return { id: _id.toString(), ...rest };
}

export async function insert<T extends { id: string }>(
  collectionName: string,
  { id, ...rest }: T,
  options: InsertOneOptions = {}
) {
  return db()
    .collection(collectionName)
    .insertOne({ _id: new ObjectId(id), ...rest }, options);
}

export async function find<T>(
  collectionName: string,
  filter: Filter<T>
): Promise<T[]> {
  const cursor = db().collection<T>(collectionName);
  return cursor
    .find(filter)
    .toArray()
    .then((v) => v.map(convert));
}

export async function findOne<T>(collectionName: string): Promise<T> {
  const t = db().collection<T>(collectionName);

  return t.findOne<T>();
}
