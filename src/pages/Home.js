import React, { useContext } from 'react'
import Imagenes from '../components/Imagenes'
import './home.css'
import {Link} from "react-router-dom"
import MatchCard from '../components/MatchCard'

import ApiContext from '../components/context/ApiContext'

function Home() {

    const {allMatches, allGames, allTeams} = useContext(ApiContext)
    
    return (
        <div className="App bg-dark bg-gradient text-light">
            <header className="main-header">
                <div className="background-overlay text-white py-5">
                    <div className="container">
                        <div className="row">
                            <div className="header-content text-center">
                                <img src={Imagenes.AppLogo} alt=""/>
                                <h3>¡Crea encuentros de juego y reúnete junto a otros jugadores para jugar!</h3>
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
                                    <Link to='/news' className="link">Encuentros Recientes</Link>
                                </h1>
                            </div>
                        </div>
                    <hr className="barra-news rounded-pill"/>
                        <div className="home-matches">
                            {allMatches &&
                                allMatches.map(res => 
                                                <MatchCard 
                                                    key={res.id} 
                                                    date={res.date} 
                                                    title={res.title} 
                                                    descrip={res.description} 
                                                    avatar={res.user.avatar}
                                                    id={res.user.id} 
                                                    matchId={res.id}
                                                    gameChoosed={res.gameChoosed}
                                                    theme={'bg-dark'}
                                                />   
                                            )
                            }
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
                                <h1 className="ms-3 me-3 mt-1 mb-2 fs-2"><Link to="/games" className="link">Encuentros</Link></h1>
                            </div>
                        </div>
                    <hr className="barra-games rounded-pill"/>
                        <div className="row row-cols-3 games-field">
                            {allGames &&
                                allGames.map(res => 
                                    <div key={res.id} className="col mb-4">  
                                        <Link to={`/games/${res.title}`} className="tarjeta">
                                            <img src={`https://sheltered-depths-45281.herokuapp.com/${res.gameImg.replace("public/","")}`} className="img-card" alt="" style={{borderRadius: '10px'}}/>
                                            <div className="info-card">
                                                <h2 className="event-title-games fs-3">{res.title}</h2>
                                                <p className="">Encuentros enlistados: {res.matches.length}</p>
                                            </div>
                                        </Link>
                                    </div>
                                    )
                            }
                        </div>
                    </div>


                    <div className="col-md-3">
                    <div className="title-spacing">
                            <div className="section-title-teams">
                                <h1 className="ms-3 me-3 mt-1 mb-2 fs-2"><Link to="/Oriteams" className="link">OriTeams</Link></h1>
                            </div>
                        </div>
                        <hr className="barra-teams rounded-pill"/>
                        <ul class="list-group home-teams list-group-flush">
                            {allTeams &&
                                allTeams.map(res => 
                                    <li class="list-group-item team-bg bg-dark text-light">
                                    <div className="row align-items-center">
                                        <div className="col-md-5">
                                        <img src={res.teamAvatar.map(res => res.teamAvatar)} className="list-img" alt="..."/>
                                        </div>
                                        <div className="col-md-7">
                                            <div class="fw-bold">
                                                <Link to={`/oriteams/${res.teamName}`} style={{textDecoration: 'none', color: 'white'}}>{res.teamName}</Link>
                                            </div>
                                            <p className="lh-sm">
                                            <Link to={`/games/${res.gameChoosed}`} style={{textDecoration: 'none', color: 'aqua'}}>{res.gameChoosed}</Link>
                                            </p>
                                            <small className="calendar-icon mb-1 text-muted">Líder: <Link to={`/perfil/${res.teamLeader.username}`} style={{textDecoration: 'none', color: 'gray'}}>{res.teamLeader.username}</Link></small>
                                        </div>
                                    </div>
                                    </li>
                                    )
                            }
                        </ul>
                    </div>
                </div>
            </div>
            </section>

        </div>
       
    )
}

export default Home