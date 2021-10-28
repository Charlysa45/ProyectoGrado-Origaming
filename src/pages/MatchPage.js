import React, { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import io from 'socket.io-client'
import Modal from '../components/Modal'
import AuthContext from '../components/context/AuthContext'
import GameService from '../services/GameService'
import './MatchPage.css'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import { useModal } from '../components/hooks/useModal'

let socketio = io('//sheltered-depths-45281.herokuapp.com', 
    {  
        withCredentials: true,  
        extraHeaders: { "chat-header": "abcd" }
    })

const MatchPage = () => {

    const {auth, changeForm, handleChangeForm} = useContext(AuthContext)

    const[isOpenModal, openModal, closeModal] = useModal(false);

    const [mensaje, setMensaje] = useState("");
    const [mensajes, setMensajes] = useState([]);
    
    const {MatchId} = useParams()
    const [match, setMatch] = useState([])
    const [avatar, setAvatar] = useState(null)
    
    useEffect(() => {
        GameService.getSingleMatch(MatchId)
        .then(res => {
            setMatch(res)
            console.log(res.user)
            GameService.getAvatar(res.user.avatar)
            .then(resp => setAvatar(resp))
        })
    }, [])
    
    useEffect(() => {
        console.log(MatchId)
        if (auth) {
            let matchInfo = {
                username: auth.username,
                matchId: MatchId
            }
            socketio.emit('conectado', matchInfo)
        }else{
           openModal()
        }
    }, [MatchId])

    useEffect(() => {
        socketio.on('mensajes', msg => {
            console.log(msg)
            setMensajes([...mensajes, msg])
        })
        return () => {socketio.off()}
    }, [mensajes])

    const diGref = useRef(null)
    useEffect(() => {
        diGref.current.scrollIntoView({behavior: 'smooth'})
    })


    const submit = (e) => {
        e.preventDefault();

        socketio.emit('mensaje', auth.username, mensaje)
        setMensaje("")
    }

    return (
        <div>
            <div className="bg-light">
                <div className="match-body container" style={{paddingBottom: '15rem'}}>
                    {!auth &&
                        <Modal isOpen={isOpenModal} closeModal={closeModal}>
                 {!changeForm ?
                                <div className="d-block">
                                    <LoginForm>   
                                    <div className="session-handler mb-5 d-flex justify-content-center text-white">
                                        <p className="align-middle mb-0">¿No tienes una cuenta aun?</p>
                                        <button onClick={handleChangeForm} className="btn btn-light ms-2">Registrate</button>
                                    </div>
                                    </LoginForm>   
                                </div>
                                :
                                <div className="d-block">
                                    <RegisterForm>
                                    <div className="session-handler mb-5 d-flex justify-content-center text-white">
                                        <p className="align-middle mb-0">¿Ya tienes una cuenta?</p>
                                        <button onClick={handleChangeForm} className="btn btn-light ms-2">Iniciar Sesión</button>
                                    </div>
                                    </RegisterForm>
                                </div>
                            }
            </Modal>
                    }
                <nav aria-label="breadcrumb">   
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/" style={{textDecoration:'none', color:'purple'}}>Inicio</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Encuentros</li>
                    </ol>
                </nav>
                    <div className="row">
                        <div className="match-info col-6">
                            <div className="match-title">
                                <h1>{!match ? '' : match.title}</h1>
                            </div>
                            <div className="match-description">
                                <p>{!match ? '' : match.description}</p>
                            </div>
                            <div className="match-user">
                                <img src={!avatar ? '' : `https://sheltered-depths-45281.herokuapp.com/${avatar.avatar.replace("public/","")}`} alt="" className="user-match-img rounded-circle m-3"/>
                                <p className="fs-5 mt-4">
                                    Encuentro realizado por: <Link to={`/perfil/${!match.user ? '#' : match.user.username}`}>
                                                                {!match.user ? '' : match.user.username}
                                                            </Link>
                                </p>
                            </div>
                        </div>
                        <div className="match-chat col-6">
                            <h1>Chat</h1>
                                <div className="chat-field">
                                    {mensajes.map((e,i) => 
                                        <div key={i} className="d-flex">
                                            <div style={{color: 'purple'}}>{e.nombre}: &nbsp;</div> 
                                            <div>{e.mensaje} </div>
                                        </div>)}
                                    <div ref={diGref}></div>
                                </div>
                            <form onSubmit={submit}>
                                <div className="resp-field d-flex">
                                <input type="text" className="form-control" value={mensaje} onChange={e => setMensaje(e.target.value)} style={{width: '36rem'}} />
                                    <button className="btn btn-primary">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MatchPage
