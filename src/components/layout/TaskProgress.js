import React from 'react';
import Speaker from './Speaker';
import { useSelector } from 'react-redux';

const TaskProgress = () => {

    let items = useSelector(state => { return state.tasksReducer.items});
    console.log(items) 

    return (
        <div className=' border'>
            <div className='header '>
                <h1 className=' text details'></h1>
                <div className='underline'></div>
            </div>

        <div className='content '>

        </div>

            <div className='footer'>
                <Speaker />
            </div>

        </div>
    )
};

export default TaskProgress;

