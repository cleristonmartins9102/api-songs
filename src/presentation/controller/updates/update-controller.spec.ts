import { MySqlConnection } from '../../../infra/db/mysql/connection/conn'
import { GetMusicById } from '../../../infra/db/mysql/repository/get-music-by-id'
import { GetSongById } from '../../../infra/db/protocols/get-song-by-id'
import { ListMusicById } from '../list-by-id/list-music-by-id-controller'

type SutTypes = {
  sut: ListMusicById
}

const makeMysqlConnection = MySqlConnection

const makeGetListMusic = (): GetSongById => {
  return new GetMusicById(makeMysqlConnection)
}

const makeSut = (): SutTypes => {
  const sut = new ListMusicById(makeGetListMusic())
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
