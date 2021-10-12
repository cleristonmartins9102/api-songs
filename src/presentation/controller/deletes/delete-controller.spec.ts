import { MySqlConnection } from '../../../infra/db/mysql/connection/conn'
import { DeleteMusic } from '../../../infra/db/mysql/repository/delete-music'
import { DeleteSong } from '../../../infra/db/protocols/delete-song'
import { DeleteMusicController } from './delete-controller'

type SutTypes = {
  sut: DeleteMusicController
}

const makeMysqlConnection = MySqlConnection

const makeDeleteSong = (): DeleteSong => {
  return new DeleteMusic(makeMysqlConnection)
}

const makeSut = (): SutTypes => {
  const sut = new DeleteMusicController(makeDeleteSong())
  return {
    sut
  }
}

describe('Get Music', () => {
  test('ensure get music return correct value on success', async () => {
    const { sut } = makeSut()
    console.log(await sut.handle({
      body: {
        id_music: 14
      }
    }))
  })
})
