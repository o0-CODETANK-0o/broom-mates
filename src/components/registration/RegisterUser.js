import React, {useState} from 'react';
import Speaker from '../layout/Speaker';
import Caro from './Caro';
import { useSelector, useDispatch } from 'react-redux';
import { genderAction } from '../../actions/genderAction';
import { resetCounter } from '../../actions/avatarAction';
import { resetCaro } from '../../actions/xAction';
import registerUserAction from "../../actions/registerUserAction"
import registerUserNameAction from '../../actions/registerUserNameAction';
import { useParams, Link } from 'react-router-dom';

const RegisterUser = () => {

const token=useParams().token



  let currentGender = useSelector(
    (state) => state.genderReducer.currentGender
  );

  const currentAvatar = useSelector(
    (state) =>
      state.genderReducer[currentGender][
        state.avatarReducer.counter
      ]
  );


let [name,setName]=useState("")





  const dispatch = useDispatch();

  





  return (
    <div className="border">
      <div className="header">
        <div className="header-register-user">
          u <h1 className="text">character</h1>
          <h1 className="text">creation</h1>
        </div>
        <div>
          <div className="underline"></div>
          <div className="underline"></div>
        </div>
      </div>

      <div className="content ">
        <form onSubmit={(e)=>{e.preventDefault(); dispatch(registerUserAction(name,token,currentAvatar))}}>
          <h2 className="text">name</h2>
          <input
            type="text"
            name="name"
            value={name}
            className="input input-green text"
            onChange={(e)=>{e.preventDefault(); setName(e.target.value)}}
          />
          <h2 className="text">type</h2>
          <select
            type="select"
            name="gender"
            className="input input-green text "
            onChange={(e)=>{dispatch(genderAction(e.target.value)); dispatch(resetCounter());
              dispatch(resetCaro())}}
          >
            <option value="human">human</option>
            <option value="drag">drag</option>
            <option value="bots">bots</option>
          </select>

          <Caro />
<Link to="registerUserPassword">
          <button
            type="submit"
            className="input input-green"
                  >
            <p className="text">create</p>
          </button>
          </Link>
          <button
            className="input input-green"
            onClick={ ()=>setName("")}
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

export default RegisterUser;
