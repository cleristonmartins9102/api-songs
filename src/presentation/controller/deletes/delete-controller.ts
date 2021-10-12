import { DeleteSong } from '../../../infra/db/protocols/delete-song'
import { GetSongById } from '../../../infra/db/protocols/get-song-by-id'
import { UpdateSong } from '../../../infra/db/protocols/update-song'
import { ok, serverError } from '../../helpers/http-helpers'
import { Controller } from '../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../protocols/http'

export class DeleteMusicController implements Controller {
  private readonly repository: DeleteSong

  constructor (repository: DeleteSong) {
    this.repository = repository
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id_music } = httpRequest.body
      this.repository.delete(id_music)
      return ok('success')
    } catch (err) {
      return serverError(err)
    }
  }
}
