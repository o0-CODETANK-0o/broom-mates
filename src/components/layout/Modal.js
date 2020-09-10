import React from 'react';
import { setModal } from './../../actions/modalActions';
import { useSelector, connect } from 'react-redux';

const Modal = (props) => {

    let { displayText, action } = useSelector(state => state.modalReducer);

    const closeModal = () => {
        if (props.action) {
            props.action();
        } else if (action) {
            action();
        }
        props.setModal({ show: false });
    };

    return (
        <div className="modal-body">
            <div className="modal-text-area">
                <h1>{(props.header) ? 'ENTER TEXT HERE' : ''}</h1>
                <h3>{displayText.toUpperCase()}</h3>
            </div>
            <div className="modal-button-area">
                <button onClick={ closeModal } className="input input-fucsia">{props.yesButton}</button>
                <button onClick={() => props.setModal({ show: false }) } className="input input-fucsia">{props.noButton}</button>
            </div>
        </div>
    )
};

export default connect(null, {setModal})(Modal);