import { MySqlConnection } from '../../../infra/db/mysql/connection/conn'
import { UpdateSong } from '../../../infra/db/protocols/update-song'
import { ok, serverError } from '../../helpers/http-helpers'
import { Controller } from '../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../protocols/http'

export class UpdateMusicController implements Controller {
  private readonly repository: UpdateSong

  constructor (repository: UpdateSong) {
    this.repository = repository
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const conn = MySqlConnection
      const musicData = httpRequest.body
      this.repository.update(musicData)
      return ok('success')
    } catch (err) {
      return serverError(err)
    }
  }
}
