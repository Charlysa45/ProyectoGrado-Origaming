import React, { useContext } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import Modal from '../components/Modal'
import { useModal } from '../components/hooks/useModal'
import Imagenes from '../components/Imagenes'
import TeamForm from '../components/TeamForm'
import '../pages/Oriteams.css'
import AuthContext from '../components/context/AuthContext'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'

function Oriteams() {

    const[isOpenModal, openModal, closeModal] = useModal(false);
    const {auth, changeForm, handleChangeForm} = useContext(AuthContext)
    return (
        <div className="App bg-light py-5">
            <div className="container py-3">
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

                        <div className="col">
                            <div className="team-card card">
                                <img src={Imagenes.ImgFnite} alt="" />
                                <div className="card-img-overlay bg-dark bg-gradient text-light">
                                    <div className="row">
                                        <div className="col-6 p-2">
                                            <img src={Imagenes.LogoG2} className="img-team" />
                                        </div>
                                        <div className="col-6">
                                            <h1>G2 Esports</h1>
                                            <small>
                                                <p className="fw-bold m-0">Videojuegos en los que compite:</p>
                                                <p className="mb-4">League of Legends, Rocket League, Valorant.</p>
                                                <p><strong>Miembros: </strong>34 usuarios.</p>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="team-card card">
                                <div className="card-img-overlay-1 card-img-overlay bg-gradient text-light">
                                    <div className="row">
                                        <div className="col-6 p-2">
                                            <img src={Imagenes.LogoFnatic} className="img-team" />
                                        </div>
                                        <div className="col-6">
                                            <h1>Team Fnatic</h1>
                                            <small>
                                                <p className="fw-bold m-0">Videojuegos en los que compite:</p>
                                                <p className="mb-4">League of Legends, CS:GO, Valorant.</p>
                                                <p><strong>Miembros: </strong>25 usuarios.</p>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="team-card card">
                                <div className="card-img-overlay-2 card-img-overlay text-light">
                                    <div className="row">
                                        <div className="col-6 p-2">
                                            <img src={Imagenes.LogoBDS} className="img-team" />
                                        </div>
                                        <div className="col-6">
                                            <h1>BDS Esports</h1>
                                            <small>
                                                <p className="fw-bold m-0">Videojuegos en los que compite:</p>
                                                <p className="mb-4">Rocket League, CS:GO, Apex.</p>
                                                <p><strong>Miembros: </strong>30 usuarios.</p>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col pt-3">
                            <div className="team-card card">
                            <img src={Imagenes.ImgFnite} alt="" />
                                <div className="card-img-overlay-3 card-img-overlay text-dark">
                                    <div className="row">
                                        <div className="col-6 p-2">
                                            <img src={Imagenes.LogoQueso} className="img-team" />
                                        </div>
                                        <div className="col-6">
                                            <h1>Team Queso</h1>
                                            <small>
                                                <p className="fw-bold m-0">Videojuegos en los que compite:</p>
                                                <p className="mb-4">Clash Royale, League of Legends, Rocket League.</p>
                                                <p><strong>Miembros: </strong>30 usuarios.</p>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col pt-3">
                            <div className="team-card card">
                                <div className="card-img-overlay bg-dark bg-gradient text-light">
                                    <div className="row">
                                        <div className="col-6 p-2">
                                            <img src={Imagenes.LogoTSM} className="img-team" />
                                        </div>
                                        <div className="col-6">
                                            <h1 className="fs-2">Team SoloMid</h1>
                                            <small>
                                                <p className="fw-bold m-0">Videojuegos en los que compite:</p>
                                                <p className="mb-4">League of Legens, Apex, Valorant</p>
                                                <p><strong>Miembros: </strong>30 usuarios.</p>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col pt-3">
                            <div className="team-card card">
                                <div className="card-img-overlay-5 card-img-overlay text-dark">
                                    <div className="row">
                                        <div className="col-6 p-2">
                                            <img src={Imagenes.LogoVitality} className="img-team" />
                                        </div>
                                        <div className="col-6">
                                            <h1 className="fs-2">Team Vitality</h1>
                                            <small>
                                                <p className="fw-bold m-0">Videojuegos en los que compite:</p>
                                                <p className="mb-4">Rocket League, CS:GO, Apex.</p>
                                                <p><strong>Miembros: </strong>30 usuarios.</p>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col pt-3">
                            <div className="team-card card">
                            <img src={Imagenes.ImgFnite} alt="" />
                                <div className="card-img-overlay-6 card-img-overlay text-light">
                                    <div className="row">
                                        <div className="col-6 p-2">
                                            <img src={Imagenes.LogoGiants} className="img-team" />
                                        </div>
                                        <div className="col-6">
                                            <h1 className="fs-3">Vodafone Giants</h1>
                                            <small>
                                                <p className="fw-bold m-0">Videojuegos en los que compite:</p>
                                                <p className="mb-4">League of Legens, Rocket League, COD: Warzone.</p>
                                                <p><strong>Miembros: </strong>30 usuarios.</p>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col pt-3">
                            <div className="team-card card">
                            <img src={Imagenes.ImgFnite} alt="" />
                                <div className="card-img-overlay-7 card-img-overlay text-light">
                                    <div className="row">
                                        <div className="col-6 p-2">
                                            <img src={Imagenes.LogoMadLions} className="img-team" />
                                        </div>
                                        <div className="col-6">
                                            <h1>Mad Lions</h1>
                                            <small>
                                                <p className="fw-bold m-0">COD: Warzone, FIFA 21, Valorant</p>
                                                <p className="mb-4">Rocket League, CS:GO, Apex.</p>
                                                <p><strong>Miembros: </strong>30 usuarios.</p>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col pt-3">
                            <div className="team-card card">
                            <img src={Imagenes.ImgFnite} alt="" />
                                <div className="card-img-overlay-8 card-img-overlay text-light">
                                    <div className="row">
                                        <div className="col-6 p-2">
                                            <img src={Imagenes.LogoHeretics} className="img-team" />
                                        </div>
                                        <div className="col-6">
                                            <h1 className="fs-2">Team Heretics</h1>
                                            <small>
                                                <p className="fw-bold m-0">Videojuegos en los que compite:</p>
                                                <p className="mb-4">Clash Royale, League of Legends, Apex.</p>
                                                <p><strong>Miembros: </strong>30 usuarios.</p>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Oriteams
