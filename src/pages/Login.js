import React, { useState }from 'react';
import "./Login.css"

function LoginForm(){
    return(
        <div class="card-body p-md-5 mx-md-4 ">
            <div class="text-center">
            <h4 class="mt-1 mb-5 pb-1">¡Loguéate!</h4>
            </div>

            <form>
                <p>Por favor ingresa tus datos:</p>

                <div class="form-outline mb-4">
                    <input type="email" id="form2Example11" class="form-control"/>
                    <label class="form-label" for="form2Example11">Nombre de usuario</label>
                </div>

                <div class="form-outline mb-4">
                    <input type="password" id="form2Example22" class="form-control" />
                    <label class="form-label" for="form2Example22">Contraseña</label>
                </div>

                <div class="text-center pt-1 mb-5 pb-1">
                    <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Entra aquí</button>
                    <div className="d-flex justify-content-center pb-4">
                    <a class="text-muted" href="#!">¿olvidaste tu contraseña?</a>
                </div>
                </div>
            </form>
        </div>
    )
    
}

function RegisterForm(){
    return(
        <div class="card-body p-md-5 mx-md-4 ">
            <div class="text-center">
            <h4 class="mt-1 mb-5 pb-1">¡Regístrate!</h4>
            </div>

            <form>
                <p>Por favor ingresa tus datos:</p>

                <div class="form-outline mb-4">
                    <input type="email" id="form2Example11" class="form-control" placeholder="Con este nombre te conocerán todos en Origaming"/>
                    <label class="form-label" for="form2Example11">Nombre de Usuario</label>
                </div>

                <div class="form-outline mb-4">
                    <input type="email" id="form2Example11" class="form-control"/>
                    <label class="form-label" for="form2Example11">Correro Electrónico</label>
                </div>

                <div class="form-outline mb-4">
                    <input type="password" id="form2Example22" class="form-control" />
                    <label class="form-label" for="form2Example22">Contraseña</label>
                </div>

                <div class="form-outline mb-4">
                    <input type="password" id="form2Example22" class="form-control" />
                    <label class="form-label" for="form2Example22">Confirmar contraseña</label>
                </div>


                <div class="text-center pt-1 mb-5 pb-1">
                    <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Entra aquí</button>
                    <div className="d-flex justify-content-center pb-4">
                    <a class="text-muted" href="#!">¿olvidaste tu contraseña?</a>
                </div>
                </div>
            </form>
        </div>
    )
}

function Login() {

    const [form, setForm] = useState(true);

    const changeForm = () => setForm(form == false)

    return (
        <section class="background-overlay h-100 gradient-form">
        <div class="container py-5 h-100">
            <div class=" row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
                <div class="login-card rounded-3 text-white">
                <div class="row g-0">
                    <div class="col-lg-6 bg-dark text-light">
                        {form ? <LoginForm/> : <RegisterForm/>}
                        <div class="d-flex align-items-center justify-content-center pb-4">
                         <p class="mb-0 me-2">¿No tienes una cuenta aún?</p>
                        <button onClick={changeForm} type="button" class="btn btn-light">¡Créate una!</button>
                        </div>
                    </div>
                    <div class="col-lg-6 d-flex py-4 px-3 bg-light">
                    <div class="gradient-custom-2">
                        <div className="text-content">
                            <h4 class="mb-5 fs-1">¿Qué es Origaming?</h4>
                            <p class="mb-2">Estás a punto de entrar en una tierra única, donde la única y principal obligación que tienes es... ¡Jugar!</p>
                            <p className="mb-2">¡Entérate de todas las novedades dentro del escenario del gaming competitivo! Así podrás apoyar a tu e-team favorito y ¿quién sabe? quizpas incluso participes en torneos oficiales.</p>
                            <p className="mb-2">¡Organiza tus propias partidas e invita a amigos a jugar! Qué mejor que Origaming para buscar con quién jugar en un dia aburrido.</p>
                            <p className="mb-2">¡Crea tu propio club de Esports en el apartado de "OriTeams"! Reúne jugadores, forma equipos para diferentes juegos y haz crecer la popularidad de tu equipo con cada victoria.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
</section>
    )
}

export default Login