import request from 'supertest'
import app from '../config/app'

describe('Music', () => {
  test('Should return a music on success', async () => {
    await request(app)
      .post('list')
      .send()
      .expect(200)
  })
})
