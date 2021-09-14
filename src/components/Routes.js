import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from '../pages/Home.js'
import Login from '../pages/Login.js'
import Navbar from './Navbar.js'
import Noticias from '../pages/News'
import Articulo from '../pages/Article'
import Juegos from '../pages/Games'
import Oriteams from '../pages/Oriteams'

function Routes() {
    return (
        <div>
            <Router>
            <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/news" component={Noticias}></Route>
                    <Route exact path="/games" component={Juegos}></Route>
                    <Route exact path="/Oriteams" component={Oriteams}></Route>
                    <Route exact path="/news/articleXboxGamescome" component={Articulo}></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Routes
