import axios from 'axios'
import FormData from 'form-data'

const baseUrl = 'http://localhost:3001/api'

const getProfile = async () => {
  const request = axios
  return request
  .get(`${baseUrl}/users`)
  .then(response => response.data)
}

const update = async (id, newObject) => {
  // console.log(id, newObject)
  const request = axios.put(`${baseUrl}/profiles/${id}`, newObject)

  return request.then(response => response.data).catch(err => console.error(err))
}

const updateAvatar = async (id, avatarImg) => {
  let data = new FormData();
  data.append('avatar', avatarImg, avatarImg.name)

  const request = axios.put(`${baseUrl}/avatars/${id}`, data, {
    'Content-Type': "multipart/form-data"
  })
  return request.then(response => response.data)
}

const updateBannerImg = async (id, bannerImg) => {
  let data = new FormData();
  data.append('bannerImg', bannerImg, bannerImg.name)

  const request = axios.put(`${baseUrl}/banners/${id}`, data, {
    'Content-Type': "multipart/form-data"
  })
  return request.then(response => response.data)
}

export default {getProfile, update, updateAvatar, updateBannerImg}
