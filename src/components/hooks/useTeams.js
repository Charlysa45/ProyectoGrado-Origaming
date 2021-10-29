import { useEffect, useState } from "react";
import TeamService from "../../services/TeamService";

export function useTeams () {
    const [teams, setTeams] = useState([])
    
    useEffect(() => {
        TeamService.getTeams()
        .then(initialTeams => {
            setTeams(initialTeams)
        })
    }, [])

    return{
        teams
    }
}

