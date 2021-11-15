import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineEdit, AiOutlinePlus } from 'react-icons/ai'
import { GoDeviceCamera } from 'react-icons/go'
import { useParams } from 'react-router'
import Modal from '../components/Modal'
import AvatarContext from '../components/context/AvatarContext'
import { useProfiles } from '../components/hooks/useProfiles'
import { useTeams } from '../components/hooks/useTeams'
import TeamService from '../services/TeamService'
import './TeamPage.css'
import { useModal } from '../components/hooks/useModal'
import { Link } from 'react-router-dom'

const TeamPage = () => {
    const {avatarEdit, setAvatarEdit} = useContext(AvatarContext)
    const [isOpenModal, openModal, closeModal] = useModal(false)

    const [userActive, setUserActive] = useState(null)
    const [avatar, setAvatar] = useState(null)
    const [avatarPrev, setAvatarPrev] = useState(null)

    useEffect(() => {
        let userData = window.localStorage.getItem('loggedUserOnApp')
    
        if(userData){
            const {username} = JSON.parse(userData)
            setUserActive(username)
        }
    }, [])

    const {profiles} = useProfiles()
    const {teams} = useTeams()
    const {TeamName} = useParams()
    
    const [teamProfile, setTeamProfile] = useState(null)
    const [leaderProfile, setleaderProfile] = useState(null)
    
    const [edit, setEdit] = useState(false)
    const [bannerEdit, setBannerEdit] = useState(false)

    const [bannerImg, setBannerImg] = useState(null)
    const [description, setDescription] = useState('')
    const [gameChoosed, setGameChoosed] = useState('')
    const [members, setMembers] = useState([])

    useEffect(() => {
        const teamProfile = teams.find(res => res.teamName === TeamName)
        console.log(teamProfile)
        if (teamProfile) {
            TeamService.getMembers(teamProfile.id)
            .then(resp => {
                if (resp.members.length === 0) {
                    setMembers(null)
                }else{
                    const membersId = resp.members
                    console.log(profiles)
                    const memberList = membersId.map(res => profiles.find(resp => resp.id === res))
                    setMembers(memberList) 
                }
                setTeamProfile(teamProfile)
            })
            .catch(err => console.error(err))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [teams])

    useEffect(() => {
        const leaderProfile = profiles.find(res => res.username === teamProfile.teamLeader.username)
        setleaderProfile(leaderProfile)
    }, [teamProfile])

    const handleEdit = () => {
        setEdit(!edit)
    }

    const cancelEdit = () => {
        setDescription('')
        setGameChoosed('')
        setEdit(!edit)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }
  
    const handleGameChoosed = (e) => {
        setGameChoosed(e.target.value)
    }

    const NewPf = () => {
        if(description && gameChoosed){
            let newPf ={
                description: description,
                gameChoosed:gameChoosed,
            }
            return {newPf}
        }else if (!gameChoosed) {
            let newPf ={
                description: description
            }
            return {newPf}
        }else if (!description){
            let newPf ={
                gameChoosed: gameChoosed   
            }
            return {newPf}
        }
    }

    const updateProfile = async (e) => {
        const teamId = teamProfile.id
        await TeamService.updateTeam(
            teamId,
            NewPf().newPf
        ).then(res => handleEdit())
        .catch(error =>(console.error(error)))
    }

    const updateAvatar = async (e) => {
        const avatarId = teamProfile.teamAvatar.map(res => res.id)
        await TeamService.updateAvatar(
            avatarId,
            avatar
        ).then(res => {
            setAvatar(res)
            setAvatarEdit(!avatar)
        })
        .catch(error =>(console.error(error)))
    }

    function processAvatarImage(e){
        setAvatarEdit(!avatarEdit)
        const imageFile = e.target.files[0];
        const imageUrl = URL.createObjectURL(e.target.files[0]);
        setAvatarPrev(imageUrl)
        setAvatar(imageFile)
    }

    const cancelUpdateAvatar = () => {
        setAvatarPrev(!avatarPrev)
        setAvatarEdit(!avatarEdit)
    }

    const updateBannerImg = async (e) => {
        const bannerId = teamProfile.teamBannerImg.map(res => res.id)
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

    const addMember = () => {
        const teamId = teamProfile.id
        const newMember = profiles.find(res => res.username === userActive)
       
        TeamService.newMember(teamId, newMember.id)
        .then(res => {
            window.location.reload()
        })
    }

    return (
        <div className="bg-white text-dark py-5">
            
            <div className="container">
            <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/" style={{textDecoration:'none', color:'purple'}}>Inicio</Link></li>
                        <li class="breadcrumb-item"><Link to="/oriteams" style={{textDecoration:'none', color:'purple'}}>Oriteams</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">{TeamName}</li>
                    </ol>
            </nav>
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
                                {teamProfile && userActive === teamProfile.teamLeader.username &&
                                    <label class="btn btn-light custom-file-upload ">
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
                        <h1>{!teamProfile ? '' : teamProfile.teamName.replace("-"," ")}</h1>
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
                                        {teamProfile && userActive === teamProfile.teamLeader.username &&             
                                            <label class="btn btn-dark custom-file-upload ">
                                                <input onChange={(e) => processAvatarImage(e)} type="file" name="avatar"/>
                                                <GoDeviceCamera/> Cambiar Icono
                                            </label>
                                        }
                                        </>
                            }
                    </div>
                    <div className="col">
                        <div className="profile-card bg-white mt-3">
                                <div className="card-content pt-3 pb-5 ps-3 pe-3">
                                    <div className="d-flex align-items-center card-title-description">
                                       <h4 className="bd-highlight ">Líder del equipo: </h4>
                                            <div className="flex-grow-1 ms-3">
                                                <div className="d-flex align-items-center">
                                                    <img src={!leaderProfile ? '' : leaderProfile.avatar.map(res => res.avatar)} alt="" className="leader-img" />
                                                    <p className="m-0 ms-2">{!teamProfile ? '' : teamProfile.teamLeader.username}</p>
                                                </div>
                                            </div>
                                       {!edit ? 
                                            <>
                                            {teamProfile && userActive === teamProfile.teamLeader.username &&
                                                <button onClick={handleEdit} className="btn text-dark fs-4">Editar<AiOutlineEdit/></button>
                                            }
                                            </>
                                                :
                                            <>
                                            <button onClick={cancelEdit} className="btn btn-danger text-white fs-4 me-2 mb-2">Cancelar</button>
                                            <button onClick={updateProfile} className="btn btn-success text-white fs-4 mb-2">Guardar cambios<AiOutlineEdit/></button>
                                            </>
                                        }
                                    </div>
                                    <div className="game-focus">
                                        <p className="fw-bold">Videojuego enfoque: </p> 
                                        {!edit ?
                                        <div>
                                            {!gameChoosed ? 
                                                <p className="card-text">{!teamProfile ? '' : teamProfile.gameChoosed}</p>
                                                :                                                
                                                <p className="card-text">{gameChoosed}</p>
                                            }
                                        </div>  
                                            :
                                            <select value={gameChoosed} onChange={handleGameChoosed} name="countries" id="gameFocus-select" className="form-select text-dark">
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
                                    <div className="favorite-game pt-4">
                                        <p className="fw-bold">Descripción</p> 
                                        {!edit ?
                                        <div>
                                            {!description ? 
                                                <p className="card-text">{!teamProfile ? '' : teamProfile.description}</p>
                                                :                                                
                                                <p className="card-text">{description}</p>
                                            }
                                        </div> 
                                                :
                                                <div className="description-field">
                                                    <textarea id="teamDescription-text" className="form-control text-dark" defaultValue={teamProfile.description} onChange={handleDescription}/>
                                                </div>
                                        }
                                    </div>
                                </div>
                        </div>
                        <div className="profile-card mt-2">
                            <div className="card-content pt-3 pb-1 ps-3 pe-3">
                                <div className="d-flex align-items-center">
                                        <h3 className="flex-grow-1 m-0">Miembros</h3>
                                        <button className="btn" onClick={openModal}><h4 className="m-0"><AiOutlinePlus size={30}/>Unirme a este equipo</h4></button>
                                </div>
                                <Modal isOpen={isOpenModal} closeModal={closeModal}>
                                    <div className="d-inline-block">
                                        <h3 className="text-white pt-5">¿Seguro que deseas unirte a este equipo?</h3>
                                        <div className="form-outline py-4 d-flex justify-content-center">
                                            <button onClick={closeModal} className="btn btn-danger">Cancelar</button>
                                            <button onClick={addMember} className="btn btn-success ms-2">Unirme</button>
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                            {!members ?
                                 <div className="card p-3">
                                     <div className="d-flex justify-content-center align-items-center">
                                        <h4 className="text-muted">Este equipo no tiene miembros aún... ¡Sé el primero en unirte!</h4>
                                     </div>
                                 </div>
                                    :
                                    members.map(res =>
                                        <div className="card p-3">
                                            <div className="d-flex align-items-center">
                                                <img src={res && res.avatar.map(resp => resp.avatar)} alt="" className="leader-img"/>
                                                <Link to={res && `/perfil/${res.username}`} className="ms-2" style={{textDecoration: 'none', color: 'purple'}}>
                                                    <p className="m-0">{!res ? '' : res.username}</p>
                                                </Link>
                                            </div>
                                        </div>
                                        )
                                }   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamPage
