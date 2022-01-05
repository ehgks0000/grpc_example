import { find } from "../db/adapter";
import { Song } from "../proto/songs_pb";

export default async function (): Promise<Song[]> {
  const songs = await find<Song.AsObject>("songs", {});

  let results: Song[] = [];
  for (const s of songs) {
    const song = new Song();
    song.setId(s.id);
    song.setTitle(s.title);
    song.setArtist(s.artist);

    results.push(song);
  }

  return results;
}
