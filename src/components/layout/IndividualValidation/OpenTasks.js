import React from 'react';
import { updateTask } from '../../../actions/tasksActions';
import { connect } from 'react-redux';

const OpenTasks = (props) => {
    
    const { data } = props;

    const taskList = data.length ? (
        data.map(item => {
            if (!item.status)
            return (
                <div onClick={() => props.updateTask(item._id)} key={item._id}>
                    <div >{item.text}</div>
                </div>
            )
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

export default connect(null, { updateTask })(OpenTasks);