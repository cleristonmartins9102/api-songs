import { MySqlConnection } from '../connection/conn'
import { GetMusicById } from './get-music-by-id'

const makeMysqlConnection = MySqlConnection

type SutTypes = {
  sut: GetMusicById
}

const makeSut = (): SutTypes => {
  const sut = new GetMusicById(makeMysqlConnection)
  return {
    sut
  }
}

describe('Get Music', () => {
  test('ensure get music return correct value on success', async () => {
    const { sut } = makeSut()
    console.log(await sut.get(1))
  })
})
