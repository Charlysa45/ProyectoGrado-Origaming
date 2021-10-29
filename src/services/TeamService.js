import axios from "axios"

const baseUrl = 'http://localhost:3001/api'

let defaultAvatar = {
    teamAvatar: "https://res.cloudinary.com/origaming-media/image/upload/v1635464791/user.png"
     }
  
let defaultBanner = {
    teamBannerImg: "https://res.cloudinary.com/origaming-media/image/upload/v1635464924/banner.jpg"
    }

const getTeams = async () => {
    const request = axios
    return request
    .get(`${baseUrl}/teams`)
    .then(response => response.data)
  }

const makeTeam = async ({token}, newTeam) => {
    const config = {
        headers: {
        Authorization: `Bearer ${token}`
        }
    }
    const request = axios.post(`${baseUrl}/teams`, newTeam, config)
    return request.then(response => response.data).catch(err => console.error(err))
}

const newTeamAvatar = async({token}, teamId) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const request = axios.post(`${baseUrl}/teamAvatars`, {...defaultAvatar, teamId}, config)
    return request.then(res => res.data).catch(err => console.log(err))
}

const newTeamBanner = async({token}, teamId) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const request = axios.post(`${baseUrl}/teamBanners`, {...defaultBanner, teamId}, config)
    return request.then(res => res.data).catch(err => console.log(err))
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {getTeams, makeTeam, newTeamAvatar, newTeamBanner}  