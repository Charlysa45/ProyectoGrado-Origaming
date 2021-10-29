import React, { useState } from 'react'
import TeamService from '../services/TeamService';

const TeamForm = ({children}) => {

    const [gameChoosed, setGameChoosed] = useState('');
    const [teamName, setTeamName] = useState('');
    const [description, setDescription] = useState('');

    const postMatch = (e) => {
        e.preventDefault();

        const user = window.localStorage.getItem('loggedUserOnApp')
        const {token} = JSON.parse(user)

        let newTeam ={
            teamName: teamName,
            gameChoosed: gameChoosed,
            description: description
        }

       TeamService.makeTeam({token},newTeam)
       .then(res => {
           setDescription('')
           setTeamName('')
           const teamId = res.id
           TeamService.newTeamAvatar({token}, teamId)
           .then(res => {
               TeamService.newTeamBanner({token}, teamId)
           })
        })
    }

    const handleTeamName = (e) => {
        setTeamName(e.target.value)
    }
    const handleChooseGame = (e) => {
        setGameChoosed(e.target.value)
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    return (
        <div className="bg-dark text-white py-3">
            <h2 className="mb-5 pt-5">¡Crea un nuevo equipo de E-Sports!</h2>
             <div className="match-form-body">
                <form onSubmit={postMatch}>
                    <div className="form-outline mb-4">
                        <select onChange={handleChooseGame} name="countries" id="match-game-select" className="form-select text-dark" required>
                            <option value="COD-Mobile">COD: Mobile</option>
                            <option value="CoD-Warzone">COD: Warzone</option>
                            <option value="CS-GO">CS:GO</option>
                            <option value="Dota2">Dota 2</option>
                            <option value="Fortnite">Fortnite</option>
                            <option value="FreeFire">Free Fire</option>
                            <option value="LoL">League of Legends</option>
                            <option value="Osu">Osu!</option>
                            <option value="Overwatch">Overwatch</option>
                            <option value="RocketLeague">Rocket League</option>
                            <option value="Valorant">VALORANT</option>
                            <option value="WildRift">Wild Rift</option>
                        </select>
                        <label className="form-label">Videojuego al que tu equipo se enfocará</label>
                    </div>

                    <div class="form-outline mb-4">
                        <input onChange={handleTeamName} type="text" name="username" class="form-control" placeholder="Escribe el nombre de tu equipo" required/>
                        <label className="form-label">Nombre del equipo</label>
                    </div>

                    <div class="form-outline mb-4">
                        <textarea onChange={handleDescription} type="text" name="username" class="form-control" placeholder="Describe las cualidades de tu equipo" required/>
                        <label className="form-label">Descripción</label>
                    </div>
                    {children}
                </form>
             </div>
        </div>
    )
}

export default TeamForm
