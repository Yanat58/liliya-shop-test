import styles from '../style';
import { rec1150, arrow_left, arrow_right } from '../assets';

const Hero = () => {
  return (
    <section id="about">
      <div className={`${styles.flexStart} relative  py-3`}>
        <div className="flex-1  ">
          <img
            src={rec1150}
            alt="sneakers"
            className=" w-full h-full object-contain"
          />
        </div>
        <div className={`absolute top-1/4 left-3 `}>
          <div className={` bg-primary mb-2 py-1 px-1 max-w-max`}>
            <p className={`${styles.title} text-[20px] text-black`}>Колекція</p>
          </div>
          <div className={` bg-primary py-1 px-1`}>
            <h1 className={`${styles.title} text-[42px] text-bold `}>
              Осінь&#39;2023
            </h1>
          </div>
          <div className="hidden">
            <button
              type="button"
              className={`${styles.title} text-[18px] text-black w-[200px] h-[42px] bg-secondary`}
            >
              До колекції
            </button>
          </div>
        </div>
      </div>
      <div
        className={`flex-1 flex items-center justify-end flex-row gap-2 mt-[7px]`}
      >
        <img src={arrow_left} alt="" className='xl:w-10 xl:h-10 w-8 h-8' />
        <img src={arrow_right} alt="" className='xl:w-10 xl:h-10 w-8 h-8' />
      </div>
    </section>
  );
};

export default Hero;
