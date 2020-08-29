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
import skater from '../../assets/skater.png';
import{useSelector,useDispatch} from "react-redux";
import registerUserGenderAction from "../../actions/registerUserGenderAction"





const Caro = () => {


  const currentGender=useSelector(state=>state.registerUserGenderReducer.gender);
console.log(currentGender)
const dispatch = useDispatch()



    let avatars = [];

  switch(currentGender) {
    case "bots":
      avatars.push(babyGirl, laverne, lea, sammy)
      break;
    case "human":
      avatars.push(babyMale, babyGirl, lemmy, laverne, spencer, lea, squeegie, sammy)
      break;
    default:avatars.push(babyMale, babyGirl, lemmy, laverne, spencer, lea, squeegie, sammy)
      break;

  }

  const afterChange=(avatar)=>{
    
    console.log(avatar)
    // dispatch(registerUserGenderAction(avatars.indexOf(avatar)))
  }



  let avatarjsx = avatars.map(avatar => (
    <div key={avatars.indexOf(avatar)} className="hello" >
     {/* {afterChange(avatar)} */}
     <img src={avatar} alt='avatar picture' className='avatar'  />
  </div>
  ))







  
      const SimpleSlider = () => (
          <Slider className="carousel" dots={true} arrows={false} wheel={true} onSwipe={(right)=>{afterChange()}}>
           
            {avatarjsx}
           
          </Slider>
        );
  
    return (
  
  
      <div>
        {SimpleSlider()}
      </div>
    );
  }
  
  export default Caro;