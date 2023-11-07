import styles from '../style'
import { rec1152_8 } from '../assets';

const Sale = () => {
  return (
    <section id="sale" className={`${styles.paddingY}`}>
      <div className="w-full shrink-0 relative">
        <img src={rec1152_8} alt="" />
        <p className={` absolute xl:bottom-14 md:bottom-8 bottom-3 xl:left-12 md:left-8 left-4  md:py-3 py-2 px-1 ${styles.title} uppercase text-primary xl:text-4xl md:text-2xl text-base ${styles.flexCenter}  bg-[#FF0000]`}>Знижки</p>        
      </div>
    </section>
  );
};

export default Sale;
