import React from 'react';

const Task = (props) => {

    
    return (
        <div className="task-item">
            <input type="checkbox" />
            <label>{props.text}</label>
        </div>
    )
};

export default Task