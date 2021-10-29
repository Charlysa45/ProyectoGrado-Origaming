import React, { useEffect, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { useParams } from 'react-router'
import { MemoryRouter as Router, Link } from 'react-router-dom'
import { useModal } from '../components/hooks/useModal'
import Modal from '../components/Modal'
import MatchForm from '../components/MatchForm'
import GameService from '../services/GameService'
import './GamePage.css'
import MatchCard from '../components/MatchCard'

const GamePage = () => {

    const baseUrl = 'https://sheltered-depths-45281.herokuapp.com/'

    const {GameTag} = useParams()

    const [game, setGame] = useState(null)
    const [title, setTitle] = useState(null)
    const [matches, setMatches] = useState(null)

    const[isOpenModal, openModal, closeModal] = useModal(false);

    useEffect(() => {
        GameService.getGame()
        .then(res => {
            const Game = res.find(resp => resp.title === GameTag)
            const GameId = Game.id

            GameService.getMatches(GameId)
            .then(resp => {
                setGame(resp)
                if (resp.matches.length === 0) {
                    setMatches(null)
                }else{
                    setMatches(resp.matches)
                }
                
            })
            .catch(err => console.log(err))

            processTitle(Game.title)
        })
    }, [])

    const processTitle = (gameTitleRaw) => {
        if(gameTitleRaw === "RocketLeague"){
            setTitle('ROCKET LEAGUE')
        }else if(gameTitleRaw === "LoL"){
            setTitle('LEAGUE OF LEGENDS')
        }else if(gameTitleRaw === "CS-GO"){
            setTitle('COUNTER STRIKE: GLOBAL OFFENSIVE')
        }else if(gameTitleRaw === "CoD-Warzone"){
            setTitle('COD: WARZONE')
        }else if(gameTitleRaw === "FIFA22"){
            setTitle('FIFA 22')
        }else if(gameTitleRaw === "Valorant"){
            setTitle('VALORANT')
        }else if(gameTitleRaw === "Fortnite"){
            setTitle('FORTNITE')
        }else if(gameTitleRaw === "F12021"){
            setTitle('F1 2021')
        }else if(gameTitleRaw === "ApexLegends"){
            setTitle('APEX LEGENDS')
        }else if(gameTitleRaw === "COD-Mobile"){
            setTitle('COD: MOBILE')
        }else if(gameTitleRaw === "Dota2"){
            setTitle('DOTA 2')
        }else if(gameTitleRaw === "FreeFire"){
            setTitle('FREE FIRE')
        }else if(gameTitleRaw === "Osu"){
            setTitle('OSU!')
        }else if(gameTitleRaw === "Overwatch"){
            setTitle('OVERWATCH')
        }else if(gameTitleRaw === "WildRift"){
            setTitle('LOL: WILD RIFT')
        }
    }

    return (
        <div>
            <div className="bg-white text-dark py-5">
                <div className="container">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/" style={{textDecoration:'none', color:'purple'}}>Inicio</Link></li>
                        <li class="breadcrumb-item"><Link to="/games" style={{textDecoration:'none', color:'purple'}}>Encuentros</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">{title}</li>
                    </ol>
                </nav>
                    <div className="ImgGame-field">
                        <img src={!game ? '' : `${baseUrl}/${game.gameImg.replace("public/", "")}`} alt="" className="game-banner"/>
                    </div>
                    <div className="game-title text-white">
                        <h1 className="title fw-bold">{!game ? '' : title}</h1>
                    </div>
                    <div className="game-body bg-white p-4">
                        <div className="game-description d-flex">
                            <h5 className="fw-bold pe-3">Descripción: </h5>
                            <h5 className="text-description">{!game ? '' : game.description}</h5>
                        </div>
                        <div className="game-modes mt-4 d-flex">
                            <h5 className="fw-bold pe-3">Modos de juego: </h5>
                            <h5 className="text-description">{!game ? '' : game.gameModes}.</h5>
                        </div>
                        <div className="matches-content mt-4">
                        
                            <ul className="nav nav-tabs">
                                <li class="nav-item">
                                    <Link to="/" className="nav-link active">Encuentros enlistados</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/organizers" className="nav-link">Organizadores</Link>
                                </li>
                            </ul>
                            <div className="card p-3">
                                <button onClick={openModal} className="btn p-0">
                                    <div className="row">
                                        <div className="col-2 d-flex align-items-center justify-content-center">
                                            <div className="newMatch-card d-flex align-items-center justify-content-center rounded-circle">
                                                <AiOutlinePlus size={70}/>
                                            </div>
                                        </div>
                                        <div className="col-9 px-0 d-flex align-items-center">
                                            <div className="newMatch-title">    
                                                <h4>¡Crea un nuevo encuentro y busca amigos para jugar!</h4>
                                            </div>    
                                        </div>
                                    </div>
                                </button>
                                <Modal isOpen={isOpenModal} closeModal={closeModal}>
                                    <MatchForm>
                                        <div className="form-outline py-4 d-flex justify-content-center">
                                            <button onClick={closeModal} className="btn btn-danger">Cancelar</button>
                                            <button type="submit" className="btn btn-success ms-2">Publicar</button>
                                        </div>
                                    </MatchForm>
                                </Modal>
                            </div> 
                            {!game ? 
                                <div>

                                </div>
                                :
                                <div>
                                 {!matches ?
                                 <div className="card p-3">
                                     <div className="d-flex justify-content-center align-items-center">
                                        <h4 className="text-muted">Nope, no hay encuentros enlistados aun. ¿Por qué no creas uno?</h4>
                                     </div>
                                 </div>
                                    :
                                    game.matches.map(res => 
                                        <MatchCard 
                                            key={res.id} 
                                            date={res.date} 
                                            title={res.title} 
                                            descrip={res.description} 
                                            id={res.user} 
                                            matchId={res.id}
                                            theme={'bg-white'}
                                        />   
                                    )
                                }   
                                </div>
                                }
                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GamePage