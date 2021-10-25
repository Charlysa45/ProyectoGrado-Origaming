import React, { useEffect, useState } from 'react'
import GameService from '../services/GameService'

const MatchForm = ({children}) => {
    
    const [game, setGame] = useState('');
    const [gameChoosed, setGameChoosed] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        GameService.getGame()
        .then(res => {
            const Game = res.find(resp => resp.title === gameChoosed) 
            setGame(Game)
        })
    }, [gameChoosed])

    const postMatch = (e) => {
        e.preventDefault();

        let now = new Date()
        var fecha = now.getDate() + '-' + (now.getMonth()+1)+ '-' + now.getFullYear()

        let newGame ={
            gameId: game,
            gameChoosed: gameChoosed,
            title: title,
            description: description,
            date: fecha 
        }

        const user = window.localStorage.getItem('loggedUserOnApp')
        const {token} = JSON.parse(user)

       GameService.makeGame({token},newGame)
       .then(res => {
           setGame('')
           setDescription('')
           setTitle('')
            window.location.reload()
        })
    }

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleChooseGame = (e) => {
        setGameChoosed(e.target.value)
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }


    return (
        <div className="bg-dark text-white m-5">
            <h2 className="mb-5">¡Crea un encuentro de juego!</h2>
             <div className="match-form-body">
                <form onSubmit={postMatch}>
                    <div className="form-outline mb-4">
                        <select onChange={handleChooseGame} name="countries" id="match-game-select" className="form-select text-dark">
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
                        <label className="form-label">Videojuego al que quieres jugar</label>
                    </div>

                    <div class="form-outline mb-4">
                        <input onChange={handleTitle} type="text" name="username" class="form-control"/>
                        <label className="form-label">Título</label>
                    </div>

                    <div class="form-outline mb-4">
                        <textarea onChange={handleDescription} type="text" name="username" class="form-control" placeholder="Describe tu encuentro de juego ;)"/>
                        <label className="form-label">Descripción</label>
                    </div>
                    {children}
                </form>
             </div>
        </div>
    )
}

export default MatchForm
