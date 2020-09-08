import React from 'react';
import OpenTasks from '../IndividualValidation/OpenTasks';
import ClosedTasks from '../IndividualValidation/ClosedTasks';
import Speaker from '../Speaker';
import { useSelector } from 'react-redux';

const IndividualValidation = () => {
    // let items = this.props.items;

    let items = useSelector(state => { return state.tasksReducer.items});

    return (
        <div className=' border'>
            <div className='header '>
                <h1 className=' text details'>VALIDATION STATUS OF JULIEN</h1>
                <div className='underline'></div>
            </div>
    
            <div className='content '>
                <h1>Tasks to Validate</h1>
                <OpenTasks data={items}/>
                <h1>Validated Tasks</h1>
                <ClosedTasks data={items} />
            </div>
    
            <div className='footer'>
                <Speaker />
            </div>
    
        </div>
    )
}

// const mapStateToProps = state => {
//     return {items : state.tasksReducer.items}
// };


export default IndividualValidation;