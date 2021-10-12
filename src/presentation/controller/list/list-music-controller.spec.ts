import { MySqlConnection } from '../../../infra/db/mysql/connection/conn'
import { GetListMusic } from '../../../infra/db/mysql/repository/get-list-music'
import { GetListSong } from '../../../infra/db/protocols/get-list-song'
import { ListMusic } from './list-music-controller'

type SutTypes = {
  sut: ListMusic
}

const makeMysqlConnection = MySqlConnection

const makeGetListMusic = (): GetListSong => {
  return new GetListMusic(makeMysqlConnection)
}

const makeSut = (): SutTypes => {
  const sut = new ListMusic(makeGetListMusic())
  return {
    sut
  }
}

describe('Get Music', () => {
  test('ensure get music return correct value on success', async () => {
    const { sut } = makeSut()
    console.log(await sut.handle({}))
  })
})
