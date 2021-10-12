import { Router } from 'express'
import { routeAdapter } from '../../infra/adapters/express-route-adapter'
import { makeDeleteMusicController } from '../factories/deletes'

export default (router: Router): void => {
  router.post('/delete', routeAdapter(makeDeleteMusicController()))
}
