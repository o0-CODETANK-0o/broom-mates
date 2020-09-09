import React from 'react';
import Broom from './broom.png';



const TaskInProgress = (props) => {

    return (
        <div>
            <h1>TASK IN PROGRESS</h1>
            <img src={Broom} className="image" alt="broom"/>
            <button className="input input-green">BACK</button>
        </div>
    )
};

export default TaskInProgress