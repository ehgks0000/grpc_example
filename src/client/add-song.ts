import { Song } from "../proto/songs_pb";
import client from ".";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";

function addSongs(): (song: Song | null) => void {
  const stream = client.addSongs((err, res: Empty) => {
    if (err) {
      throw err;
    }
    // _.noop(res);
    return undefined;
  });
  return (song: Song | null): void => {
    if (song == null) {
      stream.end();
      return;
    }
    console.log("클라에서 add song 중");
    stream.write(song);
  };
}

function inputSong(): Song {
  const answers = {
    title: "test4",
    artist: "Choi",
  };

  const song = new Song();
  song.setTitle(answers.title);
  song.setArtist(answers.artist);
  return song;
}
const addSong = addSongs();

addSong(inputSong());
addSong(null);
