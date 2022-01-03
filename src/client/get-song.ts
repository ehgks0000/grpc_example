import { Song } from "../proto/songs_pb";
import client from ".";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";

function getSong() {
  return new Promise<Song>((resolve, reject) => {
    client.getSong(new Empty(), (err, song) => {
      if (err) {
        return reject(err);
      }
      console.log("client Song", song);
      return resolve(song);
    });
  });
}

getSong();
