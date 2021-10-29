import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineEdit, AiOutlinePlus } from 'react-icons/ai'
import { GoDeviceCamera } from 'react-icons/go'
import { useParams } from 'react-router'
import AvatarContext from '../components/context/AvatarContext'
import { useTeams } from '../components/hooks/useTeams'
import Imagenes from '../components/Imagenes'
import UserMatchCard from '../components/UserMatchCard'
import TeamService from '../services/TeamService'

const TeamPage = () => {
    const {updateAvatar, avatarPrev, processAvatarImage, avatarEdit, cancelUpdateAvatar} = useContext(AvatarContext)

    const [userActive, setUserActive] = useState(null)

    
    useEffect(() => {
        let userData = window.localStorage.getItem('loggedUserOnApp')
    
        if(userData){
            const {username} = JSON.parse(userData)
            setUserActive(username)
        }
    }, [])

    const {teams} = useTeams()
    const {TeamName} = useParams()
    
    const [teamProfile, setTeamProfile] = useState(null)
    
    
    const [edit, setEdit] = useState(false)
    const [bannerEdit, setBannerEdit] = useState(false)
    
    // const [avatar, setAvatar] = useState(null)
    const [bannerImg, setBannerImg] = useState(null)
    const [description, setDescription] = useState('')
    const [country, setCountry] = useState('')
    const [favGame, setFavGame] = useState('')

    useEffect(() => {
        if (teams) {
            const teamProfile = teams.find(res => res.teamName === TeamName)
            console.log(teamProfile)
           setTeamProfile(teamProfile)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [teams])

    const handleEdit = () => {
        setEdit(!edit)
    }

    const cancelEdit = () => {
        setDescription('')
        setCountry('')
        setFavGame('')
        setEdit(!edit)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }
    const handleCountry = (e) => {
        setCountry(e.target.value)
    }
    const handlefavGame = (e) => {
        setFavGame(e.target.value)
    }

    const NewPf = () => {
        if(description && country && favGame){
            let newPf ={
                description: description,
                country: country,
                favGame: favGame
            }
            return {newPf}
        }else if (description && favGame) {
            let newPf ={
                description: description,
                favGame: favGame
            }
            return {newPf}
        }else if (country && favGame){
            let newPf ={
                country: country,
                favGame: favGame
            }
            return {newPf}
        }else if (description && country){
            let newPf ={
                description: description,
                country: country
               
            }
            return {newPf}
        }else if (!country && !favGame) {
            let newPf ={
                description: description
            }
            return {newPf}
        }else if (!description && !country){
            let newPf ={
                favGame: favGame   
            }
            return {newPf}
        }else if(!description && !favGame){
            let newPf ={
                country: country 
            }
            return {newPf}
        }
    }

    const updateProfile = async (e) => {
        const userId = teamProfile.profile.map(res => res.id)
        await TeamService.update(
            userId,
            NewPf().newPf
        ).then(res => handleEdit())
        .catch(error =>(console.error(error)))
    }


    const updateBannerImg = async (e) => {
        const bannerId = teamProfile.bannerImg.map(res => res.id)
        console.log(bannerId)
        await TeamService.updateBannerImg(
            bannerId,
            bannerImg
        ).then(res => {
            setBannerImg(res)
            setBannerEdit(!bannerEdit)
        })
        .catch(error =>(console.error(error)))
    }

    const [bannerPrev, setBannerPrev] = useState(null)

    function processBannerImage(event){
        setBannerEdit(!bannerEdit)
        const imageFile = event.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
        setBannerImg(imageFile)
        setBannerPrev(imageUrl)
     }

    function cancelUpdateBanner(){
        setBannerPrev('')
        setBannerEdit(!bannerEdit)
    }

    return (
        <div className="bg-white text-dark py-5">
            
            <div className="container">
                <div className="banner-field">
                    {!bannerPrev ?
                        <img src={!teamProfile ? '' : teamProfile.teamBannerImg.map(res => res.teamBannerImg)} alt="" className="banner-img"/>
                        :
                        <img src={bannerPrev} alt="" className="banner-img" />
                    }   
                </div>
                        <div className="d-inline-flex justify-content-end edit-button">
                            {bannerEdit ?
                                <div>
                                    <button onClick={cancelUpdateBanner} className="btn btn-danger" type="none" name="bannerImg">
                                        Cancelar
                                    </button>
                                    <button onClick={updateBannerImg} className="btn btn-success ms-2" type="none" name="bannerImg">
                                        <GoDeviceCamera/> Guardar Cambios
                                    </button>
                                </div>
                                :
                                <>
                                {teamProfile && userActive === teamProfile.username &&
                                    <label class="btn btn-white custom-file-upload ">
                                        <input onChange={processBannerImage} type="file" name="bannerImg"/>
                                        <GoDeviceCamera/> Cambiar Banner
                                    </label>
                                }
                                </>
                            }
                        </div>
                <div className="profile-body bg-white row">
                    <div className="avatar-card col-3">
                        {!avatarPrev ?
                            <img src={!teamProfile ? '' : teamProfile.teamAvatar.map(res => res.teamAvatar)} alt="" className="avatar-profile-user rounded-circle border border-5 border-white"/>
                                :
                            <img src={avatarPrev} alt="" className="avatar-profile-user rounded-circle border border-5 border-dark" />
                        }
                        <h1>{!teamProfile ? '' : teamProfile.username}</h1>
                            {avatarEdit ?
                                <div className="d-flex justify-content-center">
                                    <button onClick={cancelUpdateAvatar} className="btn btn-danger" type="none" name="bannerImg">
                                        Cancelar
                                    </button>
                                    <button onClick={updateAvatar} className="btn btn-success ms-2" type="none" name="bannerImg">
                                    <GoDeviceCamera/> Guardar Cambios
                                    </button>
                                </div>
                                        :
                                        <>
                                        {teamProfile && userActive === teamProfile.username &&             
                                            <label class="btn btn-light custom-file-upload ">
                                                <input onChange={(e) => processAvatarImage(e)} type="file" name="avatar"/>
                                                <GoDeviceCamera/> Cambiar Avatar
                                            </label>
                                        }
                                        </>
                            }

                            {/* <div className="net-card card bg-dark m-4">
                                <h2 className="p-3">Mis Redes</h2>
                                <div className="net-fields p-3">
                                    <button className="btn btn-dark"><AiOutlinePlus/>Añade una nueva red social</button>
                                </div>
                            </div> */}
                    </div>
                    <div className="col">
                        <div className="profile-card bg-white mt-3">
                                <div className="card-content pt-3 pb-5 ps-3 pe-3">
                                    <div className="d-flex card-title-description">
                                       <h4 className="flex-grow-1 bd-highlight ">Líder del equipo: </h4>
                                       {!edit ? 
                                            <>
                                            {teamProfile && userActive === teamProfile.username &&
                                                <button onClick={handleEdit} className="btn text-white fs-4">Editar<AiOutlineEdit/></button>
                                            }
                                            </>
                                                :
                                            <>
                                            <button onClick={cancelEdit} className="btn btn-danger text-white fs-4 me-2 mb-2">Cancelar</button>
                                            <button onClick={updateProfile} className="btn btn-success text-white fs-4 mb-2">Guardar cambios<AiOutlineEdit/></button>
                                            </>
                                        }
                                    </div>
                                    <div className="card-text">
                                        {!edit ?  
                                        <div>
                                            {!description ? 
                                                <p>{!teamProfile ? '' : teamProfile.teamLeader.username}</p>
                                                :                                                
                                                <p>{description}</p>
                                            }
                                        </div>                       
                                            :
                                            <div className="description-field">
                                                <textarea id="country-select" className="form-control text-white" defaultValue={teamProfile.profile.map(res=>res.description)} onChange={handleDescription}/>
                                            </div>
                                            
                                        }
                                    </div>
                                    <div className="user-country">
                                        <p className="fw-bold">Videojuego enfoque: </p> 
                                        {!edit ?
                                        <div>
                                            {!country ? 
                                                <p className="card-text">{!teamProfile ? '' : teamProfile.gameChoosed}</p>
                                                :                                                
                                                <p className="card-text">{country}</p>
                                            }
                                        </div>  
                                            :
                                                <select value={country} onChange={handleCountry} name="countries" id="country-select" className="form-select text-white">
                                                    <option value="🇦🇷 Argentina">🇦🇷 Argentina</option>
                                                    <option value="🇧🇴 Bolivia">🇧🇴 Bolivia</option>
                                                    <option value="🇨🇴 Colombia">🇨🇴 Colombia</option>
                                                    <option value="🇨🇱 Chile">🇨🇱 Chile</option>
                                                    <option value="🇪🇨 Ecuador">🇪🇨 Ecuador</option>
                                                    <option value="🇲🇽 México">🇲🇽 México</option>
                                                    <option value="🇵🇾 Paraguay">🇵🇾 Paraguay</option>
                                                    <option value="🇵🇪 Perú">🇵🇪 Perú</option>
                                                    <option value="🇺🇾 Uruguay">🇺🇾 Uruguay</option>
                                                    <option value="🇻🇪 Venezuela">🇻🇪 Venezuela</option>
                                                </select>
                                        }
                                    </div>
                                    <div className="favorite-game pt-4">
                                        <p className="fw-bold">Descripción</p> 
                                        {!edit ?
                                        <div>
                                            {!favGame ? 
                                                <p className="card-text">{!teamProfile ? '' : teamProfile.description}</p>
                                                :                                                
                                                <p className="card-text">{favGame}</p>
                                            }
                                        </div> 
                                                :
                                            <select value={favGame} onChange={handlefavGame} name="countries" id="favGame-select" className="form-select text-white">
                                                <option value="COD: Mobile">COD: Mobile</option>
                                                <option value="COD: Warzone">COD: Warzone</option>
                                                <option value="CS:GO">CS:GO</option>
                                                <option value="Dota 2">Dota 2</option>
                                                <option value="F1 2021">F1 2021</option>
                                                <option value="FIFA 22">FIFA 22</option>
                                                <option value="Fortnite">Fortnite</option>
                                                <option value="Free Fire">Free Fire</option>
                                                <option value="League of Legends">League of Legends</option>
                                                <option value="Osu!">Osu!</option>
                                                <option value="Overwatch">Overwatch</option>
                                                <option value="Pokémon Unite">Pokémon Unite</option>
                                                <option value="Rocket League">Rocket League</option>
                                                <option value="VALORANT">VALORANT</option>
                                                <option value="Wild Rift">Wild Rift</option>
                                            </select>
                                        }
                                    </div>
                                </div>
                        </div>
                        <div className="profile-card mt-2">
                            <div className="card-content pt-3 pb-5 ps-3 pe-3">
                                <ul class="nav nav-pills">
                                    <li class="nav-item">
                                        <h3><AiOutlinePlus size={40}/>Unirme a este equipo</h3>
                                    </li>
                                </ul>
                                {teamProfile && userActive === teamProfile.username &&
                                    <div className="card p-3 bg-dark">
                                        <button className="btn btn-dark p-0">
                                            <div className="row">
                                                <div className="col-3 d-flex align-items-center">
                                                    <div className="newMatch-user-card d-flex align-items-center justify-content-center">
                                                        <AiOutlinePlus size={70}/>
                                                    </div>
                                                </div>
                                                <div className="col-9 px-0 d-flex align-items-center">
                                                        <div className="newMatch-title">    
                                                            <h4>¡Crea una nuevo encuentro y busca amigos para jugar!</h4>
                                                        </div>    
                                                </div>
                                            </div>
                                        </button>
                                    </div> 
                                }
                            {/* {!teamProfile ? 
                                <div>

                                </div>
                                :
                                teamProfile.matches.map(res => 
                                    <UserMatchCard key={res.id} date={res.date} title={res.title} gameChoosed={res.gameChoosed} descrip={res.description}/>
                                    )           
                            } */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamPage
