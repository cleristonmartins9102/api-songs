import { GetListSong } from '../../protocols/get-list-song'

export class GetListMusic implements GetListSong {
  private readonly connection: any

  constructor (connection: any) {
    this.connection = connection
  }

  async get (): Promise<any> {
    const promise = new Promise(resolve => this.connection.query('SELECT mus.id_music, mus.name, art.name artista from Music mus left join Artist art on art.id_artist=mus.id_artist ORDER BY RAND() LIMIT 10', function (error, results, fields) {
      if (error) throw error
      resolve(results)
    })
    )
    return promise
  }
}
