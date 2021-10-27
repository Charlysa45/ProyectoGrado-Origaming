import React, { useContext, useEffect, useState } from 'react'
import Imagenes from '../components/Imagenes'
import './Navbar.css'
import {Link} from "react-router-dom"
import Modal from './Modal'
import { useModal } from './hooks/useModal'
import { IoIosArrowDown } from 'react-icons/io'
import { BiLogOut } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import AvatarContext from './context/AvatarContext'
import AuthContext from './context/AuthContext'
import ApiContext from './context/ApiContext'

function Navbar() {

    const[isOpenModal, openModal, closeModal] = useModal(false);

    const {auth, dropdown, handleDropdown, logout, changeForm, handleChangeForm} = useContext(AuthContext)
    const {userProfile, avatarPrev} = useContext(AvatarContext)
    const {allUsers, allGames, allMatches} = useContext(ApiContext)
    const [busqueda, setBusqueda] = useState('')
    const [resultados, setResultados] = useState([])

    const filtrado = (e) => {
      setBusqueda(e.target.value)
      const resultsUsers = allUsers.filter(res => {
          if(res.username.toString().toLowerCase().includes(busqueda.toLowerCase())){
              return res;
          }
      })
      console.log(resultsUsers)
      setResultados(resultsUsers)
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
                <Link className="navbar-brand" to="/">
                    <img src={Imagenes.AppIcon} alt="" className="navbar-brand"/>
                    <img src={Imagenes.AppLogo} alt="" className="navbar-brand-logo"/>
                </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto d-flex align-items-center">
                <li class="nav-item">
                    <Link to="/" className="nav-link">Inicio</Link>
                </li>
                {/* <li class="nav-item">
                    <Link to="/news" className="nav-link">Noticias</Link>
                </li> */}
                <li class="nav-item">
                    <Link to="/games" className="nav-link">Encuentros</Link>
                </li>
                {/* <li class="nav-item">
                    <Link to="/Oriteams" className="nav-link">OriTeams</Link>
                </li> */}
                {auth
                    ?
                    <li class="user-card mx-2">
                        
                            <Dropdown isOpen={dropdown} toggle={handleDropdown}>
                                <DropdownToggle color="primary" className="user-button">
                                    {!avatarPrev ?
                                        <img src={!userProfile ? '' : `https://sheltered-depths-45281.herokuapp.com/${userProfile.avatar.map(res => res.avatar.replace("public/",""))}`} alt="" className="user-avatar rounded-circle me-2" />
                                            :
                                        <img src={avatarPrev} alt="" className="user-avatar rounded-circle me-2"/>
                                    }
                                    {auth.username}  <IoIosArrowDown/>
                                </DropdownToggle>

                                <DropdownMenu>
                                    <Link to={`/perfil/${auth.username}`}>
                                        <DropdownItem>
                                            <CgProfile/> Mi perfil
                                        </DropdownItem>
                                    </Link>
                                    <DropdownItem divider />
                                    <DropdownItem onClick={logout}><BiLogOut/> Cerrar Sesión</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                    </li>
                    :
                    <li class="nav-item">
                        <button href="#" className="btn btn-light me-2 ms-1" onClick={openModal}>Login</button>
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
                    </li>
                }
            </ul>
            <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Buscar" onChange={filtrado} value={busqueda}></input>
        <button class="btn btn-dark" type="submit">Buscar</button>
        <div className="search-results">
            {busqueda &&
                <ul class="list-group">
                    {!resultados.length ? 
                        <li class="list-group-item">
                        <div className="user-result d-flex justify-content-center align-items-center">
                            <p className="text-muted m-0">Sin resultados :'(</p>
                        </div>
                    </li>
                    :
                    resultados.map(res => 
                        <li key={res.id} class="list-group-item">
                            <div className="user-result row">
                                <div className="user-result-img col-3">
                                    <Link to={`/perfil/${res.username}`} onClick={() => setBusqueda('')}>
                                        <img 
                                        src={`https://sheltered-depths-45281.herokuapp.com/${res.avatar.map(resp => resp.avatar.replace("public/",""))}`} 
                                        alt="" style={{width:'70px', borderRadius: '20px'}}/>
                                    </Link>
                                </div>
                                <div className="user-result-info col-9">
                                    <Link to={`/perfil/${res.username}`} onClick={() => setBusqueda('')} style={{color:'purple', textDecoration:'none'}}>
                                        <p className="m-0" style={{fontSize: '20px'}}>{res.username}</p>
                                    </Link>
                                    <p className="m-0 d-flex">
                                        <p className="m-0" style={{fontSize: '15px'}}>País:</p>&nbsp; 
                                        <p className="m-0 alt-font">{res.profile.map(res => res.country)}</p>
                                    </p>
                                    <p className="m-0 d-flex">
                                        <p className="m-0" style={{fontSize: '15px'}}>Juego Favorito:</p>&nbsp;   
                                        <p className="m-0 alt-font">{res.profile.map(res => res.favGame)}</p>
                                    </p>
                                </div>
                            </div>
                        </li>
                        )
                    }
                    
                </ul>
            }
        </div>
        </form>
            </div>
        </div>
        </nav>
    )
}

export default Navbar

