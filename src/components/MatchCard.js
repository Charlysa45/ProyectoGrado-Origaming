import React from 'react'
import { Link } from 'react-router-dom'
import { useProfiles } from './hooks/useProfiles'
import './MatchCard.css'

let borderStyles ={
    'border-radius':'25px'
}

const MatchCard = ({date, title, descrip, id, matchId, gameTag}) => {

    const {profiles} = useProfiles()

    const user = profiles.find(res => res.id === id)

    return (
        <div>
            <div className="card p-3">
                <div className="row">
                    <div className="col-2 d-flex align-items-center justify-content-center">
                        <div className="match-card">
                            <img src={!user ? '' : `http://localhost:3001/${user.avatar.map(res => res.avatar.replace("public/",""))}`} alt="" style={borderStyles} className="img-user-match rounded-circle"/>
                        </div>
                    </div>
                    <div className="col-9 px-0">
                        <div className="card-match-title">
                            <h5 className="m-0"><Link to={`/match/${matchId}`} style={{textDecoration: 'none', color: 'rgba(152,11,122,1)'}}>{title}</Link></h5>  
                            <small>Listado por: <Link to={user && `/perfil/${user.username}`} style={{textDecoration: 'none'}}>{!user ? '' : user.username}</Link></small>  
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