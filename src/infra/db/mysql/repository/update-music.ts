import { MusicModel } from '../../../../dataprovider/mode/music/music'
import { UpdateSong } from '../../protocols/update-song'

export class UpdateMusic implements UpdateSong {
  private readonly connection: any

  constructor (connection: any) {
    this.connection = connection
  }

  update (musicData: MusicModel): void {
    const { id_music, name, id_artist } = musicData
    const sql = `UPDATE Music set name='${name}', id_artist=${id_artist} where id_music=${id_music}`
    this.connection.query(sql, function (error, results, fields) {
      if (error) throw error
    })
  }
}
