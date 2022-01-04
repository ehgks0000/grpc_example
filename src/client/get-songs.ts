import { Song } from "../proto/songs_pb";
import client from ".";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";

function getSongs() {
  return new Promise<Song>((resolve, reject) => {
    const stream = client.getSongs(new Empty());

    stream.on("data", (song: Song) => {
      console.log(`${song.getId()} + ${song.getTitle()} + ${song.getArtist()}`);
    });

    stream.on("end", resolve);
    stream.on("error", reject);
  });
}

getSongs();
