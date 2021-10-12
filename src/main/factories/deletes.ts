import { MySqlConnection } from '../../infra/db/mysql/connection/conn'
import { DeleteMusic } from '../../infra/db/mysql/repository/delete-music'
import { DeleteMusicController } from '../../presentation/controller/deletes/delete-controller'
import { Controller } from '../../presentation/protocols/controller'

export const makeDeleteMusicController = (): Controller => {
  const conn = MySqlConnection
  const repo = new DeleteMusic(conn)
  const controller = new DeleteMusicController(repo)
  return controller
}
