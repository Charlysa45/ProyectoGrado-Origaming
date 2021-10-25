import { useCallback, useContext } from 'react'
import AuthContext from '../context/AuthContext'

export default function useUser() {
    const {auth, setAuth} = useContext(AuthContext)

    const login = useCallback(() =>{
        setAuth('test')
    },[setAuth])

    return{
        isLogged: Boolean(auth),
        login
    }
}


