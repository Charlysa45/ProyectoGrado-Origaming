import axios from "axios"

const baseUrl = 'https://sheltered-depths-45281.herokuapp.com/api'

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

const getMembers = async (TeamId) => {
    const request = axios
    return request
    .get(`${baseUrl}/teams/${TeamId}`)
    .then(response => response.data)
}  

const newMember = async(TeamId, memberId) => {
    console.log(TeamId, memberId);
    const request = axios.put(`${baseUrl}/teams/${TeamId}/follow`, {memberId})
    return request.then(res => res.data).catch(err => console.error(err))
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
    return request.then(res => res.data).catch(err => console.error(err))
}

const newTeamBanner = async({token}, teamId) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const request = axios.post(`${baseUrl}/teamBanners`, {...defaultBanner, teamId}, config)
    return request.then(res => res.data).catch(err => console.error(err))
}

const updateTeam = async (id, newObject) => {
    const request = axios.put(`${baseUrl}/teams/${id}`, newObject)
  
    return request.then(response => response.data).catch(err => console.error(err))
  }

const updateAvatar = async (id, avatarImg) => {
    let data = new FormData();
    data.append('teamAvatar', avatarImg, avatarImg.name)
  
    const request = axios.put(`${baseUrl}/teamAvatars/${id}`, data, {
      'Content-Type': "multipart/form-data"
    })
    return request.then(response => response.data)
  }
  
  const updateBannerImg = async (id, bannerImg) => {
    let data = new FormData();
    data.append('teamBannerImg', bannerImg, bannerImg.name)
  
    const request = axios.put(`${baseUrl}/teamBanners/${id}`, data, {
      'Content-Type': "multipart/form-data"
    })
    return request.then(response => response.data)
  }

// eslint-disable-next-line import/no-anonymous-default-export
export default {getTeams, getMembers, newMember, makeTeam, newTeamAvatar, newTeamBanner, updateTeam, updateAvatar, updateBannerImg}  