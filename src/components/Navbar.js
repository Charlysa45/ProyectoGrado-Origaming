import React from 'react'
import Imagenes from '../components/Imagenes'
import './Navbar.css'
import {Link} from "react-router-dom"


function Navbar() {
    return (
        

            <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
            <a className="navbar-brand" href="#">
                <Link to="/">
                    <img src={Imagenes.AppIcon} alt="" className="navbar-brand"/>
                    <img src={Imagenes.AppLogo} alt="" className="navbar-brand-logo"/>
                </Link>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <Link to="/" className="nav-link">Inicio</Link>
                </li>
                <li class="nav-item">
                    <Link to="/news" className="nav-link">Noticias</Link>
                </li>
                <li class="nav-item">
                    <Link to="/games" className="nav-link">Videojuegos</Link>
                </li>
                <li class="nav-item">
                    <Link to="/Oriteams" className="nav-link">OriTeams</Link>
                </li>
                <li class="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
            </ul>
            <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
        <button class="btn btn-dark" type="submit">Buscar</button>
        </form>
            </div>
        </div>
        </nav>
    )
}

export default Navbar

