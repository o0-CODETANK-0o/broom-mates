import React, { useState } from 'react';
import Speaker from '../layout/Speaker';
import { Field, reduxForm } from 'redux-form';
import { useSelector } from 'react-redux';

const RegisterUserPassword = (props) => {

    const [field, setField] = useState('');
    const [secondField, setSecondField] = useState('');

    // console.log('first filed', field, 'second filed', secondField);
   
//   const renderError = ({ error, touched}) => {
//         if(touched && error ) {
//             return (
//                 <div>
//                 <div>{error}</div>
//                 </div>
//             );
//         }
//     }

//     const renderInput = ({input, label, meta}) => {
//         return (
//         <div className="redux-form-elements">
//           <h1 className="text">{label}</h1>
//           <input type='password' className="input input-green" {...input} autoComplete="off"/>
//           {renderError(meta)}
//         </div>
//         )
//     }

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
                <Field
                    label="CHOOSE USER PASSWORD"
                    component='input'
                    name='passwordOne'
                    className='input input-green text'
                    onChange={(e) => setField(e.target.value)}
                />
                <Field
                    label="RE-ENTER PASSWORD"
                    component='input'
                    name='passwordTwo'
                    className='input input-green text'
                    onChange={(e) => setSecondField(e.target.value)}
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

// const validate = (formValues) => {
//     const errors= {};
    
//     if(formValues.passwordOne !== formValues.passwordTwo) {
//       errors.passwordTwo = "THE PASSWORDS DO NOT MATCH" 
//     }
//     return errors;
//   };

  

export default reduxForm({
    form: 'createWG',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
  })(RegisterUserPassword);