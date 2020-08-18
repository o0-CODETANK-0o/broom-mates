import React from 'react';
import logo from './assets/logo.jpg';
import { Route, Switch, Link } from 'react-router-dom';

import './App.css';

import Speaker from './components/layout/Speaker';
import RegisterWG1 from './components/registration/RegisterWG1';
import Login from './components/layout/Login';
import Credits from './components/layout/Credits';
import RegisterWG2 from './components/registration/RegisterWG2';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <header className='header'>
            <img src={logo} className='App-logo' alt='logo' />
          </header>

          <div className='content'>
            <Link to='/registerwg'>
              <button className='btn-blue-bg'>
                <p className='text'>create wg</p>
              </button>
            </Link>
            <Link to='/login'>
              <button className='btn-blue-bg'>
                <p className='text'>continue</p>
              </button>
            </Link>
            <Link to='/credits'>
              <button className='btn-blue-bg'>
                <p className='text'>credits</p>
              </button>
            </Link>

            <Speaker className='speaker' />
          </div>
        </Route>
        <Route exact path='/registerwg' component={RegisterWG1}/>
        
        
        <Route exact path='/login' component={Login} />
        <Route exact path='/credits' component={Credits} />
        {/* <Route exact path='/registerwg2' component={RegisterWG2} /> */}
      </Switch>
    </div>
  );
}

export default App;
