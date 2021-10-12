import { MySqlConnection } from '../../infra/db/mysql/connection/conn'
import { DeleteMusic } from '../../infra/db/mysql/repository/delete-music'
import { GetMusicById } from '../../infra/db/mysql/repository/get-music-by-id'
import { DeleteMusicController } from '../../presentation/controller/deletes/delete-controller'
import { ListByIdMusicController } from '../../presentation/controller/list-by-id/list-music-by-id-controller'
import { Controller } from '../../presentation/protocols/controller'

export const makeListByIdMusicController = (): Controller => {
  const conn = MySqlConnection
  const repo = new GetMusicById(conn)
  const controller = new ListByIdMusicController(repo)
  return controller
}
