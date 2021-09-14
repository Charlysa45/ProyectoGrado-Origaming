import React from 'react'
import Imagenes from '../components/Imagenes'
import '../pages/Oriteams.css'

function Oriteams() {
    return (
        <div className="App bg-light py-5">
            <div className="container py-3">
                <h1 className="title-page">OriTeams</h1>
                <hr className="barra-teams rounded-pill"/>
                <div className="teamcards">
                    <div className="row">

                        <div className="col-md-4">
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

                        <div className="col-md-4">
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

                        <div className="col-md-4">
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

                        <div className="col-md-4 pt-3">
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

                        <div className="col-md-4 pt-3">
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

                        <div className="col-md-4 pt-3">
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

                        <div className="col-md-4 pt-3">
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

                        <div className="col-md-4 pt-3">
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

                        <div className="col-md-4 pt-3">
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
