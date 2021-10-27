import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import GameService from '../services/GameService'

import './UserMatchCard.css'

let borderStyles ={
    'border-radius':'25px'
}

const UserMatchCard = ({date, title, gameChoosed, descrip}) => {

    let linkStyles = {
        'text-decoration':'none'
    }

    const [gameTitle, setGameTitle] = useState(null)
    const [gameImage, setGameImage] = useState(null)

    useEffect(() => {
        GameService.getGame()
        .then(res => {
            const gameInfo = res.find(resp => resp.title === gameChoosed)
            setGameImage(gameInfo)
        })
        processTitle(gameChoosed)
    }, [])

    const processTitle = (gameTitleRaw) => {
        if(gameTitleRaw === "RocketLeague"){
            setGameTitle('Rocket League')
        }else if(gameTitleRaw === "LoL"){
            setGameTitle('League of Legends')
        }else if(gameTitleRaw === "CS-GO"){
            setGameTitle('Counter Strike: Global Offensive')
        }else if(gameTitleRaw === "CoD-Warzone"){
            setGameTitle('Call of Duty: Warzone')
        }else if(gameTitleRaw === "FIFA22"){
            setGameTitle('FIFA 22')
        }else if(gameTitleRaw === "Valorant"){
            setGameTitle('Valorant')
        }else if(gameTitleRaw === "Fortnite"){
            setGameTitle('Fortnite')
        }else if(gameTitleRaw === "F12021"){
            setGameTitle('F1 2021')
        }else if(gameTitleRaw === "ApexLegends"){
            setGameTitle('Apex Legends')
        }else if(gameTitleRaw === "COD-Mobile"){
            setGameTitle('Call of Duty: Mobile')
        }else if(gameTitleRaw === "Dota2"){
            setGameTitle('Dota 2')
        }else if(gameTitleRaw === "FreeFire"){
            setGameTitle('Free Fire')
        }else if(gameTitleRaw === "Osu"){
            setGameTitle('Osu!')
        }else if(gameTitleRaw === "Overwatch"){
            setGameTitle('Overwatch')
        }else if(gameTitleRaw === "WildRift"){
            setGameTitle('League of Legends: Wild Rift')
        }
    }

    return (
        <div>
            <div className="card bg-dark text-white p-3">
                <div className="row">
                    <div className="col-3 d-flex align-items-center">
                        <div className="match-card">
                            <img src={!gameImage ? '' : `https://sheltered-depths-45281.herokuapp.com/${gameImage.gameImg.replace("public/","")}`} alt="" style={borderStyles} className="img-match"/>
                        </div>
                    </div>
                    <div className="col-9 px-0">
                        <div className="card-title text-white">
                            <h5 className="m-0">{title}</h5>  
                            <small>Videojuego: <Link to={`/games/${gameChoosed}`} style={linkStyles}>{gameTitle}</Link></small>
                        </div>    
                        <div className="card-match-content">
                            <small className="m-0">
                                {descrip}
                            </small>
                            <br />
                        </div>
                        <div className="d-flex">
                            <small>Fecha:</small>
                            <small className="text-muted ms-1">{date}</small>
                        </div>     
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default UserMatchCard
