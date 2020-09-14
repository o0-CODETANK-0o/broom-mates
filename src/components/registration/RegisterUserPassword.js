import React, { useState } from 'react';
import Speaker from '../layout/Speaker';
import { Field, reduxForm } from 'redux-form';



const RegisterUserPassword = (props) => {

    const [email, setEmail] = useState('');
    console.log(`password ${email}`);

    return (
    <div className="border">
        <div className="header">
            <div className="header-register-user">
            <h1 className="text">character</h1>
            <h1 className="text">creation</h1>
            </div>
            <div>
            <div className="underline"></div>
            <div className="underline"></div>
            </div>
        </div>

        <div className="content ">
            <form
                onSubmit={props.handleSubmit}
            >
                <h2 className='text'>CHOOSE PASSWORD</h2>
                <input
                    type='password'
                    name='password'
                    className='input input-green text'
                    onChange={(e) => {
                    e.preventDefault();
                    setEmail(e.target.value);
                    }}
                />
                <h2 className='text'>RE-ENTER PASSWORD</h2>
                <input
                    type='password'
                    name='second-password'
                    className='input input-green text'
                    onChange={(e) => {
                    e.preventDefault();
                    setEmail(e.target.value);
                    }}
                />
                <button type="submit" className="next input input-green">SUBMIT</button>
                <button type="button" className="next input input-green">BACK</button>
            </form>
        </div>

        <div className="footer">
                <Speaker />
        </div>
    </div>
    )
};

export default RegisterUserPassword;