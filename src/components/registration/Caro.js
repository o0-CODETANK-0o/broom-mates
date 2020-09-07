import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { xAction } from '../../actions/xAction';
import { avatarAction } from '../../actions/avatarAction';

const Caro = () => {
  const dispatch = useDispatch();

  const counter = useSelector(
    (state) => state.avatarReducer.counter
  );

  const items = useSelector((state) => {
    console.log(state);
    return state.genderReducer[
      state.genderReducer.currentGender
    ];
  });

  let x = useSelector((state) => state.xreducer.x);

  const goLeft = (e) => {
  
    e.preventDefault();
    x === 0
      ? dispatch(xAction(-100 * (items.length - 1)))
      : dispatch(xAction(x + 100));
    callavatarLeft();
  };

  const callavatarLeft = () => {
    counter === 0
      ? dispatch(avatarAction(items.length - 1, items))
      : dispatch(avatarAction(counter - 1, items));
  };

  const callavatarRight = () => {
    counter === items.length - 1
      ? dispatch(avatarAction(0, items))
      : dispatch(avatarAction(counter + 1, items));
  };
  const goRight = (e) => {
    e.preventDefault()
    x === -100 * (items.length - 1)
      ? dispatch(xAction(0))
      : dispatch(xAction(x - 100));
    callavatarRight();
  };

  let carouselJSX = items.map((avatar, index) => (
    <img
      alt="avatar"
      src={avatar}
      className="avatar"
      key={index}
      style={{ transform: `translateX(${x}%)` }}
    />
  ));

  return (
    <>
      <button className="goLeft direction" onClick={goLeft}>
        left
      </button>
      <div className="carousel">{carouselJSX}</div>
      <button
        className="goright direction"
        onClick={goRight}
      >
        right
      </button>
    </>
  );
};

export default Caro;
