import React from 'react';
import Speaker from '../layout/Speaker';
import lemmyFull from './../../assets/male-full/lemmy-full.png';

const UserDetails = () => {
  return (
    <div className=' border'>
      <div className="header">
        <div className="header-register-user">
          <h1 className="text">BALAZS</h1>
        </div>
        <div>
          <div className="underline"></div>
          <div className="underline"></div>
        </div>
      </div>

      <div className='content'>

        <div className='player-profile-content'>
          <div>
            <img src={lemmyFull} alt="lemmy" />
          </div>
          <div className="player-status-content">
            <div>
              <h1 className="text">POINTS</h1>
              <h1 className="text">375</h1>
            </div>
            <div>
              <h1 className="text">ACTIVE</h1>
              <h1 className="text">YES</h1>
            </div>
          </div>
        </div>

        <div>
          <button className='input input-green'>
              <p className=' text '>inventory</p>
          </button>
          <button className='input input-green'>
              <p className=' text '>tasks</p>
          </button>
          <button className='input input-green'>
              <p className=' text '>hub</p>
          </button>
          <button className='input input-green'>
              <p className=' text '>log out</p>
          </button>                         
        </div>
      </div>

      <div className='footer'>
        <Speaker />
      </div>
    </div>
  );
};

export default UserDetails;
