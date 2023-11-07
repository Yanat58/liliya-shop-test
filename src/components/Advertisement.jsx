import { instagram, call,  close, loupa } from '../assets';
import styles from '../style';

const Advertisement = () => {
  return (
    <>
      <div className="hidden xl:flex">
        <div
          className={`${styles.paddingX} ${styles.boxWidth}  bg-secondary flex justify-between items-center text-black  font-bold text-base`}
        >
          <a
            className="flex flex-row gap-1"
            href="https://instagram.com/liliya.drohobych?igshid=OGQ5ZDc2ODk2ZA=="
          >
            <img src={instagram} alt="instagram" width={18} height={18} />
            &#64;liliya.drohobych
          </a>
          <p className="">
            Від сьогодні до кінця літа 50% на другу пару взуття!
          </p>
          <a className="flex flex-row gap-1" href="tel: +380980000000">
            <img src={call} alt="call" width={18} height={18} />
            +38 098 00 00 000
          </a>
        </div>
      </div>

      <div className="xl:hidden bg-black flex-1 flex flex-row px-3.5 py-2  items-center justify-between">
        <p className={`${styles.title} text-xs text-primary`}>
          До кінця літа 50% на другу пару взуття!
        </p>
        <button type="button">
          <img src={close} alt="mevu" width={24} height={24} />
        </button>
      </div>

      <div className="xl:hidden bg-secondary flex-1 flex flex-row px-3.5 py-2  items-center justify-between">
        <a
          className={`${styles.title} text-xs flex flex-row gap-1 items-center text-black`}
          href="https://instagram.com/liliya.drohobych?igshid=OGQ5ZDc2ODk2ZA=="
        >
          <img src={instagram} alt="instagram" width={18} height={18} />
          &#64;liliya.drohobych
        </a>
        <div className=" flex flex-row gap-5 ">
          <button type="button">
            <img src={loupa} alt="loupa" width={18} height={18} />
          </button>
          <a href="tel: +380980000000">
            <img src={call} alt="call" width={18} height={18} />
          </a>
        </div>
      </div>

     
    </>
  );
};

export default Advertisement;
