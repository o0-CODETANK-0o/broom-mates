import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import Speaker from '../layout/Speaker';
import RegisterWG2 from './RegisterWG2';
import RegisterWG3 from './RegisterWG3';
import RegisterWG4 from './RegisterWG4';

const RegisterWG1 = () => {
  return (
    <>
      <div className='header '>
        <h1 className='text'>create wg</h1>
        <div className='underline'></div>
        <div className='underline'></div>
      </div>

      

      <div className='create-wg content'>

      <Switch>


          <Route exact path='/registerwg'>
            <h2 className="text">choose a name</h2>
            <input></input>
            <h2 className="text">choose a password</h2>
            <input></input>
            <Link to='/registerwg2'>
              <button className='btn-yellow-bg'>
              <p className="text">
                create
                </p></button>
            </Link>
          </Route>

         
          <Route exact path='/registerwg2' component={RegisterWG2} />

          <Route exact path='registerwg3' component={RegisterWG3} />
          <Route exact path='registerwg4' component={RegisterWG4} />
        </Switch>
      </div>

      <div className='create-wg-footer'>
        <Speaker />
      </div>
    </>
  );
};

export default RegisterWG1;
