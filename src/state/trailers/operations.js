import { fetchYoutube } from 'utils/fetch/fetch'
import * as actions from './actions'

const requestTrailers = (pageToken = '') =>
  async (dispatch) => {
    dispatch(actions.requestTrailers())

    const response = await fetchYoutube('https://www.googleapis.com/youtube/v3/playlistItems', {
      part: 'snippet',
      maxResults: 6,
      playlistId: 'PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF',
      pageToken,
    })

    dispatch(actions.receiveTrailers(response))
  }

export default {
  requestTrailers,
}
