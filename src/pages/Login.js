
import React, { useEffect, useState }from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import "./Login.css"

    
const Login = () => {

    const [form, setForm] = useState(false);

    const changeForm = () => setForm(form == true)

    return (
        <section class="background-overlay h-100 gradient-form">
        <div class="container py-5 h-100">
            <div class=" row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
                <div class="login-card rounded-3 text-white">
                <div class="row g-0">
                    <div class="col-lg-6 bg-dark text-light">
                        <RegisterForm />
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