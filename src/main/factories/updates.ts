import { MySqlConnection } from '../../infra/db/mysql/connection/conn'
import { UpdateMusic } from '../../infra/db/mysql/repository/update-music'
import { UpdateMusicController } from '../../presentation/controller/updates/update-controller'
import { Controller } from '../../presentation/protocols/controller'

export const makeUpdateMusicController = (): Controller => {
  const conn = MySqlConnection
  const repo = new UpdateMusic(conn)
  const controller = new UpdateMusicController(repo)
  return controller
}
