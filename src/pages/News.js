import React from 'react'
import './news.css'
import Imagenes from '../components/Imagenes'
import {Link} from "react-router-dom"

function News() {
    return (
        <div className="App">


  <div class="album py-5 bg-light">
    <div class="container py-3">
    <h1>Novedades</h1>
    <hr className="barra-news rounded-pill"/>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      
        <div class="col">
          <div class="card shadow-sm">
            <a href="#">
                <img className="card-img-top" src={Imagenes.ImgHaloNews} alt="" />
              </a>
            <div class="card-body">
                <a className="card-title fs-5" href="#">¡Halo Infinite y su nuevo avance en Gamescome 2021!</a>
              <p class="card-text pt-2">Un nueva nueva cinemática del nuevo juego de la popular saga Halo se ha dejado ver en el streaming de Gamescom de año. </p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted pt-3">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <a href="#">
                <img className="card-img-top" src={Imagenes.ImgRRNews} alt="" />
              </a>
            <div class="card-body">
            <a className="card-title fs-5" href="#">¡La Beta de Riders Republics estará abierta hasta el 28 de Agosto!</a>
              <p class="card-text pt-2">El caótico videojuego inpirado en los deportes extremos e Ubisoft lanza su beta y estará disponible hasta el 28 de Agosto.</p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted pt-3">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <a href="#">
                <img className="card-img-top" src={Imagenes.ImgGamesCome} alt="" />
              </a>
            <div class="card-body">
            <a className="card-title fs-5" href="#">La Gamescome ha tenido lugar y estas han sido sus novedades.</a>
              <p class="card-text">Una de las conferencias de videojuegos más importantes del mundo ha tenido lugar los pasados lunes y martes y esto ha traido consigo.</p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
          <Link to="/news/articleXboxGamescome">
                <img className="card-img-top" src={Imagenes.ImgGCXboxNews} alt="" />
              </Link>
            <div class="card-body">
            <Link to="/news/articleXboxGamescome" className="card-title fs-5">Gamescome: La conferencia de Xbox y su rotundo éxito.</Link>
              <p class="card-text">Los expertos aseguran que la conferencia de la consola verde ha sido un rotundo éxito y se lleva el premio a la mejor de esta Gamescome 2021</p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
              <a href="#">
                <img className="card-img-top" src={Imagenes.ImgB4BNews} alt="" />
              </a>
            <div class="card-body">
            <a className="card-title fs-5" href="#">¡La Beta Abierta de Back 4 Blood ya está disponible!</a>
            <a className="card-title fs-5"></a>
              <p class="card-text pt-2">Hasta el 16 de agosto los jugadores podrán probar al "sucesor espirituaL" de Left 4 Dead de forma gratuita.</p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted pt-5">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <a href="#">
                <img className="card-img-top" src={Imagenes.ImgRLNews} alt="" />
              </a>
            <div class="card-body">
            <a className="card-title fs-5" href="#">¡La temporada 4 de Rocket League ya está aquí!</a>
              <p class="card-text pt-2">Un mapa nuevo, un battle pass renovado, nuevos torneos 2c2 y más acompañan esta nueva temporada del popular juego de Psyonix</p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted pt-4">9 mins</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
          <a href="#">
                <img className="card-img-top" src={Imagenes.ImgFallGuysNews} alt="" />
              </a>
            <div class="card-body">
            <a className="card-title fs-5" href="#">¡Fall Guys revive y su número de jugadores asciende como la espuma!</a>
              <p class="card-text">Llegó la temporada 5 de los maníes saltarines y le dio un aire totalmente fresco al juego.</p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <a href="#">
                <img className="card-img-top" src={Imagenes.ImgPkmnNews} alt="" />
              </a>
            <div class="card-body">
            <a className="card-title fs-5" href="#">¡Así es el nuevo y divertido MOBA de Pokémon!</a>
              <p class="card-text pt-2">Duelos por equipos... ¡conformados por Pokémon de todo tipo! El nuevo juego de Pokémon que la está rompiendo en las App Stores.</p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted pt-4">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <a href="#">
                <img className="card-img-top" src={Imagenes.ImgCODW} alt="" />
              </a>
            <div class="card-body">
            <a className="card-title fs-5" href="#">Hay retrasos en el lanzamiento de la Temporada 5 de COD: Warzone</a>
              <p class="card-text">Habrá que esperar 24 horas más para disfrutar de la nueva temporada de este battle royale.</p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
    )
}

export default News
