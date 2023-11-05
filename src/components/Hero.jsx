import styles from "../style"
import { rec1150, arrow_left, arrow_right } from "../assets";

const Hero = () => {
  return (
  <section id="about">
    <div className={`${styles.flexStart} ${styles.boxWidth} flex-1 flex flex-col-2 px-[100px] py-[30px]`} >
      <div className={`flex flex-1 relative pt-24 `}>
        <div className="top-0 left-0 absolute flex flex-row gap-2" >
          <img src={arrow_left} alt="" width={42} height={42}/>
          <img src={arrow_right} alt="" width={42} height={42} />
        </div>
        <div>
        <p className={`${styles.title} text-[38px] text-black`}>Колекція</p>
        <h1 className={`${styles.title} text-[64px] text-black mb-[25px]`} >Осінь&#39;2023</h1>
        <button  type="button" className={`${styles.title} text-[18px] text-black w-[200px] h-[42px] bg-secondary`}>
        До колекції
        </button>
        </div>
      </div>
      <div className=" basis-3/5 ">
        <img src={rec1150} alt="sneakers" className=" w-[100%] h-[100%] object-contain" />
      </div>
    </div>
  </section>

  );
};

export default Hero;
