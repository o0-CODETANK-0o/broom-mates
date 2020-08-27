import React from 'react';
import { Link } from 'react-router-dom';
import Speaker from '../components/layout/Speaker';
import logo from '../assets/logos-and-icons/broommates-logo.png';

function Home() {
    return (
        <div className='border'>

            <header className='header'>
                <img src={logo} className='broom-mates-logo' alt='logo' />
            </header>

            <div className='content'>
                <Link to='/registerwg'>
                    <button className='input input-purple '>
                    <p className='text'>create wg</p>
                    </button>
                </Link>

                <Link to='/login'>
                    <button className='input input-purple '>
                    <p className='text'>continue</p>
                    </button>
                </Link>

                <Link to='/registeruser'>
                    <button className='input input-purple '>
                    <p className='text'>character</p>
                    </button>
                </Link>

                <Link to='/credits'>
                    <button className='input input-purple '>
                    <p className='text'>credits</p>
                    </button>
                </Link>
            </div>
            
            <div className='footer'>
                <Speaker />
            </div>
        </div>

    )
}

export default Home;

