import { createContext, useContext, useState } from "react";
import ProfileService from "../../services/ProfileService";
import { useProfiles } from "../hooks/useProfiles";
import AuthContext from "./AuthContext";

const AvatarContext = createContext();


const AvatarProvider = ({children}) => {
    
    const {profiles} = useProfiles()
    const user  = window.localStorage.getItem('loggedUserOnApp')
    const username = JSON.parse(user)
   
    const [avatar, setAvatar] = useState(null)
    const [avatarPrev, setAvatarPrev] = useState(null)
    
    let userProfile = null
    let userMatches = null

    const [avatarEdit, setAvatarEdit] = useState(false);

    const {auth} = useContext(AuthContext)

    if (auth) {
        userProfile = profiles.find(res => res.username === username.username)
        if(userProfile){
            userMatches = userProfile.matches
        }
    }
    const handleGamesList = ({newGamesList}) => {
        userMatches = newGamesList
    }

    function processAvatarImage(e){
        setAvatarEdit(!avatarEdit)
        const imageFile = e.target.files[0];
        const imageUrl = URL.createObjectURL(e.target.files[0]);
        setAvatarPrev(imageUrl)
        setAvatar(imageFile)
    }

    const cancelUpdateAvatar = () => {
        setAvatarPrev(!avatarPrev)
        setAvatarEdit(!avatarEdit)
    }
    
    const updateAvatar = async (e) => {
        const avatarId = userProfile.avatar.map(res => res.id)
        await ProfileService.updateAvatar(
            avatarId,
            avatar
        ).then(res => {
            setAvatar(res)
            setAvatarEdit(!avatar)
        })
        .catch(error =>(console.error(error)))
    }

    
    const data = {userProfile, userMatches, handleGamesList, updateAvatar, avatarPrev, processAvatarImage, avatarEdit, setAvatarEdit, cancelUpdateAvatar};

    return <AvatarContext.Provider value={data}>{children}</AvatarContext.Provider>
}
export {AvatarProvider}
export default AvatarContext