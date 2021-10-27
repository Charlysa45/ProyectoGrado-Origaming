import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from '../pages/Home.js'
import Login from '../pages/Login.js'
import Navbar from './Navbar.js'
import Noticias from '../pages/News'
import Articulo from '../pages/Article'
import Juegos from '../pages/Games'
import Oriteams from '../pages/Oriteams'
import Profile from '../pages/Profile.js'
import {AvatarProvider} from './context/AvatarContext'
import GamePage from '../pages/GamePage.js'
import MatchPage from '../pages/MatchPage.js'
import { ApiProvider } from './context/ApiContext.js'

const Routes = () => {

    return (
        <div>
            <Router>
                <ApiProvider>
                    <AvatarProvider>
                        <Navbar/>
                        <Switch>
                            <Route exact path="/" component={Home}></Route>
                            <Route exact path="/login" component={Login}></Route>
                            {/* <Route exact path="/news" component={Noticias}></Route> */}
                            <Route exact path="/games" component={Juegos}></Route>
                            <Route path="/games/:GameTag" component={GamePage}></Route>
                            <Route path="/match/:MatchId" component={MatchPage}></Route>
                            {/* <Route exact path="/Oriteams" component={Oriteams}></Route> */}
                            {/* <Route exact path="/news/articleXboxGamescome" component={Articulo}></Route> */}
                            <Route path="/perfil/:userInfo" component={Profile}></Route>
                        </Switch>
                    </AvatarProvider>
                </ApiProvider>
            </Router>
        </div>
    )
}

export default Routes
