import { Router } from 'express'
import { routeAdapter } from '../../infra/adapters/express-route-adapter'
import { makeListByIdMusicController } from '../factories/list-by-id'

export default (router: Router): void => {
  router.post('/list/byid', routeAdapter(makeListByIdMusicController()))
}
