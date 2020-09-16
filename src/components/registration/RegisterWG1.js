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
      <h1 className="text">{label}</h1>
      <input className="input input-green text" {...input} autoComplete="off"/>
      {this.renderError(meta)}
    </div>
    )
  }

  render() {

    return (
      <div className="border">
        <div className="header">
            <div className="header-register-user">
            <h1 className="text">CREATE WG</h1>
            </div>
            <div>
            <div className="underline"></div>
            <div className="underline"></div>
            </div>
        </div>

        <div className="content">
          <form onSubmit={this.props.handleSubmit} >
              <Field name="houseName" component={this.renderInput} label="CHOOSE A NAME FOR YOUR WG"/>
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
