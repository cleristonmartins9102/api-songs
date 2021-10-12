import { MySqlConnection } from '../connection/conn'
import { GetListMusic } from './get-list-music'

const makeMysqlConnection = MySqlConnection

type SutTypes = {
  sut: GetListMusic
}

const makeSut = (): SutTypes => {
  const sut = new GetListMusic(makeMysqlConnection)
  return {
    sut
  }
}

describe('Get Music', () => {
  test('ensure get music return correct value on success', async () => {
    const { sut } = makeSut()
    console.log(await sut.get())
  })
})
