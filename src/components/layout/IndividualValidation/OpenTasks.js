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
                <>
                { modalData.show && <Modal action={ () => props.updateTask(item._id) }/> }
                <div onClick={() => props.setModal(modalConfig)} key={item._id}>
                    <div >{item.text}</div>
                </div>
                </>
            )
          }
        })
    ) : (
        <p>There are no tasks to validate.</p>
    )

    return (
        <>
        {taskList}
        </>
    )
};

export default connect(null, { updateTask, setModal })(OpenTasks);