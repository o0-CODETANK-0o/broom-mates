import React from 'react';
import skater from '../../assets/skater.png';
import Slider from 'infinite-react-carousel';



const caro = () => {

    const SimpleSlider = () => (
        <Slider className="carousel" dots arrows={false}>
          <div>
            <img src={skater} alt='skater' className='avatar' />

          </div>
          
          <div>
          <img src={skater} alt='skater' className='avatar' />
          </div>
          <div>
          <img src={skater} alt='skater' className='avatar' />
          </div>
          <div>
          <img src={skater} alt='skater' className='avatar' />
          </div>
          <div>
          <img src={skater} alt='skater' className='avatar' />
          </div>
        </Slider>
      );

  return (


    <div>
      {SimpleSlider()}
    </div>
  );
}

export default caro;
