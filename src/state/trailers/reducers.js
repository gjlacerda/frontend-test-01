import * as types from './types'

const INITAL_STATE = {
  loading: true,
  list: [],
}

const requestTrailers = state => ({
  ...state,
  loading: true,
})

const receiveTrailers = (state, action) => ({
  ...state,
  loading: false,
  nextPageToken: action.payload.nextPageToken,
  totalResults: action.payload.pageInfo.totalResults,
  list: [
    ...state.list,
    ...action.payload.items,
  ],
})

const trailersReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case types.REQUEST_TRAILERS:
      return requestTrailers(state)
    case types.RECEIVE_TRAILERS:
      return receiveTrailers(state, action)
    default:
      return state
  }
}

export default trailersReducer
