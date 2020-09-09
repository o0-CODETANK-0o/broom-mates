import React from 'react';
import { setModal } from '../../../actions/tasksActions';
import { connect } from 'react-redux';

const OpenTasks = (props) => {
  
    const { data } = props;

    const taskList = data.length ? (
        data.map(item => {
            if (!item.status){
            let modalConfig = {show : true, displayText : item.text, id: item._id};
            return (
                <div onClick={() => props.setModal(modalConfig)} key={item._id}>
                    <div >{item.text}</div>
                </div>
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

export default connect(null, { setModal })(OpenTasks);