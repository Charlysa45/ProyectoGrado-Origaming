import React from 'react'
import Imagenes from './Imagenes'
import {IoIosArrowUp} from 'react-icons/io'
import {BsDot} from 'react-icons/bs'

function Comments() {
    return (
        <div className="App">
             <div className="comments flex-row  align-items-start d-flex">
                <div className="p-2">
                    <div className="avatar-user">
                        <img src={Imagenes.LogoQueso} className="avatar-icon" />
                    </div>
                </div>
                <div className="col-9 p-2">
                    <div className="header-comment flex-row d-flex">
                            <div className="user-tag">
                                <p className="fw-bold mb-0">Maturexsu-desu</p> 
                            </div>
                        <div className="ms-1">
                            <p className="text-muted mb-0"><BsDot/></p>
                        </div>
                        <div className="ms-1">
                            <small className="time-comment text-muted mb-0">Hace un rato</small>
                        </div>
                    </div>
                    <div className="user-comment">
                        <p className="mb-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, nisi odio accusamus ducimus aliquid harum enim sint rem ullam quae inventore quia ipsum error consequuntur.</p>
                    </div>
                    <div className="comment-answers flex-row d-flex">
                        <div className="upvotes">
                            <small className="text-muted mb-0"><IoIosArrowUp/>  3</small>
                        </div>
                        <div className="ms-1">
                            <small className="text-muted mb-0"><BsDot/></small>
                        </div>
                        <div className="ms-1">
                            <small className="text-muted mb-0">Responder</small>
                        </div>
                    </div>
                </div>
                <hr className ="my-0"/>
            </div>
        </div>
    )
}

export default Comments
