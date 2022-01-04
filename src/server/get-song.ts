import { findOne } from "../db/adapter";
import { Song } from "../proto/songs_pb";

export default async function (): Promise<Song> {
  const song = new Song();

  const s = await findOne<Song.AsObject>("songs");

  song.setId(s.id);
  song.setTitle(s.title);
  song.setArtist(s.artist);

  return song;
}
