import * as types from './types'

export const requestTrailers = () => ({
  type: types.REQUEST_TRAILERS,
})

export const receiveTrailers = payload => ({
  type: types.RECEIVE_TRAILERS,
  payload,
})
