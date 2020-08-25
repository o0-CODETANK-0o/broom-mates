import React from 'react';


const RegisterWG2 = ({jumpToStep}) => {


  return (
    <div className="content" >

        <h2 className='text'>wg name</h2>
        <input className=' input input-purple text'></input>
        <h2 className='text'>email</h2>
        <input type='email' className=' input input-purple text '></input>


      <h2 className='text'>do you wish to confirm?</h2>
     

        <button className='input input-green' onClick={()=>{jumpToStep(2)}}>
          <p className='text'>yes</p>
        </button>
     
     
        <button className="input input-green" onClick={()=>{jumpToStep(0)}}>
          <p className='text'>no</p>
        </button>
    
    </div>
  );
};

export default RegisterWG2;
