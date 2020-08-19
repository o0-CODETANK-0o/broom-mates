import React from 'react';
import logo from './assets/broommates-logo.png';
import { Route, Switch, Link } from 'react-router-dom';

import './App.scss';

import Speaker from './components/layout/Speaker';
import RegisterWG from './components/registration/RegisterWG';

import Login from './components/layout/Login';
import Credits from './components/layout/Credits';

// THIS PART NEEDS TO BE DELETED IT IS ONLY HERE SO I CAN ACCESS THE OTHER PAGES
import Members from './components/layout/Members';
import Members2 from './components/layout/Members2';
import RegisterUser from './components/registration/RegisterUser';
import UserDetails from './components/layout/UserDetails';
import ValidateProgress from './components/layout/ValidateProgress';
import Inventory from './components/layout/Inventory';
import Shop from './components/layout/Shop';
// THIS PART NEEDS TO BE DELETED IT IS ONLY HERE SO I CAN ACCESS THE OTHER PAGES



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

              {/* THIS PART NEEDS TO BE DELETED IT IS ONLY HERE SO I CAN ACCESS THE OTHER PAGES */}
              <Link to='/registeruser'>
                <button className='input input-purple '>
                  <p className='text'>character</p>
                </button>
              </Link>
              {/* THIS PART NEEDS TO BE DELETED IT IS ONLY HERE SO I CAN ACCESS THE OTHER PAGES */}

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

        {/* THIS PART NEEDS TO BE DELETED IT IS ONLY HERE SO I CAN ACCESS THE OTHER PAGES */}
        <Route exact path='/registeruser' component={RegisterUser} />
        <Route exact path='/members4' component={Members} />
        <Route exact path='/members2' component={Members2} />
        <Route exact path='/userdetails' component={UserDetails} />
        <Route exact path='/validateprogress' component={ValidateProgress} />
        <Route exact path='/inventory' component={Inventory} />
        <Route exact path='/shop' component={Shop} />
        {/* THIS PART NEEDS TO BE DELETED IT IS ONLY HERE SO I CAN ACCESS THE OTHER PAGES */}

        <Route exact path='/login' component={Login} />
        <Route exact path='/credits' component={Credits} />
      </Switch>
    </div>
  );
}

export default App;
