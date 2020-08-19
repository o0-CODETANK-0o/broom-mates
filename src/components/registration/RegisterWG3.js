import React from 'react';




import {Link} from "react-router-dom"
//THIS PART NEEDS TO BE DELETED IT IS ONLY HERE SO I CAN ACCESS THE OTHER PAGES

const RegisterWG3 = () => {
  return (
    <div>
      <h1 className='text'>choose players</h1>
      <div className='underline'></div>
      <div className='underline'></div>
      <div className='content'>
        {/* THIS PART NEEDS TO BE DELETED IT IS ONLY HERE SO I CAN ACCESS THE OTHER PAGES */}

        <Link to="members2">
          <button className='input input-green' >2 players</button>
          </Link>

  
        <Link to="members4">
        <button className='input input-green'>4 players</button>
        </Link>
              {/* THIS PART NEEDS TO BE DELETED IT IS ONLY HERE SO I CAN ACCESS THE OTHER PAGES */}
      </div>
    </div>
  );
};

export default RegisterWG3;
