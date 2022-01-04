import * as grpc from "@grpc/grpc-js";
import { SongsService } from "./proto/songs_grpc_pb";
import { initialize } from "./db";
import { SongsServer } from "./server";

const PORT = process.env.PORT || "3000";

async function serve() {
  await initialize();

  const server = new grpc.Server();
  // @ts-ignore
  server.addService(SongsService, new SongsServer());
  server.bindAsync(
    `localhost:${PORT}`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        throw err;
      }
      console.log(`Listening on ${port}`);
      server.start();
    }
  );
}

serve();
