import { GetSongById } from '../../../infra/db/protocols/get-song-by-id'
import { ok, serverError } from '../../helpers/http-helpers'
import { Controller } from '../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../protocols/http'

export class ListByIdMusicController implements Controller {
  private readonly repository: GetSongById

  constructor (repository: GetSongById) {
    this.repository = repository
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id_music } = httpRequest.body
      const list = await this.repository.get(id_music)
      return ok(list)
    } catch (err) {
      return serverError(err)
    }
  }
}
