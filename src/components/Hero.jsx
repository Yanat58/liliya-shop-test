import styles from '../style';
import { rec1150, arrow_left, arrow_right } from '../assets';

const Hero = () => {
  return (
    <section id="about">
      <div className={`xl:${styles.flexStart}  relative  py-3 xl:py-[30px]`}>
        <div className="xl:flex xl:items-center flex-col-revers ">
          <div className={`absolute top-1/4 left-3 xl:static xl:w-[523px]  `}>
            <div className={` bg-primary mb-2 xl:mb-0 py-1 px-1 max-w-max`}>
              <p className={`${styles.title} xl:text-4xl text-xl text-black `}>
                Колекція
              </p>
            </div>
            <div className={` bg-primary py-1 px-1 xl:mb-[25px]`}>
              <h1
                className={`${styles.title} text-[42px] text-bold xl:text-[64px]`}
              >
                Осінь&#39;2023
              </h1>
            </div>
            <div className="hidden xl:flex xl:absolute xl: ">
              <button
                type="button"
                className={`${styles.title} text-[18px] text-black w-[200px] h-[42px] bg-secondary`}
              >
                До колекції
              </button>
            </div>
          </div>
          <div className="xl:shrink-0">
            <img
              src={rec1150}
              alt="sneakers"
              className=" w-full   xl:w-[715px] xl:h-full object-contain"
            />
          </div>
        </div>
        <div
          className={`flex-1 flex items-center justify-end flex-row gap-2 mt-[7px] xl:absolute xl:top-4 xl:left-4`}
        >
          <img src={arrow_left} alt="" className="xl:w-10 xl:h-10 w-8 h-8" />
          <img src={arrow_right} alt="" className="xl:w-10 xl:h-10 w-8 h-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
