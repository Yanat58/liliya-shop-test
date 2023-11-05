import styles from '../style'
import {rec1152_9 } from '../assets';

const CareProducts = () => {
    return (
    <section id="sale" className={`${styles.boxWidth} mx-auto px-[100px] py-14`}>
      <div className="w-full shrink-0 relative">
        <img src={rec1152_9} alt="" />
        <p className={` absolute bottom-14 left-12 inset-x-auto min-w-[45px] ${styles.title} uppercase text-primary text-4xl ${styles.flexCenter} p-2 cursor-pointer bg-[#F89500]`}>Доглядові засоби</p>        
      </div>
    </section>
  );
};

export default CareProducts;
