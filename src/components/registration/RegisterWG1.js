import React from 'react';
// import useDispatch from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import loginSchema from './validation_rules';
import { CreateWG } from '../../actions'

const RegisterWG = (props) => {
  const jumpToStep = (step) => {
    return props.jumpToStep(step);
  };

  let initialValues = {
    wgName:'',
    email:''
  }
  // const dispatch = useDispatch()

  const onSubmit = (values) => {
    console.log(values)
    // dispatch(CreateWG(values))
    // jumpToStep(values);
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
              type='button'
              className=' input input-green'
              // onClick={() => {
              //   jumpToStep(1);
              // }}
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
