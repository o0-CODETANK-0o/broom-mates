import React from 'react';
import logo from './assets/broommates-logo.png';
import { Route, Switch, Link } from 'react-router-dom';

import './App.css';

import Speaker from './components/layout/Speaker';
import RegisterWG from './components/registration/RegisterWG';
import Login from './components/layout/Login';
import Credits from './components/layout/Credits';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <div className='border'>
            <header className='header'>
              <img src={logo} className='App-logo' alt='logo' />
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
        </Route>
        <Route exact path='/registerwg' component={RegisterWG} />

        <Route exact path='/login' component={Login} />
        <Route exact path='/credits' component={Credits} />
      </Switch>
    </div>
  );
}

export default App;
