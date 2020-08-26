import React from 'react';
import Slider from 'infinite-react-carousel';
import babyMale from '../../assets/male-portraits/baby.png';
import lemmy from '../../assets/male-portraits/lemmy.png';
import spencer from '../../assets/male-portraits/spencer.png';
import squeegie from '../../assets/male-portraits/squeegie.png';
import babyGirl from '../../assets/female-portraits/babygirl.png';
import laverne from '../../assets/female-portraits/laverne.png';
import lea from '../../assets/female-portraits/lea.png';
import sammy from '../../assets/female-portraits/sammy.png';


const caro = (props) => {
  
  let avatars = [];

  switch(props.avatar) {
    case "bots":
      avatars.push(babyGirl, laverne, lea, sammy)
      break;
    case "human":
      avatars.push(babyMale, babyGirl, lemmy, laverne, spencer, lea, squeegie, sammy)
      break;
    default:
      break;
  }

  let avatarjsx = avatars.map(avatar => (
    <div key={avatar}>
    <img src={avatar} alt='avatar picture' className='avatar' />
  </div>
  ))

  return (

    <div>
      <Slider avatars={avatars} className="carousel" dots={false} arrows={true}>
          {avatarjsx}
      </Slider>
    </div>

  );
}

export default caro;
