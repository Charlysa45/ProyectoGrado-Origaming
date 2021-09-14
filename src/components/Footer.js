import React from 'react'
import { AiFillFacebook, AiFillTwitterCircle } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div class="footer-basic">
                <div class="social">
                    <span>Nuestras redes: </span>
                    <a href="https://www.facebook.com/AincradCafe" target="_blank"><AiFillFacebook/></a>
                    <a href="#"><AiFillTwitterCircle/></a>
                    <a href="#"><FaDiscord/></a>
                </div>
                <ul class="list-inline">
                    <li class="list-inline-item"><a href="#">Términos y Condiciones</a></li>
                    <li class="list-inline-item"><span> | </span></li>
                    <li class="list-inline-item"><a href="#">Política de Privacidad</a></li>
                    <li class="list-inline-item"><span> | </span></li>
                    <li class="list-inline-item"><a href="#">Sobre Origaming</a></li>
                </ul>
                <p class="copyright">Copyright 2021</p>
            </div>
            
        </footer>
    )
}

export default Footer
