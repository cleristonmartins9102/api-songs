import { Router } from 'express'
import { routeAdapter } from '../../infra/adapters/express-route-adapter'
import { makeUpdateMusicController } from '../factories/updates'

export default (router: Router): void => {
  router.post('/update', routeAdapter(makeUpdateMusicController()))
}
