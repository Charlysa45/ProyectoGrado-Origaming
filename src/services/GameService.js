import axios from "axios"

const baseUrl = 'https://sheltered-depths-45281.herokuapp.com/api'

const getGame = async () => {
    const request = axios
    return request
    .get(`${baseUrl}/games`)
    .then(response => response.data)
  }

const getMatches = async (GameId) => {
  const request = axios
  return request
  .get(`${baseUrl}/games/${GameId}`)
  .then(response => response.data)
}

const getGlobalMatches = async () => {
  const request = axios
  return request
  .get(`${baseUrl}/matches`)
  .then(response => response.data)
}

const getSingleMatch = async (MatchId) => {
  const request = axios
  return request
  .get(`${baseUrl}/matches/${MatchId}`)
  .then(response => response.data)
}

const getAvatar = async (AvatarId) => {
  const request = axios
  return request
  .get(`${baseUrl}/avatars/${AvatarId}`)
  .then(response => response.data)
}

const makeGame = async ({token},newGame) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const request = axios.post(`${baseUrl}/matches`, newGame, config)

  return request.then(response => response.data).catch(err => console.error(err))
}

export default {getGame, getMatches, getGlobalMatches, getSingleMatch, getAvatar, makeGame}  