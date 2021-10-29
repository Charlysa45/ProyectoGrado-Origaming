import axios from 'axios'

const baseUrl = 'http://localhost:3001/api'

let defaultDescription = {
  description: "Inserta aquí la descripción",
  country:"inserte su pais",
  favGame:"inserte su juego favorito",
  rankGame:"inserte su rango en el juego"
}

let defaultAvatar = {
  avatar: "https://res.cloudinary.com/origaming-media/image/upload/v1635464791/user.png"
}

let defaultBanner = {
  bannerImg: "https://res.cloudinary.com/origaming-media/image/upload/v1635464924/banner.jpg"
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

// eslint-disable-next-line import/no-anonymous-default-export
export default { register, newProfile, newAvatar, newBanner }