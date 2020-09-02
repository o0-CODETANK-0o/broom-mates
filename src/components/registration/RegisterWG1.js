import React from 'react'
import { Field, reduxForm } from 'redux-form';


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
    <div className="content">
      <label>{label}</label>
      <input className="input" {...input} autoComplete="off"/>
      {this.renderError(meta)}
    </div>
    )
  }

  onSubmit(formValues) {
    console.log(formValues);
    // let houseValues = formValues;
  }

  render() {
    return (
      <div>
        <div className='header '>
          <h1 className='text'>create a wg</h1>
          <div className='underline'></div>
          <div className='underline'></div>
        </div>

        <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
            <Field name="houseName" component={this.renderInput} label="Name of the WG"/>
            <Field name="email" type="email"  validate={email} component={this.renderInput} label="email of the wg"/>
            
          <div>
            <button type="submit" className="next">Next</button>
          </div>        
        </form>
      </div>
  );

  }
}
const email = value =>
value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
'Invalid email address' : undefined

const validate = (formValues) => {
  const errors= {};
  
  if(!formValues.houseName) {
    errors.houseName = "Your quest starts with a house name!"
  }
  if(!formValues.email) {
    errors.email = "An email is necessary for your adventure";
    formValues = email
  }
  return errors;
};

export default reduxForm({
  form: 'createWG',
  validate
})(RegisterWG1);
