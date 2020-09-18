import React from 'react';
import Speaker from '../layout/Speaker';
import Caro from './Caro';
import { useSelector, useDispatch } from 'react-redux';
import { genderAction } from '../../actions/genderAction';
import { resetCounter } from '../../actions/avatarAction';
import { resetCaro } from '../../actions/xAction';
import { Field, reduxForm } from 'redux-form';


import registerUserNameAction from '../../actions/registerUserNameAction';

const RegisterUser = (props) => {
  let currentGender = useSelector(
    (state) => state.genderReducer.currentGender
  );

  // const currentAvatar = useSelector(
  //   (state) =>
  //     state.genderReducer[currentGender][
  //       state.avatarReducer.counter
  //     ]
  // );

  const dispatch = useDispatch();

  const pickGender = (e) => {
    let pickedGender = e.target.value;
    dispatch(genderAction(pickedGender));
    //We need to roll back to the first image of each set of images
    dispatch(resetCounter());
    dispatch(resetCaro());
  };

  // let newName;
  // const onChange = (e) => {
  //   e.preventDefault();
  //   newName = e.target.value;
  // };

  // const onSubmit = (e, onChange) => {
  //   e.preventDefault();
  //   dispatch(registerUserNameAction(newName));
  // };

  const clearAll = (e, onChange) => {
    onChange((e.target.value = ''));
  };


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
        <form onSubmit={props.handleSubmit}>
          <h2 className="text">name</h2>
          <Field
            autocomplete="off"
            component="input"
            type="text"
            name="name"
            className="input input-green text"
            // onChange={onChange}
          />
          <h2 className="text">type</h2>
          <Field
            autocomplete="off"
            component="select"
            name="gender"
            className="input input-green text "
            onChange={pickGender}
          >
            <option value="human">people</option>
            <option value="drag">drag</option>
            <option value="bots">bot</option>
          </Field>

          <Caro />

          <button
            type="submit"
            className="input input-green"

          >
            <p className="text">create</p>
          </button>
          
          <button
            className="input input-green"
            onClick={clearAll}
          >
            <p className="text">clear</p>
          </button>
        </form>

        {/* <img src={currentAvatar} alt="currentAvatar" /> */}
      </div>

      <div className="footer">
        <Speaker />
      </div>
    </div>
  );
};

export default reduxForm({
  form: 'createWG',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(RegisterUser);
