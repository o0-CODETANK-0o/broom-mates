import React from 'react';
import OpenTasks from '../layout/IndividualValidation/OpenTasks';
import ClosedTasks from '../layout/IndividualValidation/ClosedTasks';
import { useSelector } from 'react-redux';
import Modal from '../layout/Modal';


import Char from './pixel.jpg';

const CharacterTasks = () => {
    
    let { items, modalData } = useSelector(state => { return state.tasksReducer});


    return (
    <div>
        <div className="charInfos">
            <img src={Char} className="image" alt="character" />
            <div className="charDetails">
                <h2>Julien</h2>
                <h3>XP Points:</h3>
                <h2>420</h2>
            </div>
        </div>

        <div className=''>
                { modalData.show && <Modal /> }
                <div>
                    <div className='underline'></div>
                    <h2>TASKS TO DO</h2>
                    <div className='underline'></div>

                    <div className="content">
                    <OpenTasks data={items}/>
                    </div>
                </div>


                <div>
                    <div className='underline'></div>
                    <h1>TASKS DONE</h1>
                    <div className='underline'></div>

                    <div className="content">
                    <ClosedTasks data={items} />
                    </div>
                </div>
            </div>
    
               
            <button className='input input-purple '>BACK</button>
    
    </div>
    )

};

export default CharacterTasks