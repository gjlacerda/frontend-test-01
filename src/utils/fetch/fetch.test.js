import { objectToUrlParams, fetchJSON, fetchYoutube } from './fetch'
import { youtubeKey } from '../constants'

global.fetch = () =>
  new Promise((resolve) => {
    resolve({
      json: () => ({
        success: true,
      }),
    })
  })

describe('fetch', () => {
  describe('objectToUrlParams', () => {
    it('deve converter o objeto para a string esperada', () => {
      const result = objectToUrlParams({
        id: 1,
        name: 'gui',
      })
      expect(result).toEqual('?id=1&name=gui')
    })
  })

  describe('fetchJSON', () => {
    it('deve converter o resultado para um objeto ', async () => {
      const result = await fetchJSON('url')
      expect(result).toEqual({ success: true })
    })
  })

  describe('fetchYoutube', () => {
    it('deve conter a chave de autenticação na url', async () => {
      const spy = jest.spyOn(global, 'fetch')
      await fetchYoutube('url', {
        id: 1,
        name: 'gui',
      })
      expect(spy).toHaveBeenCalledWith(`url?id=1&name=gui&key=${youtubeKey}`)
    })
  })
})
