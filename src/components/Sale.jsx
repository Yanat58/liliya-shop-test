import styles from '../style'
import { rec1152_8 } from '../assets';

const Sale = () => {
  return (
    <section id="sale" className={`${styles.boxWidth} px-[100px] py-14`}>
      <div className="w-full shrink-0 relative mb-20">
        <img src={rec1152_8} alt="" />
        <p className={` absolute bottom-14 left-12 inset-x-auto min-w-[45px] ${styles.title} uppercase text-primary text-4xl ${styles.flexCenter} p-2 cursor-pointer bg-[#FF0000]`}>Sale</p>        
      </div>
    </section>
  );
};

export default Sale;
