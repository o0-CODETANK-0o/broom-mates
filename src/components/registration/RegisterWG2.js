import React from 'react';


const RegisterWG2 = ({jumpToStep}) => {


  return (
    <div classNAme="content" >

      <h2 className='text'>do you wish to keep -the name?-</h2>
     

        <button className='input input-green' onClick={()=>{jumpToStep(2)}}>
          <p className='text'>keep</p>
        </button>
     
     
        <button className="input input-green" onClick={()=>{jumpToStep(0)}}>
          <p className='text'>discard</p>
        </button>
    
    </div>
  );
};

export default RegisterWG2;
