import React, { useContext } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import Modal from '../components/Modal'
import { useModal } from '../components/hooks/useModal'
import Imagenes from '../components/Imagenes'
import TeamForm from '../components/TeamForm'
import './Oriteams.css'
import AuthContext from '../components/context/AuthContext'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import ApiContext from '../components/context/ApiContext'
import { Link } from 'react-router-dom'

function Oriteams() {

    const[isOpenModal, openModal, closeModal] = useModal(false);
    const {auth, changeForm, handleChangeForm} = useContext(AuthContext)
    const {allTeams} = useContext(ApiContext)

    return (
        <div className="App bg-light" style={{paddingTop: '3rem', paddingBottom: '5rem'}}>
            <div className="container py-3">
            <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/" style={{textDecoration:'none', color:'purple'}}>Inicio</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">OriTeams</li>
                    </ol>
                </nav>
                <h1 className="title-page">OriTeams</h1>
                <div className="card p-3 mb-2 bg-white">
                    <button onClick={openModal} className="btn btn-light p-0">
                        <div className="row">
                            <div className="col-3 d-flex align-items-center">
                                <div className="newMatch-user-card d-flex align-items-center justify-content-center">
                                    <AiOutlinePlus size={70}/>
                                </div>
                            </div>
                            <div className="col-9 px-0 d-flex align-items-center">
                                    <div className="newMatch-title">    
                                        <h4>¿Estás listo para iniciar en el mundo de los Esports? ¡Crea un equipo aquí!</h4>
                                    </div>    
                            </div>
                        </div>
                    </button>
                <Modal isOpen={isOpenModal} closeModal={closeModal}>
                    {auth ?
                            <TeamForm>
                                <div className="form-outline py-4 d-flex justify-content-center">
                                    <button onClick={closeModal} className="btn btn-danger">Cancelar</button>
                                    <button type="submit" className="btn btn-success ms-2">¡Crear!</button>
                                </div>
                            </TeamForm>
                            :
                        <>
                        {!changeForm ?
                            <div className="d-block">
                                <LoginForm>   
                                <div className="session-handler mb-5 d-flex justify-content-center text-white">
                                    <p className="align-middle mb-0">¿No tienes una cuenta aun?</p>
                                    <button onClick={handleChangeForm} className="btn btn-light ms-2">Registrate</button>
                                </div>
                                </LoginForm>   
                            </div>
                            :
                            <div className="d-block">
                                <RegisterForm>
                                <div className="session-handler mb-5 d-flex justify-content-center text-white">
                                    <p className="align-middle mb-0">¿Ya tienes una cuenta?</p>
                                    <button onClick={handleChangeForm} className="btn btn-light ms-2">Iniciar Sesión</button>
                                </div>
                                </RegisterForm>
                            </div>
                        }
                        </>

                    }
                </Modal>
                </div> 
                <hr className="barra-teams rounded-pill"/>
                <div className="teamcards">
                    <div className="row row-cols-3">
                    {!allTeams ? '' : allTeams.map(res => 
                        <div key={res.id} className="col mb-4">
                            <div className="team-card card">
                                <img src={res.teamBannerImg.map(res => res.teamBannerImg)} alt="" className="team-banner-card"/>
                                <div className="card-img-overlay text-light">
                                    <div className="row">
                                        <div className="col-6 p-2">
                                            <img src={res.teamAvatar.map(res => res.teamAvatar)} alt="" className="img-team" />
                                        </div>
                                        <div className="col-6 d-inline-block">
                                            <h3 className="team-name pb-4 fw-bold"><Link to={`/Oriteams/${res.teamName}`} style={{textDecoration: 'none', color: 'white'}}>{res.teamName}</Link></h3>
                                            <div className="team-info">
                                            
                                                    <p className="fw-bold m-0">Videojuego enfoque:</p>
                                                    <p>{res.gameChoosed}</p>
                                                    <p><strong>Miembros: </strong>{res.members.length}</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Oriteams
