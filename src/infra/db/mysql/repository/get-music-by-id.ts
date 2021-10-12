import { GetSongById } from '../../protocols/get-song-by-id'

export class GetMusicById implements GetSongById {
  private readonly connection: any

  constructor (connection: any) {
    this.connection = connection
  }

  async get (id: number): Promise<any> {
    const promise = new Promise(resolve => this.connection.query(`SELECT mus.id_music, mus.name, art.name artista from Music mus left join Artist art on art.id_artist=mus.id_artist where mus.id_music=${id}`, function (error, results, fields) {
      if (error) throw error
      resolve(results[0])
    })
    )
    return promise
  }
}
