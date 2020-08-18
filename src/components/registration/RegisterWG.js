import React from 'react';
import StepZilla from 'react-stepzilla';
import Speaker from '../layout/Speaker';

import RegisterWG1 from './RegisterWG1';
import RegisterWG2 from './RegisterWG2';
import RegisterWG3 from './RegisterWG3';

const RegisterWG = () => {
  const steps = [
    { name: 'Step 1', component: <RegisterWG1 /> },
    { name: 'Step 2', component: <RegisterWG2 /> },
    { name: 'Step 3', component: <RegisterWG3 /> },
  ];

  return (
    // <div className='frame'>
      <div className=' border'>
        <div className='header '>
          <h1 className='text'>create wg</h1>
          <div className='underline'></div>
          <div className='underline'></div>
        </div>

        <div className='step-progress content '>
          <StepZilla steps={steps} showNavigation={false} showSteps={false} />
        </div>

        <div className='footer'>
          <Speaker />
        </div>
      </div>
    // </div>
  );
};

export default RegisterWG;
