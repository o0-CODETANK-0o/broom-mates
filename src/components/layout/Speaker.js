import React from 'react';
import Speaker from '../../assets/sound-on.png';

const speaker = () => {
  return (
    < >
       <button  className="sound-icon"  style={{backgroundImage:`URL(${Speaker})`}}/>
    </>
  );
}

export default speaker;
