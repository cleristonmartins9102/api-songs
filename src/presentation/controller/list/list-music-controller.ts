import { MySqlConnection } from '../../../infra/db/mysql/connection/conn'
import { GetListSong } from '../../../infra/db/protocols/get-list-song'
import { ok, serverError } from '../../helpers/http-helpers'
import { Controller } from '../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../protocols/http'

export class ListMusic implements Controller {
  private readonly repository: GetListSong

  constructor (repository: GetListSong) {
    this.repository = repository
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const list = await this.repository.get()
      return ok(list)
    } catch (err) {
      return serverError(err)
    }
  }
}
