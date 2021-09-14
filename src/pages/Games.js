import React from 'react'
import Imagenes from '../components/Imagenes'
import './Games.css'
import {Link} from "react-router-dom"

function Games() {
    return (
        <div className="App bg-light py-5">
            <div className="container py-3">
                <h1>Videojuegos</h1>
                <hr className="barra-games rounded-pill"/>
                <div className="gamecards">
                    <div className="row">

                        <div className="col-md-4 pt-2">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <Link to="#">
                                            <img src={Imagenes.PosterRL} class="img-fluid rounded-start" alt="..."/>
                                        </Link>
                                    </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title"><Link to="#" className="card-title-games">Rocket League</Link></h5>
                                        <small class="card-text"><strong>Partidas enlistadas:</strong> 35 partidas</small><br />
                                        <small class="card-text"><strong>Usuarios en espera:</strong> 56 usuarios</small>
                                        <p class="card-text pt-5"><small class="text-muted">Última actualización hace 2 minutos</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-4 pt-2">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <Link to="#">
                                            <img src={Imagenes.PosterLoL} class="img-fluid rounded-start" alt="..."/>
                                        </Link>
                                    </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title"><Link to="#" className="card-title-games">League of Legends</Link></h5>
                                        <small class="card-text"><strong>Partidas enlistadas:</strong> 50 partidas</small><br />
                                        <small class="card-text"><strong>Usuarios en espera:</strong> 120 usuarios</small>
                                        <p class="card-text pt-5"><small class="text-muted">Última actualización hace 40 segundos</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-4 pt-2">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <Link to="#">
                                            <img src={Imagenes.PosterCSGO} class="img-fluid rounded-start" alt="..."/>
                                        </Link>
                                    </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title"><Link to="#" className="card-title-games">Counter Strike: Global Offensive</Link></h5>
                                        <small class="card-text"><strong>Partidas enlistadas:</strong> 43 partidas</small><br />
                                        <small class="card-text"><strong>Usuarios en espera:</strong> 60 usuarios</small>
                                        <p class="card-text pt-5"><small class="text-muted">Última actualización hace 4 minutos</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-4 pt-2">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <Link to="#">
                                            <img src={Imagenes.PosterWarzone} class="img-fluid rounded-start" alt="..."/>
                                        </Link>
                                    </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title"><Link to="#" className="card-title-games">Call of Duty: Warzone</Link></h5>
                                        <small class="card-text"><strong>Partidas enlistadas:</strong> 36 partidas</small><br />
                                        <small class="card-text"><strong>Usuarios en espera:</strong> 85 usuarios</small>
                                        <p class="card-text pt-5"><small class="text-muted">Última actualización hace 3 minutos</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-4 pt-2">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <Link to="#">
                                            <img src={Imagenes.PosterFifa} class="img-fluid rounded-start" alt="..."/>
                                        </Link>
                                    </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title"><Link to="#" className="card-title-games">FIFA 21</Link></h5>
                                        <small class="card-text"><strong>Partidas enlistadas:</strong> 43 partidas</small><br />
                                        <small class="card-text"><strong>Usuarios en espera:</strong> 67 usuarios</small>
                                        <p class="card-text pt-5"><small class="text-muted">Última actualización hace 8 minutos</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-4 pt-2">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <Link to="#">
                                            <img src={Imagenes.PosterValorant} class="img-fluid rounded-start" alt="..."/>
                                        </Link>
                                    </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title"><Link to="#" className="card-title-games">Valorant</Link></h5>
                                        <small class="card-text"><strong>Partidas enlistadas:</strong> 40 partidas</small><br />
                                        <small class="card-text"><strong>Usuarios en espera:</strong> 56 usuarios</small>
                                        <p class="card-text pt-5"><small class="text-muted">Última actualización hace 5 minutos</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-4 pt-2">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <Link to="#">
                                            <img src={Imagenes.PosterFortnite} class="img-fluid rounded-start" alt="..."/>
                                        </Link>
                                    </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title"><Link to="#" className="card-title-games">Fortnite</Link></h5>
                                        <small class="card-text"><strong>Partidas enlistadas:</strong> 50 partidas</small><br />
                                        <small class="card-text"><strong>Usuarios en espera:</strong> 78 usuarios</small>
                                        <p class="card-text pt-5"><small class="text-muted">Última actualización hace 4 minutos</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-4 pt-2">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <Link to="#">
                                            <img src={Imagenes.PosterF1} class="img-fluid rounded-start" alt="..."/>
                                        </Link> 
                                    </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title"><Link to="#" className="card-title-games">F1 2021</Link></h5>
                                        <small class="card-text"><strong>Partidas enlistadas:</strong> 15 partidas</small><br />
                                        <small class="card-text"><strong>Usuarios en espera:</strong> 25 usuarios</small>
                                        <p class="card-text pt-5"><small class="text-muted">Última actualización hace 7 minutos</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-4 pt-2">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <Link to="#">
                                            <img src={Imagenes.PosterApex} class="img-fluid rounded-start" alt="..."/>
                                        </Link>
                                    </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title"><Link to="#" className="card-title-games">Apex Legends</Link></h5>
                                        <small class="card-text"><strong>Partidas enlistadas:</strong> 30 partidas</small><br />
                                        <small class="card-text"><strong>Usuarios en espera:</strong> 45 usuarios</small>
                                        <p class="card-text pt-5"><small class="text-muted">Última actualización hace 10 minutos</small></p>
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

export default Games
