import  { useState } from 'react';
import { arrow_left, arrow_right } from '../assets';
import { imageCards } from '../constants';
import styles from '../style';

const Slider = () => {
const [activeId, setActiveId] = useState(0)

const prevSlide = () => {
      setActiveId((activeId) => (activeId > 0 ? activeId - 1 : activeId));
    };
  
    const nextSlide = () => {
      setActiveId((activeId) => (activeId < imageCards.length - 1 ?  activeId + 1 : activeId));
    };



  return (
    <div className=' mx-auto'>
    <div className={`${styles.flexCenter} relative w-full h-[710px] mb-24`}>
      <ul className={`${styles.flexCenter}  `}>
      {imageCards.map((card, index) => (
      <li key={index} className={`aspect-w-[293px] aspect-h-[520px] ${index === activeId ? 'scale-125' : ''}   mr-7 last:mr-0 `} >
        <img src={card} alt="" />
        </li>

      ))}
      </ul>
   
    <button
    onClick={prevSlide}
        disabled={activeId === 0}
        className="absolute left-0 top-1/2 transform -translate-y-1/2  py-2"
      >
        <img className=" disable:pointer-events-none  cursore-pointer" src={arrow_left} alt="" width={42} height={42}/>
      </button>
      <button
        onClick={nextSlide}
        disabled={activeId === imageCards.length-1}
        className="absolute right-0 top-1/2 transform -translate-y-1/2  py-2"
      >
         <img className=" disable:pointer-events-none cursore-pointer" src={arrow_right} alt="" width={42} height={42} />
      </button> 
      </div>
   </div>
  )
}

export default Slider
