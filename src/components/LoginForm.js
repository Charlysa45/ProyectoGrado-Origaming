import React, { useEffect, useState } from 'react';
import LoginService from '../services/LoginService';
import { useProfiles } from './hooks/useProfiles';
import Loader from './Loader';

const LoginForm = ({children}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    
    const [error, setError] = useState(null)
    
    const [activeForm, setActiveForm] = useState(true);
    
    let styles = {
        color: "#dc3545"
    }    

    const handleLogin = async (e) =>{
        e.preventDefault();
        
        setActiveForm(false) 
        setLoading(true)
        try {
            const user = await LoginService.login({
                username,
                password
            })
            window.localStorage.setItem(
                'loggedUserOnApp', JSON.stringify(user)
            )
            setLoading(false)
            setResponse(true)
            setTimeout(() => {
               window.location.reload() 
            }, 1500);
            
            setUsername('')
            setPassword('')
        } catch (error) {
            console.error(error)
            setError(true)
            setLoading(false)
            setActiveForm(true)
        }

    }

    return (
        <div>
            {activeForm && 
                <div class="card-body p-md-5 mx-md-4 ">
                <div class="text-center">
                <h4 class="mt-1 mb-4 pb-1 text-white">¡Loguéate!</h4>
                </div>

                <form onSubmit={handleLogin}>
                    <p>Por favor ingresa tus datos:</p>

                    <div class="form-outline mb-4">
                        <input type="text" name="username" class="form-control" onChange={({target}) => setUsername(target.value)} value={username}/>
                        <label class="form-label text-white" for="form2Example11">Nombre de usuario</label>
                    </div>

                    <div class="form-outline mb-4">
                        <input type="password" name="password" class="form-control" onChange={({target}) => setPassword(target.value)} value={password}/>
                        <label class="form-label text-white" for="form2Example22">Contraseña</label>
                    </div>

                    {error && 
                        <div className="error-msg mb-1 d-flex justify-content-center">
                            <small className="ms-2" style={styles}>Usuario y/o Contraseña incorrectos*</small>       
                        </div>
                    }
                    
                    <div class="text-center pt-1 mb-3 pb-1">
                        {loading ? <Loader/> : <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Entra aquí</button>}
                        <div className="d-flex justify-content-center pb-4">
                            <a class="text-muted" href="#!">¿olvidaste tu contraseña?</a>
                        </div>
                    </div>
                </form>
                {children}
            </div>
            }
            {loading && <Loader/>}
            {response && 
            <h2 className="text-white">¡Bienvenido a Origaming!</h2>
            } 
        </div>
    )
}

export default LoginForm
