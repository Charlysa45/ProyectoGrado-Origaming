import './Modal.css';

const Modal = ({children, isOpen, closeModal, auth}) => {

    const handleModalContainerClick = e => e.stopPropagation();
    return (
        <article className={`modal ${isOpen && "is-open"}`}>
            <div className="modal-container" onClick={handleModalContainerClick}>
                {/* {auth && */}
                    <button className="modal-close btn btn-dark" onClick={closeModal}>Cerrar</button>
                {/* } */}
                {children}
            </div>
        </article>
    )
}

export default Modal
