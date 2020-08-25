import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import loginSchema from './validation_rules';

const RegisterWG = (props) => {
  const jumpToStep = (step) => {
    return props.jumpToStep(step);
  };

  let initialValues = {
    wgName:'',
    email:''
  }

  const onSubmit = (values, submitProps) => {
    console.log('Submit done: ', values)
    submitProps.setState(initialValues)

  }


  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={loginSchema}
      >
        <Form>
          <div className='create-wg content'>
            <div>
              <h2 className='text'>choose a WG name</h2>
              <Field name="wgName" type="text" className=' input input-purple text '/>
              <ErrorMessage name="wgName" component="div" className="error" />
            </div>
            <div>
              <h2 className='text'>Enter admin email</h2>
              <Field name="email" type="email" className=' input input-purple text '/>
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <button
              type='submit'
              className=' input input-green'
              onClick={() => {
                jumpToStep(1);
              }}
            >
              <p className='text'>create wg</p>
            </button>

            <button
              className=' input input-green'
              onClick={() => {
                jumpToStep(1);
              }}
            >
              <p className='text'>Back</p>
            </button>
          </div>
      </Form>
      </Formik>
    </div>
  );
};

export default RegisterWG;
