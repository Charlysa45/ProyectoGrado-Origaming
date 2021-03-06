import { createContext, useEffect, useState } from "react"
import GameService from "../../services/GameService";
import ProfileService from "../../services/ProfileService";
import TeamService from "../../services/TeamService";

const ApiContext = createContext();

const ApiProvider = ({children}) => {

    const [allMatches, setAllMatches] = useState([])
    const [allGames, setAllGames] = useState([])
    const [allUsers, setAllUsers] = useState([])
    const [allTeams, setAllTeams] = useState([])

    useEffect(() => {
        GameService.getGlobalMatches()
        .then(res => {
            const reverse = res.reverse()
            setAllMatches(reverse)
        })
        GameService.getGame()
        .then(res => {
            setAllGames(res)
        })
        ProfileService.getProfile()
        .then(res => {
            setAllUsers(res)
        })
        TeamService.getTeams()
        .then(res => {
            setAllTeams(res)
        })
    }, [])

    const data={allMatches, setAllUsers, allGames, allUsers, allTeams}

    return <ApiContext.Provider value={data}>{children}</ApiContext.Provider>
}
export {ApiProvider}
export default ApiContext
