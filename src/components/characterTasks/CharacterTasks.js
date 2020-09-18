import React from 'react';
import OpenTasks from '../layout/IndividualValidation/OpenTasks';
import ClosedTasks from '../layout/IndividualValidation/ClosedTasks';
import { useSelector } from 'react-redux';
import Modal from '../layout/Modal';
import { Link } from 'react-router-dom';
import Speaker from '../layout/Speaker';
import Char from '../../assets/male-portraits/baby.png';

const CharacterTasks = () => {
    
    let { items, modalData } = useSelector(state => { return state.tasksReducer});


    return (
    <div className="border">
        <div className="header-register-user ">
            <h1>Julien</h1>
            <img src={Char} className=" input input-green text " alt="character" />
        </div>

        <div className=''>
                { modalData.show && <Modal /> }
                <div>
                    <div className='underline'></div>
                    <h1>WEEKLY TASKS</h1>
                    <div className='underline'></div>

                    <div className="tasks">
                    <OpenTasks data={items}/>
                    <ClosedTasks data={items} />
                    </div>

                </div>


                <div>
                    <div className='underline'></div>
                    <h1>MONTHLY TASKS</h1>
                    <div className='underline'></div>

                    <div className="tasks">
                    {/* <OpenTasks data={items}/>
                    <ClosedTasks data={items} /> */}
                    </div>
                </div>
            </div>
    
            <Link to='Hub'>
                <button className='input input-green '>
                    BACK
                </button>
            </Link>

        <div className="footer">
            <Speaker />
        </div>

    </div>
    )

};

export default CharacterTasks