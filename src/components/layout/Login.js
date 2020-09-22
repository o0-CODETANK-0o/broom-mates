import React from 'react';
import { Field, reduxForm } from 'redux-form';
import submit from './Submit';
import { Link } from 'react-router-dom';


import Speaker from './Speaker';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <h2 className='text'>{label}</h2>
    <div>
      <input {...input} className='input input-purple text'  type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)




const SubmitValidationForm = (props) => {

    const { error, handleSubmit, submitting } = props;

    
      
    return (
    <div className='border'>
        <div className='header'>
          <div className="header-register-user">
            <h1 className='text'>login</h1>
          </div>
          <div className='underline'></div>
        </div>

      <div className="content">
        <form onSubmit={ submit }>
          <Field name="name" type="text" component={renderField} label="name"/>
          <Field name="password" type="password" component={renderField} label="Password"/>
          {error && <strong>{error}</strong>}
          <div>
            <button className="next input input-green" type="submit" >SUBMIT</button>
          </div>
        </form>

        <Link to="/">
          <button className="next input input-green" type="button" >BACK</button>
        </Link>

        </div>

        <div className='footer'>
          <Speaker />
        </div>
    </div>
   );
  
};


export default reduxForm({
  form: 'submitValidation'  // a unique identifier for this form
})(SubmitValidationForm)