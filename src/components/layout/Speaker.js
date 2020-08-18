import React from 'react';
import Speaker from '../../assets/speaker.jpg';

const speaker = () => {
  return (
    < >
       <button  className="sound-icon"  style={{backgroundImage:`URL(${Speaker})`}}/>
    </>
  );
}

export default speaker;
