import { Router } from 'express'
import { routeAdapter } from '../../infra/adapters/express-route-adapter'
import { makeListController } from '../factories/list'

export default (router: Router): void => {
  router.post('/list', routeAdapter(makeListController()))
}
