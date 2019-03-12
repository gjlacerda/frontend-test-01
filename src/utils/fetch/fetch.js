export const fetchJSON = url =>
  fetch(url).then(response => response.json())

// TODO: verificar se existe mais de um parametro get, se nao vai dar pau
export const fetchYoutube = url =>
  fetchJSON(`${url}&key=AIzaSyBjcyoYwle3aMAwKBrRYeKycNEHf48Q0xM`)
