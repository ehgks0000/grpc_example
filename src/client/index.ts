import * as grpc from "@grpc/grpc-js";
import { SongsClient } from "../proto/songs_grpc_pb";

const PORT = process.env.PORT || "3333";
export default new SongsClient(
  `localhost:${PORT}`,
  grpc.credentials.createInsecure()
);
