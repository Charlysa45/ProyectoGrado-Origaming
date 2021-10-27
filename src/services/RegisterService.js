import axios from 'axios'

const baseUrl = 'https://sheltered-depths-45281.herokuapp.com/api'

let defaultDescription = {
  description: "Inserta aquí la descripción",
  country:"inserte su pais",
  favGame:"inserte su juego favorito",
  rankGame:"inserte su rango en el juego"
}

let defaultAvatar = {
  avatar: "public/uploads/user.png"
}

let defaultBanner = {
  bannerImg: "public/uploads/banner.jpg"
}

const register = async (newUser) => {
  const { data } = await axios.post(`${baseUrl}/users`, newUser)
  return data
}

const newProfile = async ({token}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const request = axios.post(`${baseUrl}/profiles`, defaultDescription, config).catch(err => console.error(err))
  return request
}

const newAvatar = async ({token}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const request = axios.post(`${baseUrl}/avatars`, defaultAvatar, config).catch(err => console.error(err))
  return request
}

const newBanner = async ({token}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  axios.post(`${baseUrl}/banners`, defaultBanner, config).catch(err => console.error(err))
}

export default { register, newProfile, newAvatar, newBanner }