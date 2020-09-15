import React, { useState } from 'react';
import Speaker from '../layout/Speaker';
import { Field, reduxForm } from 'redux-form';



const RegisterUserPassword = (props) => {

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
                <Field
                    component='input'
                    type='password'
                    name='password'
                    className='input input-green text'
                />
                <h2 className='text'>RE-ENTER PASSWORD</h2>
                <Field
                    component='input'
                    type='password'
                    name='second-password'
                    className='input input-green text'
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

export default reduxForm({
    form: 'createWG',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
  })(RegisterUserPassword);