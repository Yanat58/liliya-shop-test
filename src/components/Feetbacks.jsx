import Slider from './Slider';
import styles from '../style';
import { imageCards } from '../constants';


const Feetbacks = () => {
  return (
    <section id="feedbacks" className={`w-full xl:py-24 md:py-18 py-8`}>
      <div className="md:mb-16 mb-12">
        <h2 className={`${styles.title} xl:text-3xl text-2xl  uppercase xl:mb-2 mb-1.5`}>
          Відгуки
        </h2>
        <p className={`${styles.paragraph} xl:text-xl md:text-base text-sm`}>
          Вдячні покупці про наше взуття
        </p>
      </div>

      <Slider images={imageCards}  />

      <div className={`${styles.flexCenter} px-8  flex-col xl:gap-4 md:gap-2 gap-1`}>
      <p className={`${styles.paragraph} xl:text-lg md:text-base text-[10px]`}>Більше відгуків в нашому Instragram</p>
      <a href="https://instagram.com/liliya.drohobych?igshid=OGQ5ZDc2ODk2ZA==" >
        <div className={`${styles.flexCenter} uppercase text-primary xl:text-lg md:text-base text-[10px] xl:py-4 md:py-2 py-1 px-1  max-w-[462px] bg-black `}>
       Відкрити ітстаграм  
       <span className='blok normal-case ml-1'> &#64;liliya.drohobych</span>
        </div>
      </a> 
      </div>
    </section>
  );
};

export default Feetbacks;
