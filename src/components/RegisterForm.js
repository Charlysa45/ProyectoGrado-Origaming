import React, { useState } from 'react'
import RegisterService from '../services/RegisterService';
import Loader from './Loader';

let styles = {
    color: "#dc3545"
}

const RegisterForm = ({children}) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [token, setToken] = useState('')
    const [user, setUser] = useState('')

    const [loading, setLoading] = useState(false);
    const [confirm, setConfirm] = useState(null);
    const [response, setResponse] = useState(null);

    const [confirmCode, setConfirmCode] = useState(null)
    const [code, setCode] = useState(null)

    const [error, setError] = useState(null)

    const [activeForm, setActiveForm] = useState(true);
    
    
    const handleRegister = async (e) =>{
        e.preventDefault();
        const confirmCode = Math.round(Math.random()*999999)
        setConfirmCode(confirmCode)
        
        const newUser = {
            username,
            email,
            password,
            confirmCode
        }

        setActiveForm(false) 
        setLoading(true)
        try {
            const user = await RegisterService.register(newUser)
            const {token} = user
            setUser(user)
            setToken(token)

            setLoading(false)
            setConfirm(true)
            
        } catch (error) {
            console.error(error)
            setError(true)
            setLoading(false)
            setActiveForm(true)
        }
        
    }
    
    const handleConfirm = async (e) => {
        e.preventDefault();

        setLoading(true)
        if(confirmCode === code){
            try{
                window.localStorage.setItem(
                    'loggedUserOnApp', JSON.stringify(user)
                    )
                
                await RegisterService.newProfile({token}).then(res => {
                    RegisterService.newAvatar({token}).then(res => {
                        RegisterService.newBanner({token})
                    })
                }).catch(err => console.error(err))

                setConfirm(false)
                setLoading(false)
                setResponse(true)
                setTimeout(() => {
                   window.location.reload() 
                }, 1500);
                
                setUsername('')
                setEmail('')
                setPassword('')
                setConfirmPassword('')

            }catch(err){
                setError('Oops, algo ha salido mal')
            }
        }else{
            setError('El número no coincide')
        }
    }
    
    return (
        
        <div className="bg-dark text-white">
            {activeForm && 
               <div class="register-body">
               <div class="text-center">
               <h4 class="mt-1 mb-5 pb-1">¡Regístrate!</h4>
               </div>
   
               <form onSubmit={handleRegister}>
                   <p>Por favor ingresa tus datos:</p>

                   <div class="form-outline mb-4">
                       <input type="text" name="username" class="form-control" placeholder="Con este nombre te conocerán todos en Origaming" onChange={({target}) => setUsername(target.value)} value={username} required/>
                       <label class="form-label">Nombre de usuario</label>
                       {error && <small className="ms-2" style={styles}>{error}</small>}
                   </div>
   
                   <div class="form-outline mb-4">
                       <input type="text" name="email" class="form-control" onChange={({target}) => setEmail(target.value)} value={email} required/>
                       <label class="form-label">Correo Electrónico</label>
                       {error && <small className="ms-2" style={styles}>{error}</small>}
                   </div>
   
                   <div class="form-outline mb-4">
                       <input type="password" name="password" class="form-control" onChange={({target}) => setPassword(target.value)} value={password} required/>
                       <label class="form-label">Contraseña</label>
                       {error && <small className="ms-2" style={styles}>{error}</small>}
                   </div>
   
                   <div class="form-outline mb-4">
                       <input type="password" name="confirmPassword" class="form-control" onChange={({target}) => setConfirmPassword(target.value)} value={confirmPassword} required/>
                       <label class="form-label" for="form2Example22">Confirmar contraseña</label>
                       {error && <small className="ms-2" style={styles}>{error}</small>}
                   </div>

                   <div class="text-center pt-1 mb-3 pb-1">
                       <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Entra aquí</button>
                       <div className="d-flex justify-content-center pb-4">
                       <a class="text-muted" href="#!">¿olvidaste tu contraseña?</a>
                   </div>
                   </div>
               </form>
               {children}
           </div> 
            }
            {loading && <Loader/>} 
            {confirm &&
            <div className="container" style={{textAlign: 'center'}}>
                <h2>¡Ya casi estás, {username}!</h2>
                <p>A tu correo hemos enviado un código de verificación. Escríbelo a continuación para acceder a Origaming</p>
                <form onSubmit={handleConfirm} className="d-flex">
                    <input type="text" name="" id="" placeholder="código de 6 cifras" className="form-control" onChange={e => setCode(parseInt(e.target.value))}/>
                    <button type="submit" className="btn btn-success">Enviar</button>
                </form>
                {error && <small className="ms-2" style={styles}>{error}</small>}
            </div> 
            }
            {response && <h1>¡Usuario creado correctamente!</h1>}
        </div>
    )
}

export default RegisterForm
