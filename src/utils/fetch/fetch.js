import { youtubeKey } from '../constants'

export const objectToUrlParams = params =>
  `?${Object.keys(params).map(key =>
    `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`).join('&')}`

export const fetchJSON = url =>
  fetch(url).then(response => response.json())

export const fetchYoutube = (url, params) => {
  const finalUrl = url + objectToUrlParams({
    ...params,
    key: youtubeKey,
  })
  return fetchJSON(finalUrl)
}
