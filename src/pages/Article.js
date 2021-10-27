import React, { useContext } from 'react'
import Imagenes from '../components/Imagenes'
import Comments from '../components/Comments'
import './Article.css'
import {AiOutlineHeart, AiOutlineShareAlt} from 'react-icons/ai'
import {FaRegCommentDots} from 'react-icons/fa'
import AvatarContext from '../components/context/AvatarContext'

function Article() {

    const {profile, avatarPrev} = useContext(AvatarContext)
    return (
        <div className="App">
            <header className="news-header">
                <div className="container">
                    <div className="row">
                        <div className="header-content text-center pb-5">
                            <h1 className="text-light">Gamescome: La conferencia de Xbox y su rotundo éxito.</h1>
                        </div>
                    </div>
                </div>
            </header>

            <section className="bg-light">
                <div className="container py-3">
                    <div className="row">
                        <div className="Header-article d-flex">
                            <div className="col-md-1 pb-3">
                                <img src={Imagenes.LogoBDS} className="list-img rounded-circle" alt="..."/>
                            </div>
                            <div className="col-md-2 align-self-center ps-2">
                                <div class="fw-bold">Escrito por: Carlos Rincón</div>

                                <small className="calendar-icon mb-1 text-muted">25/08/2021</small>
                            </div>
                        </div>
                        <hr className="barra-news rounded-pill"/>
                        <div className="body-article fs-5 px-5 fw-light">
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aliquid dolores, nesciunt dolore animi, vero adipisci provident aut similique blanditiis eligendi minus quaerat error exercitationem laboriosam dolorum suscipit. Dolore alias animi commodi sed! Hic quidem maiores vel eligendi tempora qui dolor totam, natus officia cumque, iure exercitationem magnam! Eius amet quisquam hic deserunt culpa. Corporis accusamus illo nobis nisi cum ut officiis, modi hic aut laborum incidunt enim. Provident, ipsam. Hic illum necessitatibus, cum dolor, a nostrum quas natus impedit ullam id vitae, quidem mollitia voluptatum quibusdam rem ex. Quidem aperiam dolorum in voluptas! Dolorum, laboriosam cupiditate! Itaque, assumenda sunt!</p>

                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus in consectetur, cupiditate adipisci nemo possimus qui voluptate consequatur libero nobis voluptates vel error laboriosam rerum. Architecto rerum et eveniet similique!r</p>

                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt natus maxime nihil quisquam. Quidem, odit explicabo? Vero maxime cum placeat doloribus nihil delectus maiores impedit sint, dignissimos modi, minima saepe labore harum dolores. Quia reprehenderit earum, ut suscipit cum consectetur maxime quasi praesentium eveniet fugit dignissimos, architecto beatae eum corporis eaque placeat provident vel incidunt quod numquam neque dolor ex. Aliquam itaque impedit sint molestiae ab? Esse ea excepturi sit! Numquam alias harum consequatur aliquid? Fugiat eligendi facilis voluptatem, assumenda sint aspernatur. In deleniti ad perspiciatis, est quibusdam ea provident excepturi quae distinctio atque amet reiciendis praesentium expedita nobis, maiores dignissimos pariatur ipsa aliquam voluptate vitae at a quasi commodi. Atque delectus quas mollitia pariatur laborum autem unde magnam possimus.</p>
                        </div>
                        <div className="reaction-icons">
                            <div className="row justify-content-start">
                                <div className="col-1">
                                    <p><AiOutlineHeart/></p>
                                </div>
                                <div className="col-1">
                                    <p><FaRegCommentDots/></p>
                                </div>
                                <div className="col-1">
                                    <p><AiOutlineShareAlt/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="comment-box py-3">
                        <div className="section-title-news">
                            <h1 className="link ms-3 me-3 mt-1 mb-2 fs-5">
                                Comentarios:
                            </h1>
                        </div>
                        <div className="flex-row py-4 align-items-start d-flex">
                                <div className="p-2">
                                    <div className="avatar-user">
                                        {!avatarPrev ?
                                            <img src={!profile ? '' : `https://sheltered-depths-45281.herokuapp.com/${profile.avatar.map(res => res.avatar.replace("public/",""))}`} alt="" className="avatar-icon"/>
                                                :
                                            <img src={avatarPrev} alt="" className="avatar-icon" />
                                        }
                                    </div>
                                </div>
                                <div className="col-9 p-2 w-75">
                                    <input type="text" className="form-control" placeholder="Escribenos tu comentario..."/>
                                </div>
                        </div>
                        <Comments/>
                        <Comments/>
                        <Comments/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Article
