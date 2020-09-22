import React from 'react';
import Speaker from '../layout/Speaker';
import { Field, reduxForm } from 'redux-form';

class RegisterUserPassword extends React.Component {
   
    renderError = ({ error, touched}) => {
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
          <input type='password' className="input input-green" {...input} autoComplete="off"/>
          {this.renderError(meta)}
        </div>
        )
    }

    render() {

        // const { previousPage } = this.props;

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

        <div className="content">
            <form
                onSubmit={this.props.handleSubmit}
            >
                <Field
                    label="CHOOSE USER PASSWORD"
                    component={this.renderInput}
                    name='passwordOne'
                    className='input input-green text'
                />
                <Field
                    label="RE-ENTER PASSWORD"
                    component={this.renderInput}
                    name='passwordTwo'
                    className='input input-green text'
                />
                 
                <button type="submit" className="next input input-green">SUBMIT</button>
                <button onClick={this.previousPage} type="button" className="next input input-green">BACK</button>
            </form>
        </div>

        <div className="footer">
                <Speaker />
        </div>
    </div>
    )
}
};

const validate = (formValues) => {
    const errors= {};
    
    if(formValues.passwordOne !== formValues.passwordTwo) {
      errors.passwordTwo = "THE PASSWORDS DO NOT MATCH" 
    }
    return errors;
  };

  

export default reduxForm({
    form: 'createWG',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
  })(RegisterUserPassword);