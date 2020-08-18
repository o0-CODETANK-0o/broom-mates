import React from 'react';




const RegisterWG = (props) => {

  const jumpToStep=(step)=>{
    return props.jumpToStep(step)
   
  }
   
  return (
    <>


      <div className='create-wg content'>
        <h2 className='text'>choose a name</h2>
        <input className=' input textinput'></input>
        <h2 className='text'>choose a password</h2>
        <input type="password" className=' input textinput'></input>

   
      
          <button  className=' input input-green' onClick={()=>{jumpToStep(1)}}>
            <p className='text'>
               create wg
                </p>
          </button>
       
      </div>
    </>
  );
};

export default RegisterWG;
