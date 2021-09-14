import React from 'react'
import Imagenes from '../components/Imagenes'
import './home.css'
import {Link} from "react-router-dom"

function Home() {
    return (
        <div className="App bg-dark bg-gradient text-light">
            <header className="main-header">
                <div className="background-overlay text-white py-5">
                    <div className="container">
                        <div className="row">
                            <div className="header-content text-center">
                                <img src={Imagenes.AppLogo} alt=""/>
                                <h3>¡Enterate de las últimas novedades en el mundo de los Esports e interactúa con otros jugadores! </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            
            <section className="cards py-5">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="title-spacing">
                            <div className="section-title-news">
                                <h1 className="ms-3 me-3 mt-1 mb-2 fs-2">
                                    <Link to='/news' className="link">Novedades</Link>
                                </h1>
                            </div>
                        </div>
                    <hr className="barra-news rounded-pill"/>
                        <div className="row ">
                            <div className="col-md-4">  
                                <a href="#" className="tarjeta">
                                    <img src={Imagenes.ImgRLNews} className="img-newscard" alt="" />
                                    <div className="info-newscard">
                                        <h2 className="event-title fs-4 fw-bold"><em>¡La temporada 4 de Rocket League ya está aquí!</em></h2>
                                        <p className="event-type">Un mapa nuevo, un battle pass renovado, nuevos torneos 2c2 y más</p>
                                        <small className="text-muted">Nov 12</small>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="#" className="tarjeta">
                                    <img src={Imagenes.ImgLolNews} className="img-newscard" alt="" />
                                    <div className="info-newscard">
                                        <h2 className="event-title fs-4 fw-bold"><em>¡Hay fecha para la final de los Worlds 2021!</em></h2>
                                        <p className="event-type">Tendría lugar el 6 de noviembre en Shenzhen, China.</p>
                                        <small className="text-muted">Nov 12</small>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4">  
                                <a href="#" className="tarjeta">
                                    <img src={Imagenes.ImgPkmnNews} className="img-newscard" alt="" />
                                    <div className="info-newscard">
                                        <h2 className="event-title fs-4 fw-bold"><em>¡Así es el nuevo y divertido MOBA de Pokémon!</em></h2>
                                        <p className="event-type">Duelos por equipos... ¡conformados por Pokémon de todo tipo!</p>
                                        <small className="text-muted">Nov 12</small>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 pt-3">  
                                <a href="#" className="tarjeta">
                                    <img src={Imagenes.ImgFallGuysNews} className="img-newscard" alt="" />
                                    <div className="info-newscard">
                                        <h2 className="event-title fs-4 fw-bold"><em>¡Fall Guys revive y su número de jugadores asciende como la espuma!</em></h2>
                                        <p className="event-type">Llegó la temporada 5 de los maníes saltarines y le dio un aire totalmente fresco al juego.</p>
                                        <small className="text-muted">Nov 12</small>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 pt-3">  
                                <a href="#" className="tarjeta">
                                    <img src={Imagenes.ImgB4BNews} className="img-newscard" alt="" />
                                    <div className="info-newscard">
                                        <h2 className="event-title fs-4 fw-bold"><em>¡La Beta Abierta de Back 4 Blood ya está dispoible!</em></h2>
                                        <p className="event-type">Hasta el 16 de agosto los jugadores podrán probar al "sucesor espirituaL" de Left 4 Dead de forma gratuita.</p>
                                        <small className="text-muted">Nov 12</small>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 pt-3">  
                                <a href="#" className="tarjeta">
                                    <img src={Imagenes.ImgCODW} className="img-newscard" alt="" />
                                    <div className="info-newscard">
                                        <h2 className="event-title fs-4 fw-bold"><em>Hay retrasos en el lanzamiento de la Temporada 5 de COD: Warzone</em></h2>
                                        <p className="event-type">Habrá que esperar 24 horas más para disfrutar de la nueva temporada de este battle royale</p>
                                        <small className="text-muted">Nov 12</small>
                                    </div>
                                </a>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    </section>

            <section className="cards pt-3 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="title-spacing">
                            <div className="section-title-games">
                                <h1 className="ms-3 me-3 mt-1 mb-2 fs-2"><Link to="/games" className="link">Videojuegos</Link></h1>
                            </div>
                        </div>
                    <hr className="barra-games rounded-pill"/>
                        <div className="row ">
                            <div className="col-md-4">  
                                <a href="#" className="tarjeta">
                                    <img src={Imagenes.ImgRL} className="img-card" alt="" />
                                    <div className="info-card">
                                        <h2 className="event-title-games fs-3">Rocket League</h2>
                                        <p className="event-type">Torneo 3vs3</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="#" className="tarjeta">
                                    <img src={Imagenes.ImgLoL} className="img-card" alt="" />
                                    <div className="info-card">
                                        <h2 className="event-title-games fs-3"><em>League of Legends</em></h2>
                                        <p className="event-type">Clasificatoria, Reclutamiento, Aram</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4">  
                                <a href="#" className="tarjeta">
                                    <img src={Imagenes.ImgOvrwatch} className="img-card" alt="" />
                                    <div className="info-card">
                                        <h2 className="event-title-games fs-3"><em>Overwatch</em></h2>
                                        <p className="event-type">Clasificatorio, Informal</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 pt-3">  
                                <a href="#" className="tarjeta">
                                    <img src={Imagenes.ImgFallGuys} className="img-card" alt="" />
                                    <div className="info-card">
                                        <h2 className="event-title-games fs-3"><em>Fall Guys: Ultimate Knockout</em></h2>
                                        <p className="event-type">Escuadrones, Trios, Privadas</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 pt-3">  
                                <a href="#" className="tarjeta">
                                    <img src={Imagenes.ImgAmogus} className="img-card" alt="" />
                                    <div className="info-card">
                                        <h2 className="event-title-games fs-3"><em>Among Us</em></h2>
                                        <p className="event-type">Partidas de 5, 7 y 10 jugadores</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 pt-3">  
                                <a href="#" className="tarjeta">
                                    <img src={Imagenes.ImgPaladins} className="img-card" alt="" />
                                    <div className="info-card">
                                        <h2 className="event-title-games fs-3"><em>Paladins</em></h2>
                                        <p className="event-type">Asedio, Batalla a muerte, Competitivo</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 pt-3">  
                                <a href="#" className="tarjeta">
                                    <img src={Imagenes.ImgGarPho} className="img-card" alt="" />
                                    <div className="info-card">
                                        <h2 className="event-title-games fs-3"><em>Gartic Phone</em></h2>
                                        <p className="event-type">Normal, Imitación, Rompehielos</p>
                                        <p className="text-muted">Nov 12</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 pt-3">  
                                <a href="#" className="tarjeta">
                                    <img src={Imagenes.ImgF1} className="img-card" alt="" />
                                    <div className="info-card">
                                        <h2 className="event-title-games fs-3"><em>F1 2021</em></h2>
                                        <p className="event-type">Carrera Informal, Torneo</p>
                                        <p className="text-muted">Nov 12</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 pt-3">  
                                <a href="#" className="tarjeta">
                                    <img src={Imagenes.ImgCODW} className="img-card" alt="" />
                                    <div className="info-card">
                                        <h2 className="event-title-games fs-3"><em>COD: Warzone</em></h2>
                                        <p className="event-type">Battle Royale, Botín, Dúos</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 pt-3">  
                                <a href="#" className="tarjeta">
                                    <img src={Imagenes.ImgFnite} className="img-card" alt="" />
                                    <div className="info-card">
                                        <h2 className="event-title-games fs-3"><em>Fortnite</em></h2>
                                        <p className="event-type">Creativo, Parkour, Batalla Campal</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 pt-3">  
                                <a href="#" className="tarjeta">
                                    <img src={Imagenes.ImgRainbSS} className="img-card" alt="" />
                                    <div className="info-card">
                                        <h2 className="event-title-games fs-3"><em>Rainbow Six Siege</em></h2>
                                        <p className="event-type">Bombas, Asegurar la Zona</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 pt-3">  
                                <a href="#" className="tarjeta">
                                    <img src={Imagenes.ImgFreeFire} className="img-card" alt="" />
                                    <div className="info-card">
                                        <h2 className="event-title-games fs-3"><em>Free Fire</em></h2>
                                        <p className="event-type">Clasificatoria, Clásico</p>
                                        <p className="text-muted">Nov 12</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-3">
                    <div className="title-spacing">
                            <div className="section-title-teams">
                                <h1 className="ms-3 me-3 mt-1 mb-2 fs-2"><Link to="/Oriteams" className="link">OriTeams</Link></h1>
                            </div>
                        </div>
                        <hr className="barra-teams rounded-pill"/>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item bg-dark text-light">
                            <div className="row align-items-center">
                                <div className="col-md-5">
                                <img src={Imagenes.LogoG2} className="list-img" alt="..."/>
                                </div>
                                <div className="col-md-7">
                                    <div class="fw-bold">G2 Esports</div>
                                    <p className="lh-sm">
                                    League of Legends
                                    </p>
                                    <small className="calendar-icon mb-1 text-muted">Sobre este OriTeam</small>
                                </div>
                            </div>
                            </li>
                            <li class="list-group-item bg-dark text-light">
                            <div className="row align-items-center">
                                <div className="col-md-5">
                                <img src={Imagenes.LogoBDS} className="list-img rounded-circle" alt="..."/>
                                </div>
                                <div className="col-md-7">
                                    <div class="fw-bold">BDS Esports</div>
                                    <p className="lh-sm">
                                    Rocket League
                                    </p>
                                    <small className="calendar-icon mb-1 text-muted">Sobre este OriTeam</small>
                                </div>
                            </div>
                            </li>
                            <li class="list-group-item bg-dark text-light">
                            <div className="row align-items-center">
                                <div className="col-md-5">
                                <img src={Imagenes.LogoFnatic} className="list-img rounded-circle" alt="..."/>
                                </div>
                                <div className="col-md-7">
                                    <div class="fw-bold">Team Fnatic</div>
                                    <p className="lh-sm">
                                    Valorant
                                    </p>
                                    <small className="calendar-icon mb-1 text-muted">Sobre este OriTeam</small>
                                </div>
                            </div>
                            </li>
                            <li class="list-group-item bg-dark text-light">
                            <div className="row align-items-center">
                                <div className="col-md-5">
                                <img src={Imagenes.LogoQueso} className="list-img rounded-circle" alt="..."/>
                                </div>
                                <div className="col-md-7">
                                    <div class="fw-bold">Team Queso</div>
                                    <p className="lh-sm">
                                    Rocket League
                                    </p>
                                    <small className="calendar-icon mb-1 text-muted">Sobre este OriTeam</small>
                                </div>
                            </div>
                            </li>
                            <li class="list-group-item bg-dark text-light">
                            <div className="row align-items-center">
                                <div className="col-md-5">
                                <img src={Imagenes.LogoTSM} className="list-img rounded-circle" alt="..."/>
                                </div>
                                <div className="col-md-7">
                                    <div class="fw-bold">Team SoloMid</div>
                                    <p className="lh-sm">
                                    Fortnite
                                    </p>
                                    <small className="calendar-icon mb-1 text-muted">Sobre este OriTeam</small>
                                </div>
                            </div>
                            </li>
                            <li class="list-group-item bg-dark text-light">
                            <div className="row align-items-center">
                                <div className="col-md-5">
                                <img src={Imagenes.LogoVitality} className="list-img rounded-circle" alt="..."/>
                                </div>
                                <div className="col-md-7">
                                    <div class="fw-bold">Team Vitality</div>
                                    <p className="lh-sm">
                                    CS:GO
                                    </p>
                                    <small className="calendar-icon mb-1 text-muted">Sobre este OriTeam</small>
                                </div>
                            </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </section>

        </div>
       
    )
}

export default Home