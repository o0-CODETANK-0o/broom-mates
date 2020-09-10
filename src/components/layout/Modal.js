import React from 'react';
import { setModal } from './../../actions/modalActions';
import { useSelector, connect } from 'react-redux';

const Modal = (props) => {

    let { displayText } = useSelector(state => state.modalReducer);

    const closeModal = () => {
        props.action();
        props.setModal({ show: false});
    }

    return (
        <div className="modal-body">
            <div className="modal-text-area">
                <h1>DO YOU WANT TO VALIDATE</h1>
                <h3>{displayText.toUpperCase()}?</h3>
            </div>
            <div className="modal-button-area">
                <button onClick={ closeModal } className="input input-fucsia">YES</button>
                <button onClick={() => props.setModal({ show: false }) } className="input input-fucsia">NO</button>
            </div>
        </div>
    )
};

export default connect(null, {setModal})(Modal);