import React from 'react';
import { setModal } from './../../../actions/modalActions';
import { connect, useSelector } from 'react-redux';
import { updateTask } from './../../../actions/tasksActions';
import Modal from '../Modal';

const OpenTasks = (props) => {
  
    const { data } = props;

    let modalData = useSelector(state => { return state.modalReducer});

    const taskList = data.length ? (
        data.map(item => {
            if (!item.status){
            let modalConfig = {show : true, displayText : item.text, id: item._id};
            return (
                <div  key={item._id} >
                <div onClick={() => props.setModal(modalConfig)}>
                    <div>{item.text}</div>
                </div>
                </div>
            )
          }
        })
    ) : (
        <p>There are no tasks to validate.</p>
    )

    return (
        <>
        { modalData.show && <Modal header={'DO YOU WANT TO VALIDATE'} yesButton={'YES'} noButton={'NO'} action={ () => props.updateTask(modalData.id) }/> }
        {taskList}
        </>
    )
};

export default connect(null, { updateTask, setModal })(OpenTasks);