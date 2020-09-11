import React from 'react'
import { Field, reduxForm } from 'redux-form';
import Speaker from './../layout/Speaker';


class RegisterWG1 extends React.Component {

  renderError({ error, touched}) {
    if(touched && error ) {
      return (
        <div>
          <div>{error}</div>
        </div>
      );
    }
  }
  
  renderInput = ({input, label, meta}) => {
    return (
    <div className="redux-form-elements">
      <label>{label}</label>
      <input className="input" {...input} autoComplete="off"/>
      {this.renderError(meta)}
    </div>
    )
  }

  render() {
    return (
      <div className="border">
        <div className='header '>
          <h1 className='text'>create a wg</h1>
          <div className='underline'></div>
          <div className='underline'></div>
        </div>

        <div className="content">
          <form onSubmit={this.props.handleSubmit} >
              <Field name="houseName" component={this.renderInput} label="CHOOSE A WG NAME"/>
              <Field name="email" type="email"  validate={email} component={this.renderInput} label="ENTER ADMIN EMAIL"/>
            <div>
              <button type="submit" className="next input input-green">NEXT</button>
            </div>        
          </form>
        </div>

        <div className='footer'>
                <Speaker />
        </div>

      </div>
  );

  }
}

const email = value =>
value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
'INVALID EMAIL ADDRESS' : undefined

const validate = (formValues) => {
  const errors= {};
  
  if(!formValues.houseName) {
    errors.houseName = "YOUR QUEST STARTS WITH A WG NAME!" 
  }
  if(!formValues.email) {
    errors.email = "AN EMAIL IS NECESSARY FOR YOUR ADVENTURE!"; 
    formValues = email
  }
  return errors;
};

export default reduxForm({
  form: 'createWG',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,  
  validate
})(RegisterWG1);
