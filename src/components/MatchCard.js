import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useProfiles } from './hooks/useProfiles'
import './MatchCard.css'

let borderStyles ={
    'border-radius':'25px'
}

const MatchCard = ({date, title, descrip, id, matchId, gameChoosed, theme}) => {

    const [titleGame, setTitleGame] = useState(null)

    const {profiles} = useProfiles()

    console.log(id)
    const user = profiles.find(res => res.id === id)

    useEffect(() => {
        processTitle(gameChoosed)
    }, [gameChoosed])

    const processTitle = (gameTitleRaw) => {
        if(gameTitleRaw === "RocketLeague"){
            setTitleGame('Rocket League')
        }else if(gameTitleRaw === "LoL"){
            setTitleGame('League of Legends')
        }else if(gameTitleRaw === "CS-GO"){
            setTitleGame('Counter Strike: Global Offensive')
        }else if(gameTitleRaw === "CoD-Warzone"){
            setTitleGame('Call of Duty: Warzone')
        }else if(gameTitleRaw === "FIFA22"){
            setTitleGame('FIFA22')
        }else if(gameTitleRaw === "Valorant"){
            setTitleGame('Valorant')
        }else if(gameTitleRaw === "Fortnite"){
            setTitleGame('Fortnite')
        }else if(gameTitleRaw === "F12021"){
            setTitleGame('F1 2021')
        }else if(gameTitleRaw === "ApexLegends"){
            setTitleGame('Apex Legends')
        }else if(gameTitleRaw === "COD-Mobile"){
            setTitleGame('Call of Duty: Mobile')
        }else if(gameTitleRaw === "Dota2"){
            setTitleGame('DOTA 2')
        }else if(gameTitleRaw === "FreeFire"){
            setTitleGame('Free Fire')
        }else if(gameTitleRaw === "Osu"){
            setTitleGame('Osu!')
        }else if(gameTitleRaw === "Overwatch"){
            setTitleGame('Overwatch')
        }else if(gameTitleRaw === "WildRift"){
            setTitleGame('League of Legends: Wild Rift')
        }
    }

    return (
        <div>
            <div className={`card ${theme} p-3`}>
                <div className="row">
                    <div className="col-2 d-flex align-items-center justify-content-center">
                        <div className="match-card">
                            <img src={!user ? '' : user.avatar.map(res => res.avatar)} alt="" style={borderStyles} className="img-user-match rounded-circle"/>
                        </div>
                    </div>
                    <div className="col-9 px-0">
                        <div className="card-match-title">
                            <h5 className="m-0"><Link to={`/match/${matchId}`} style={{textDecoration: 'none', color: 'rgba(152,11,122,1)'}}>{title}</Link></h5>
                            <div className="user-and-game-matches d-flex">
                                 <small>Listado por: <Link to={user && `/perfil/${user.username}`} style={{textDecoration: 'none'}}>{!user ? '' : user.username}</Link></small>&nbsp;&nbsp;  
                                 {gameChoosed &&
                                     <small>Videojuego: <Link to={`/games/${gameChoosed}`} style={{textDecoration: 'none'}}>{titleGame}</Link></small>
                                 }
                            </div>  
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

export default MatchCard