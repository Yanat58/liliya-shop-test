import { useState } from 'react';
import { arrow_left, arrow_right } from '../assets';
// import { imageCards } from '../constants';
import styles from '../style';
import PropTypes from 'prop-types'

const Slider = ({images}) => {
  const [sliderId, setSliderId] = useState(1);

  const prevSlide = () => {
    setSliderId(sliderId => (sliderId > 0 ? sliderId - 1 : sliderId));
  };

  const nextSlide = () => {
    setSliderId(sliderId =>
      sliderId < images.length - 1 ? sliderId + 1 : sliderId
    );
  };

  return (
    <div className=" mx-auto">
      <div
        className={`${styles.flexCenter} relative w-full xl:h-[710px] md:h-[400px] h-[130px] xl:mb-24 mb-12`}
      >
        <ul className={`${styles.flexCenter} w-[85%] `}>
          {images.map((card, index) => (
            <li
              key={index}
              className='md:mr-7 mr-4 last:mr-0'
              
            >
              <img src={card} alt="" className={` ${
                index === sliderId ? 'scale-125' : ''
              } aspect-w-[293px] aspect-h-[520px] `} />
            </li>
          ))}
        </ul>

        <button
          onClick={prevSlide}
          disabled={sliderId === 0}
          className="absolute left-0 top-1/2 transform -translate-y-1/2  py-2"
        >
          <img
            className=" disable:pointer-events-none  cursore-pointer xl:w-[42px] md:w-8 w-6 xl:h-[42px] md:h-8 h-6"
            src={arrow_left}
            alt=""
          />
        </button>
        <button
          onClick={nextSlide}
          disabled={sliderId === images.length - 1}
          className="absolute right-0 top-1/2 transform -translate-y-1/2  py-2"
        >
          <img
            className=" disable:pointer-events-none cursore-pointer xl:w-[42px] md:w-8 w-6 xl:h-[42px] md:h-8 h-6"
            src={arrow_right}
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

Slider.propTypes = {
  images: PropTypes.node
}

export default Slider;
