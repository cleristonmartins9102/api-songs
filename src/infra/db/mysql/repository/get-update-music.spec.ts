import { MusicModel } from '../../../../dataprovider/mode/music/music'
import { MySqlConnection } from '../connection/conn'
import { UpdateMusic } from './update-music'

const makeMysqlConnection = MySqlConnection

type SutTypes = {
  sut: UpdateMusic
}

const makeSut = (): SutTypes => {
  const sut = new UpdateMusic(makeMysqlConnection)
  return {
    sut
  }
}

describe('Get Music', () => {
  test('ensure get music return correct value on success', async () => {
    const { sut } = makeSut()
    const musicData: MusicModel = {
      id_music: 3,
      name: 'any_music',
      id_artist: 1
    }
    console.log(await sut.update(musicData))
  })
})
