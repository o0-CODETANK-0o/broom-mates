import React from 'react';
import { Field, reduxForm } from 'redux-form';
import RegisterWG1 from './RegisterWG1';
import RegisterWG2 from './RegisterWG2';
import TasksManager from './TasksManager';



class RegisterWG extends React.Component {

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
    console.log(formValues)
  }

  render() {
    return (
      <div>
        <h2>Create WG</h2>
          <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
            <Field name="houseName" component={this.renderInput} label="Name of the WG"/>
            <Field name="email" type="email"  validate={email} component={this.renderInput} label="email of the wg"/>
            <button>Submit</button>
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
})(RegisterWG);
