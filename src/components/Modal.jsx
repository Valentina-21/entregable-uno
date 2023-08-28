const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <p>No hay más frases disponibles.</p>
                <button className="modal__btn" onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default Modal;