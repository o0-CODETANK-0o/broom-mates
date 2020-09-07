import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Task from './Task';
import TaskInProgress from './TaskInProgress';


import Char from './pixel.jpg';

class CharacterTasks extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            weeklyTasks: [
                {
                    status: false,
                    id: 1,
                    text: "mop the floor"
                },
                {
                    status: false,
                    id: 2,
                    text: "clean the toilet"
                },
                {
                    status: false,
                    id: 3,
                    text: "empty and clean the trash bins"
                }
            ],
            monthlyTasks: [
                {
                    status: false,
                    id: 1,
                    text: "clean the fridge"
                },
                {
                    status: false,
                    id: 2,
                    text: "remove spiderwebs from the ceiling"
                }
            ]
        }
    }


    render() {
        let data = this.state;

        let weeklyTasks = data.weeklyTasks.map(task => {
        return <div className=''>
                <Link to="/TaskInProgress">
                <Task key={task.id} text={task.text}></Task>
                </Link>
                </div>
        });


        let monthlyTasks = data.monthlyTasks.map(task => {
            return <div className="task-item">
                <button className='input input-green'><Link to="/TaskInProgress"><Task key={task.id} text={task.text}/></Link></button>
                
                </div>
        });

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
       
        <div className="tasksList">

            <div className="weeklyTasks">
                <div className='underline'></div>
                <h3 className='text'>weekly tasks</h3>
                <div className='underline'></div>
                {weeklyTasks} 
            </div>
            
            <div className="monthlyTasks">
                <div className='underline'></div>
                <h3 className='text'>Monthly tasks</h3>
                <div className='underline'></div>
                <p className="input-purple">{monthlyTasks}</p>
               
            </div>
            <button className='input input-purple '>BACK</button>

        </div>   
        
    </div>
    )
    }

};

export default CharacterTasks