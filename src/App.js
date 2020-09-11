import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import logo from './assets/logos-and-icons/broommates-logo.png';
import Speaker from './components/layout/Speaker';

// CSS 
import './App.scss';
// COMPONENTS
import Home from './components/Home';
import RegisterWG from './components/registration/RegisterWG';
import Login from './components/layout/Login';
import Credits from './components/layout/Credits';
import Members from './components/layout/Members';
import Members2 from './components/layout/Members2';
import RegisterUser from './components/registration/RegisterUser';
import UserDetails from './components/layout/UserDetails';
import ValidateProgress from './components/layout/ValidateProgress';
import Inventory from './components/layout/Inventory';
import Shop from './components/layout/Shop';
import TasksManager from './components/registration/TasksManager';
import InviteUser from './components/registration/InviteUser';
import CharacterTasks from './components/characterTasks/CharacterTasks';
import TaskInProgress from './components/characterTasks/TaskInProgress';
// THIS PART NEEDS TO BE DELETED IT IS ONLY HERE SO I CAN ACCESS THE OTHER PAGES
import IndividualValidation from './components/layout/IndividualValidation/IndividualValidation';
import TaskProgress from './components/layout/TaskProgress';


import InviteUser from './components/registration/InviteUser';

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
              <Link to='/RegisterWG'>
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
              <Link to='/RegisterUser'>
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
              <Speaker/>
            </div>
          </div>
        </Route>
        <Route exact path='/registerwg' component={RegisterWG} />

        {/* THIS PART NEEDS TO BE DELETED IT IS ONLY HERE SO I CAN ACCESS THE OTHER PAGES */}
        <Route path='/' component={Home} exact />
        <Route path='/home' component={Home} exact />
        <Route path='/registerwg' component={RegisterWG} />
        <Route exact path='/registeruser' component={RegisterUser} />
        <Route exact path='/inviteuser' component={InviteUser} />
        <Route exact path='/members4' component={Members} />
        <Route exact path='/members2' component={Members2} />
        <Route exact path='/userdetails' component={UserDetails} />
        <Route exact path='/validateprogress' component={ValidateProgress} />
        <Route exact path='/inventory' component={Inventory} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/TasksManager' component={TasksManager} />
        <Route exact path='/characterTasks' component={CharacterTasks} />
        <Route exact path='/TaskInProgress' component={TaskInProgress} />
        <Route exact path='/individualvalidation' component={IndividualValidation} />
        <Route exact path='/taskprogress' component={TaskProgress} />
        <Route exact path='/inviteuser' component={InviteUser} />

        {/* THIS PART NEEDS TO BE DELETED IT IS ONLY HERE SO I CAN ACCESS THE OTHER PAGES */}

        <Route exact path='/login' component={Login} />
        <Route exact path='/credits' component={Credits} />
      </Switch>
    </div>
  );
}

export default App;
