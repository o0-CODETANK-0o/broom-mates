import React from 'react';
import { updateTask } from '../../../actions/tasksActions';
import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const OpenTasks = (props) => {

    const submit = (_id) => {
        confirmAlert({
          title: 'DO YOU WANT TO VALIDATE THE SELECTED TASK?',
          buttons: [
            {
              label: 'Yes',
              onClick: () => props.updateTask(_id)
            },
            {
              label: 'No',
            }
          ]
        });
    };

    const { data } = props;

    const taskList = data.length ? (
        data.map(item => {
            if (!item.status)
            return (
                <div onClick={() => submit(item._id)} key={item._id}>
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