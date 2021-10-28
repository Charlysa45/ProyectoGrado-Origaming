import React, { useContext } from 'react'
import Imagenes from '../components/Imagenes'
import './Games.css'
import { Link } from "react-router-dom"
import ApiContext from '../components/context/ApiContext'

function Games() {

    const {allGames} = useContext(ApiContext)
    let NoMatches = allGames.map(res => res.matches.length)
    console.log(NoMatches)

    return (
        <div className="App bg-light py-5">
            
            <div className="container py-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/" style={{textDecoration:'none', color:'purple'}}>Inicio</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Encuentros</li>
                    </ol>
                </nav>
                <h1>Encuentros</h1>
                <hr className="barra-games rounded-pill"/>
                <div className="gamecards">
                    <div className="row row-cols-3">

                        <div className="col pt-2">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="game-img col-md-4">
                                        <Link to="/games/RocketLeague">
                                            <img src={Imagenes.PosterRL} class="img-fluid rounded-start" alt="..."/>
                                        </Link>
                                    </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title"><Link to="/games/RocketLeague" className="card-title-games">Rocket League</Link></h5>
                                        <p class="card-text m-0 fw-bold">Encuentros enlistados: </p>
                                        <p className="card-text">{NoMatches[0] + ' encuentro(s)'}</p><br />
                                        <p class="card-text pt-2"><small class="text-muted">Última actualización hace 2 minutos</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="col pt-2">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="game-img col-md-4">
                                        <Link to="/games/LoL">
                                            <img src={Imagenes.PosterLoL} class="img-fluid rounded-start" alt="..."/>
                                        </Link>
                                    </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title"><Link to="/games/LoL" className="card-title-games">League of Legends</Link></h5>
                                        <p class="card-text m-0 fw-bold">Encuentros enlistados: </p>
                                        <p className="card-text">{NoMatches[1] +' encuentro(s)'}</p><br />
                                        <p class="card-text pt-2"><small class="text-muted">Última actualización hace 40 segundos</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="col pt-2">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="game-img col-md-4">
                                        <Link to="/games/CS-GO">
                                            <img src={Imagenes.PosterCSGO} class="img-fluid rounded-start" alt="..."/>
                                        </Link>
                                    </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title" style={{fontSize:'1vw'}}><Link to="/games/CS-GO" className="card-title-games">Counter Strike: Global Offensive</Link></h5>
                                        <p class="card-text m-0 fw-bold">Encuentros enlistados: </p>
                                        <p className="card-text">{NoMatches[2] + ' encuentro(s)'}</p><br />
                                        <p class="card-text pt-2"><small class="text-muted">Última actualización hace 40 segundos</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="col pt-2">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="game-img col-md-4">
                                        <Link to="/games/CoD-Warzone">
                                            <img src={Imagenes.PosterWarzone} class="img-fluid rounded-start" alt="..."/>
                                        </Link>
                                    </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title"><Link to="/games/CoD-Warzone" className="card-title-games">Call of Duty: Warzone</Link></h5>
                                        <p class="card-text m-0 fw-bold">Encuentros enlistados: </p>
                                        <p className="card-text">{NoMatches[3] +' encuentro(s)'}</p><br />
                                        <p class="card-text pt-2"><small class="text-muted">Última actualización hace 3 minutos</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="col pt-2">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="game-img col-md-4">
                                        <Link to="/games/FIFA22">
                                            <img src={Imagenes.PosterFifa22} class="img-fluid rounded-start" alt="..."/>
                                        </Link>
                                    </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title"><Link to="/games/FIFA21" className="card-title-games">FIFA 22</Link></h5>
                                        <p class="card-text m-0 fw-bold">Encuentros enlistados: </p>
                                        <p className="card-text">{NoMatches[4] +' encuentro(s)'}</p><br />
                                        <p class="card-text pt-2"><small class="text-muted">Última actualización hace 8 minutos</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="col pt-2">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="game-img col-md-4">
                                        <Link to="/games/Valorant">
                                            <img src={Imagenes.PosterValorant} class="img-fluid rounded-start" alt="..."/>
                                        </Link>
                                    </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title"><Link to="/games/Valorant" className="card-title-games">Valorant</Link></h5>
                                        <p class="card-text m-0 fw-bold">Encuentros enlistados: </p>
                                        <p className="card-text">{NoMatches[5] +' encuentro(s)'}</p><br />
                                        <p class="card-text pt-2"><small class="text-muted">Última actualización hace 5 minutos</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="col pt-2">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="game-img col-md-4">
                                        <Link to="/games/Fortnite">
                                            <img src={Imagenes.PosterFortnite} class="img-fluid rounded-start" alt="..."/>
                                        </Link>
                                    </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title"><Link to="/games/Fortnite" className="card-title-games">Fortnite</Link></h5>
                                        <p class="card-text m-0 fw-bold">Encuentros enlistados: </p>
                                        <p className="card-text">{NoMatches[6] +' encuentro(s)'}</p><br />
                                        <p class="card-text pt-2"><small class="text-muted">Última actualización hace 4 minutos</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="col pt-2">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="game-img col-md-4">
                                        <Link to="/games/F12021">
                                            <img src={Imagenes.PosterF1} class="img-fluid rounded-start" alt="..."/>
                                        </Link> 
                                    </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title"><Link to="/games/F12021" className="card-title-games">F1 2021</Link></h5>
                                        <p class="card-text m-0 fw-bold">Encuentros enlistados: </p>
                                        <p className="card-text">{NoMatches[7] +' encuentro(s)'}</p><br />
                                        <p class="card-text pt-2"><small class="text-muted">Última actualización hace 7 minutos</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="col pt-2">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="game-img col-md-4">
                                        <Link to="/games/ApexLegends">
                                            <img src={Imagenes.PosterApex} class="img-fluid rounded-start" alt="..."/>
                                        </Link>
                                    </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title"><Link to="/games/ApexLegends" className="card-title-games">Apex Legends</Link></h5>
                                        <p class="card-text m-0 fw-bold">Encuentros enlistados: </p>
                                        <p className="card-text">{NoMatches[8] +' encuentro(s)'}</p><br />
                                        <p class="card-text pt-2"><small class="text-muted">Última actualización hace 10 minutos</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="col pt-2">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="game-img col-md-4">
                                        <Link to="/games/COD-Mobile">
                                            <img src={Imagenes.PosterCODMobile} class="img-fluid rounded-start" alt="..."/>
                                        </Link>
                                    </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title"><Link to="/games/COD-Mobile" className="card-title-games">Call of Duty: Mobile</Link></h5>
                                        <p class="card-text m-0 fw-bold">Encuentros enlistados: </p>
                                        <p className="card-text">{NoMatches[9] +' encuentro(s)'}</p><br />
                                        <p class="card-text pt-2"><small class="text-muted">Última actualización hace 6 minutos</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="col pt-2">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="game-img col-md-4">
                                        <Link to="/games/Dota2">
                                            <img src={Imagenes.PosterDota2} class="img-fluid rounded-start" alt="..."/>
                                        </Link>
                                    </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title"><Link to="/games/Dota2" className="card-title-games">DOTA 2</Link></h5>
                                        <p class="card-text m-0 fw-bold">Encuentros enlistados: </p>
                                        <p className="card-text">{NoMatches[10] +' encuentro(s)'}</p><br />
                                        <p class="card-text pt-2"><small class="text-muted">Última actualización hace 9 minutos</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="col pt-2">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="game-img col-md-4">
                                        <Link to="/games/FreeFire">
                                            <img src={Imagenes.PosterFreeFire} class="img-fluid rounded-start" alt="..."/>
                                        </Link>
                                    </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title"><Link to="/games/FreeFire" className="card-title-games">Free Fire</Link></h5>
                                        <p class="card-text m-0 fw-bold">Encuentros enlistados: </p>
                                        <p className="card-text">{NoMatches[11] +' encuentro(s)'}</p><br />
                                        <p class="card-text pt-2"><small class="text-muted">Última actualización hace 3 minutos</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="col pt-2">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="game-img col-md-4">
                                        <Link to="/games/Osu">
                                            <img src={Imagenes.PosterOsu} class="img-fluid rounded-start" alt="..."/>
                                        </Link>
                                    </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title"><Link to="/games/Osu" className="card-title-games">Osu!</Link></h5>
                                        <p class="card-text m-0 fw-bold">Encuentros enlistados: </p>
                                        <p className="card-text">{NoMatches[12] +' encuentro(s)'}</p><br />
                                        <p class="card-text pt-2"><small class="text-muted">Última actualización hace 6 minutos</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        
                        <div className="col pt-2">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="game-img col-md-4">
                                        <Link to="/games/Overwatch">
                                            <img src={Imagenes.PosterOverwatch} class="img-fluid rounded-start" alt="..."/>
                                        </Link>
                                    </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title"><Link to="/games/Overwatch" className="card-title-games">Overwatch</Link></h5>
                                        <p class="card-text m-0 fw-bold">Encuentros enlistados: </p>
                                        <p className="card-text">{NoMatches[13] +' encuentro(s)'}</p><br />
                                        <p class="card-text pt-2"><small class="text-muted">Última actualización hace 7 minutos</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="col pt-2">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="game-img col-md-4">
                                        <Link to="/games/WildRift">
                                            <img src={Imagenes.PosterWildRift} class="img-fluid rounded-start" alt="..."/>
                                        </Link>
                                    </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title"><Link to="/games/WildRift" className="card-title-games">LoL: Wild Rift</Link></h5>
                                        <p class="card-text m-0 fw-bold">Encuentros enlistados: </p>
                                        <p className="card-text">{NoMatches[14] +' encuentro(s)'}</p><br />
                                        <p class="card-text pt-2"><small class="text-muted">Última actualización hace 4 minutos</small></p>
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
