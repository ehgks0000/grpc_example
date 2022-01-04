import { db } from "./db";
import { Song } from "./proto/songs_pb";

// type MongoSong = {
//   _id: string;
//   title: string;
//   artist: string;
// };

export default async function (): Promise<Song> {
  const song = new Song();

  const songs = db().collection<Song.AsObject>("songs");
  const s = await songs.findOne({ title: "test" });

  song.setId(1);
  song.setTitle(s.title);
  song.setArtist(s.artist);

  return song;
}
