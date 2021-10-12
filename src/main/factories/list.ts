import { MySqlConnection } from '../../infra/db/mysql/connection/conn'
import { GetListMusic } from '../../infra/db/mysql/repository/get-list-music'
import { ListMusic } from '../../presentation/controller/list/list-music-controller'
import { Controller } from '../../presentation/protocols/controller'

export const makeListController = (): Controller => {
  const conn = MySqlConnection
  const repo = new GetListMusic(conn)
  const controller = new ListMusic(repo)
  return controller
}
