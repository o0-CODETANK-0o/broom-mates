import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
import IndividualValidation from './components/layout/IndividualValidation/IndividualValidation';
import TaskProgress from './components/layout/TaskProgress';



function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/home' component={Home} exact />
        <Route path='/registerwg' component={RegisterWG} />
        <Route path='/registeruser' component={RegisterUser} />
        <Route path='/members4' component={Members} />
        <Route path='/members2' component={Members2} />
        <Route path='/userdetails' component={UserDetails} />
        <Route path='/validateprogress' component={ValidateProgress} />
        <Route path='/inventory' component={Inventory} />
        <Route path='/shop' component={Shop} />
        <Route path='/TasksManager' component={TasksManager} />
        <Route path='/login' component={Login} />
        <Route path='/credits' component={Credits} />
        <Route path='/individualvalidation' component={IndividualValidation} />
        <Route path='/taskprogress' component={TaskProgress} />
      </Switch>
    </div>
  );
}

export default App;
