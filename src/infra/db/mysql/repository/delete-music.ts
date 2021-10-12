import { DeleteSong } from '../../protocols/delete-song'

export class DeleteMusic implements DeleteSong {
  private readonly connection: any

  constructor (connection: any) {
    this.connection = connection
  }

  delete (id: number): void {
    const sql = `DELETE from Music where id_music=${id}`
    this.connection.query(sql, function (error, results, fields) {
      if (error) throw error
    })
  }
}
