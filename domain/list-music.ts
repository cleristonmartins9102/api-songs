import { MusicModel } from '../src/dataprovider/mode/music/music'

export interface ListSongs {
  list (): Promise<MusicModel[]>
}
