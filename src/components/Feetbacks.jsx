import Slider from './Slider'
import styles from "../style";

const Feetbacks = () => {
  

  return (
    <section id="feedbacks" className={`${styles.boxWidth} px-[100px] mx-auto py-24`}>
      <div className="mb-16">
        <h2 className={`${styles.title} text-3xl uppercase mb-2`} >Відгуки</h2>
      <p className={`${styles.paragraph} text-xl`}>Вдячні покупці про наше взуття</p>
      </div>
      

      <Slider  />
      
      <div className={`${styles.flexCenter} px-8  flex-col gap-4`}>
      <p className={`${styles.paragraph} text-lg`}>Більше відгуків в нашому Instragram</p>
      <a href="https://instagram.com/liliya.drohobych?igshid=OGQ5ZDc2ODk2ZA==" >
        <div className={`${styles.flexCenter} uppercase text-primary text-lg py-4 inline-block w-[462px] bg-black`}>
       Відкрити ітстаграм  &#64;liliya.drohobych
        </div>
      </a>
      </div>
      
    </section>
  );
};

export default Feetbacks;
