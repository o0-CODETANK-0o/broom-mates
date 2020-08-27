import React, { useState } from 'react';
import Speaker from '../layout/Speaker';

import Caro from './Caro';
import { Link, useHistory } from 'react-router-dom';

class RegisterUser extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      avatar: "human"
    }

  }
    // let history = useHistory();
    // let [avatar, setAvatar] = useState("human");
      handleSubmit = (e) => {
      e.preventDefault();
      // store form data in redux
      // re-direct to next step
      // this.history.push({
      //   pathname: '/members4',
      //   state: { message: 'nicolo'}
      // }, 
      // {island: 'Mauritius Islands'}
      // )

      this.props.history.push("/members4", { response: 'hello WORLD!' })  

    };
  

  render() {

    return (
      <div className='border'>
        <div className='header'>
          <div className='header-register-user'>
            <h1 className='text'>character</h1>
            <h1 className='text'>creation</h1>
          </div>
          <div>
            <div className='underline'></div>
            <div className='underline'></div>
          </div>
        </div>
  
        <div className='content '>
          <form onSubmit={this.handleSubmit}>
            <h2 className='text'>name</h2>
            <input type='text' className='input input-green text' />
            <h2 className='text'>type</h2>
            <select onChange={ (e) => this.setState({avatar: e.target.value}) } type='select' className='input input-green text '>
              <option value='human'>human</option>
              <option value='drag'>drag</option>
              <option value='bots'>bots</option>
            </select>
  
            <Caro avatar={this.state.avatar}
            // className="carousel"
            />
  
            <Link to="members4">
              <button className='input input-green'>
                <p className='text'>create</p>
              </button>
            </Link>
            <Link to="registeruser">
              <button className='input input-green'>
                <p className='text'>clear</p>
              </button>
            </Link>
          </form>
        </div>
  
        <div className='footer'>
          <Speaker />
        </div>
      </div>
    );
  }
}


export default RegisterUser;
