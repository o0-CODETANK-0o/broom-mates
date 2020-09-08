import React from 'react';
import { showAlert } from '../../../actions/tasksActions';
import { connect } from 'react-redux';


const ClosedTasks = ( props ) => {
    
    const { data } = props;

    const taskList = data.length ? (
        data.map(item => {
            if (item.status)
            return (
                <div onClick={() => props.showAlert(item._id)} key={item._id}>
                    <div className="text-line-through opacity">{item.text}</div>
                </div>
            )
        })
    ) : (
        <p>No task has been validated</p>
    )

    return (
        <>
        {taskList}
        </>
    )
};

export default connect(null, { showAlert })(ClosedTasks);