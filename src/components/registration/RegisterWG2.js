import React from 'react'
import { Field, reduxForm } from 'redux-form'
// import { render } from 'node-sass';


const tasksManager = (props) => {
  const handleSubmit = props

 
   

  
    return (
      <form onSubmit={this.handleSubmit}>
          <div>
            <Field name="broom the kitchen" id="broomKitchen" component={this.renderInput} type="checkbox"/>
          </div>
          
        <button>Submit</button>
      </form>
    )  

}

export default reduxForm({
  form: 'tasksManager'  
})(tasksManager)
