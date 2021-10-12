import { MusicModel } from '../../../dataprovider/mode/music/music'

export interface UpdateSong {
  update (musicData: MusicModel): void
}
