import React from 'react';
import { Link } from 'react-router-dom';
import Speaker from '../layout/Speaker';

import HubChar from './HubChar';
import Baby from '../../assets/male-portraits/baby.png';
import Lemmy from '../../assets/male-portraits/lemmy.png';
import Spencer from '../../assets/male-portraits/spencer.png';
import Squeegie from '../../assets/male-portraits/squeegie.png';


const Hub = () => {

    let Characters = [
            {           
                name: 'Julien',
                avatar: Baby,
                xp: 420,
                status: 'active'
            },
            {   
                name: 'Nicolo',
                avatar: Lemmy,
                xp: 666,
                status: 'active'
            },
            {   
                name: 'Plamen',
                avatar: Spencer,
                xp: 999,
                status: 'active'
            },
            {   
                name: 'Balazs',
                avatar: Squeegie,
                xp: 42,
                status: 'inactive'
            }
        ]
    

    return (
        <div className="border">
            <div className="header-register-user header">
                <h1>BROOMIIIIZ</h1>
                <div className='underline'></div>
                <div className='underline'></div>
            </div>

            <div className="content">
                <div className="hub">
                    <HubChar data={Characters}/>
                
                </div>

                <div className="">
                    <Link to='/TasksManager'>
                        <button className='input input-green '>
                        <span className='text'>edit your house</span>
                        </button>
                    </Link>
                        
                    <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/GEkr5G80z-o">
                        <button className='input input-green ' >ENTER THE ARENA</button>
                    </a>

                    <div className="footer">
                        <Speaker />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Hub