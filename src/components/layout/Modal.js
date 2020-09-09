import React from 'react';
import { updateTask, setModal } from './../../actions/tasksActions';
import { useSelector, connect } from 'react-redux';

const Modal = (props) => {

    let { displayText, id } = useSelector(state => state.tasksReducer.modalData);

    return (
        <div className="modal-body">
            <div className="modal-text-area">
                <h1>DO YOU WANT TO VALIDATE</h1>
                <h3>{displayText.toUpperCase()}?</h3>
            </div>
            <div className="modal-button-area">
                <button onClick={() => props.updateTask(id)} className="input input-fucsia">YES</button>
                <button onClick={() => props.setModal({ show: false }) } className="input input-fucsia">NO</button>
            </div>
        </div>
    )
};

export default connect(null, {updateTask, setModal})(Modal);