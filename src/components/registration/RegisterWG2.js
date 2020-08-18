import React from 'react';
import { Link, Route } from 'react-router-dom';

const RegisterWG2 = () => {
  return (
    <div style={{ height: '100vh', backgroundColor: 'red' }}>
      <h2 className='text'>do you wish to keep -the name?-</h2>
      <Link to='registerwg3'>
        <button className='.btn-yellow-bg'>
          <p className='text'>keep</p>
        </button>
      </Link>
      <Link to='createwg'>
        <button className='.btn-yellow-bg'>
          <p className='text'>discard</p>
        </button>
      </Link>
    </div>
  );
};

export default RegisterWG2;
