import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(null);
    
    const [changeForm, setChangeForm] = useState(false);
    
    
    useEffect(() => {
        const loggedUser = window.localStorage.getItem('loggedUserOnApp')
        if(loggedUser){
            const user = JSON.parse(loggedUser)
            setAuth(user)
        }
    }, [])
    
    const [dropdown, setDropdown] = useState(false);

    const handleDropdown = () => {
        setDropdown(!dropdown);
    }

    const logout = () => {
        window.localStorage.removeItem('loggedUserOnApp')
        window.location.reload()
    }

    const handleChangeForm = () => {
        setChangeForm(!changeForm)
    }

    const data = {auth, setAuth, dropdown, handleDropdown, logout, changeForm, handleChangeForm};
    
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}
export {AuthProvider}
export default AuthContext

