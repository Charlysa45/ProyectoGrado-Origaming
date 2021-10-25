import { useEffect, useState } from "react";
import ProfileService from "../../services/ProfileService";


export function useProfiles () {
    const [profiles, setProfiles] = useState([])
    
    
    useEffect(() => {
        ProfileService.getProfile()
        .then(initialProfiles => {
            setProfiles(initialProfiles)
        })
    }, [])
    
    

    return{
        profiles
    }
}