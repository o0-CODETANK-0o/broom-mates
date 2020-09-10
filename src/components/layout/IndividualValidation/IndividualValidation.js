import React from 'react';
import OpenTasks from '../IndividualValidation/OpenTasks';
import ClosedTasks from '../IndividualValidation/ClosedTasks';
import Speaker from '../Speaker';
import { useSelector } from 'react-redux';
import Modal from '../Modal';

const IndividualValidation = () => {

    let { items, modalData } = useSelector(state => { return state.tasksReducer});

    return (
        <div className=' border'>
            <div className='header '>
                <h1 className=' text details'>VALIDATION STATUS OF JULIEN</h1>
                <div className='underline'></div>
            </div>
    
            <div className='content '>
                { modalData.show && <Modal /> }
                <h1>TASKS TO VALIDATE</h1>
                <OpenTasks data={items}/>
                <h1>VALIDATED TASKS</h1>
                <ClosedTasks data={items} />
            </div>
    
        </div>
    )
}

// const mapStateToProps = state => {
//     return {items : state.tasksReducer.items}
// };


export default IndividualValidation;