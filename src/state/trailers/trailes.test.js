import reducer from './reducers'
import { requestTrailers, receiveTrailers } from './actions'

describe('trailers state', () => {
  it('deve retornar o estado inicial se a action não existir', () => {
    const initialState = {
      name: 'teste',
    }
    const result = reducer(initialState, { type: 'teste' })
    expect(result).toEqual({
      name: 'teste',
    })
  })

  describe('requestTrailers', () => {
    it('deve mudar a flag <loading> para (true)', () => {
      const result = reducer(undefined, requestTrailers())
      expect(result.loading).toEqual(true)
    })

    it('deve mudar a flag <loading> para (true) se já existir uma lista anterior', () => {
      const initialState = {
        list: [1, 2, 3],
      }
      const result = reducer(initialState, requestTrailers())
      expect(result).toEqual({
        loading: true,
        list: [1, 2, 3],
      })
    })
  })

  describe('receiveTrailers', () => {
    it('deve mudar a flag <loading> para (false) e armazenar os itens da lista', () => {
      const action = {
        ...receiveTrailers(),
        payload: {
          items: [1, 2, 3, 4, 5],
          nextPageToken: 'teste',
          pageInfo: {
            totalResults: 5,
          },
        },
      }
      const result = reducer(undefined, action)
      expect(result).toEqual({
        loading: false,
        list: [1, 2, 3, 4, 5],
        nextPageToken: 'teste',
        totalResults: 5,
      })
    })

    it('deve concatenar os itens da nova lista se já existir uma lista', () => {
      const initialState = {
        loading: false,
        list: [1, 2, 3, 4, 5],
      }
      const action = {
        ...receiveTrailers(),
        payload: {
          items: [6, 7, 8, 9, 10],
          nextPageToken: 'teste',
          pageInfo: {
            totalResults: 5,
          },
        },
      }
      const result = reducer(initialState, action)
      expect(result).toEqual({
        loading: false,
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        nextPageToken: 'teste',
        totalResults: 5,
      })
    })
  })
})
