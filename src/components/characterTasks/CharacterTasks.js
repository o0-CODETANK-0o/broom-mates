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
        <div className="">
            <h1>Julien</h1>
            <img src={Char} className="image" alt="character" />
        </div>

        <div className='content'>
                { modalData.show && <Modal /> }
                <div>
                    <div className='underline'></div>
                    <h2>WEEKLY TASKS</h2>
                    <div className='underline'></div>

                    <div className="">
                    <OpenTasks data={items}/>
                    </div>
                    <div className='underline'></div>
                    <div className="">
                    <ClosedTasks data={items} />
                    </div>

                </div>


                <div>
                    <div className='underline'></div>
                    <h1>MONTHLY TASKS</h1>
                    <div className='underline'></div>

                    <div className="">
                    <OpenTasks data={items}/>
                    </div>
                    <div className='underline'></div>
                    <div className="">
                    <ClosedTasks data={items} />
                    </div>
                </div>
            </div>
    
               
            <button className='input input-purple '>BACK</button>
    
    </div>
    )

};

export default CharacterTasks