import { createContext, useEffect, useState } from "react"
import GameService from "../../services/GameService";
import ProfileService from "../../services/ProfileService";

const ApiContext = createContext();

const ApiProvider = ({children}) => {

    const [allMatches, setAllMatches] = useState([])
    const [allGames, setAllGames] = useState([])
    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        GameService.getGlobalMatches()
        .then(res => {
            const reverse = res.reverse()
            setAllMatches(reverse)
        })
        GameService.getGame()
        .then(res => {
            console.log(res)
            setAllGames(res)
        })
        ProfileService.getProfile()
        .then(res => {
            setAllUsers(res)
        })
    }, [])

    const data={allMatches, setAllUsers, allGames, allUsers}

    return <ApiContext.Provider value={data}>{children}</ApiContext.Provider>
}
export {ApiProvider}
export default ApiContext
