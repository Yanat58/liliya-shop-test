import styles from '../style';
import { telegram, viber, icon, cards } from '../assets';

const Footer = () => {
  return (
    <section id="footer" className={`bg-black ${styles.boxWidth} `}>
      <div className={`${styles.line} ${styles.paddingX}  `}>
        <div className=" flex-1 flex  xl:flex-row flex-col items-start gap-7 xl:gap-0 justify-between xl:pt-20 md:pt-12 pt-6 xl:pb-12 md:pb-6 pb-4 ">
          <div className="flex md:flex-row flex-col xl:gap-[90px] md:gap-24 gap-6">
          <div >
            <p className=" text-primary xl:text-5xl md:text-4xl text-3xl font-black  uppercase">
              Liliya
            </p>
          </div>

            <div className=" flex flex-row xl:gap-[90px] md:gap-24 gap-10">
              <div className=" flex flex-col xl:gap-4 md:gap-3 gap-2  font-medium text-primary xl:text-base md:text-sm text-xs">
                <a href="">Оплата та доставка</a>
                <a href="">Повернення та обмін</a>
                <a href="">Визначення розміру</a>
              </div>

              <div className=" flex flex-col xl:gap-4 gap-3  font-medium text-primary xl:text-base md:text-sm text-xs">
                <a href="">Договір публічної оферти</a>
                <a href="">Про нас</a>
                <a href="">FAQ</a>
              </div>
            </div>
          </div>

          <div className="max-w-[413px] ">
            <p className="uppercase  font-montserrat xl:font-extrabold font-semibold text-primary xl:text-lg text-sm">
              ХОЧЕМО ПОДІЛИТИСЯ СВОЄЮ ЛЮБОВ’Ю ДО ВЗУТТЯ З ТОБОЮ
            </p>
            <form className="xl:mt-5 mt-3 w-100%  grid grid-cols-2 divide-x items-center rounded-3xl ">
              <input
                className="pl-5 xl:py-2 py-1 text-borderColor font-montserrat xl:text-lg text-sm font-medium border-solid border-dimBlack rounded-l-sm focus:border-secondary focus:outline-none"
                type="text"
                name="email"
                placeholder="E-mail"
              />
              <button
                className="xl:py-2 py-1 px-auto bg-secondary border-secondary border-solid font-medium xl:text-lg text-sm text-primary rounded-r-sm"
                type="submit"
              >
                Підписатися
              </button>
            </form>
          </div>
        </div>
      </div>

      <div
        className={` ${styles.paddingX} flex-1 flex xl:flex-row flex-col items-start justify-between md:gap-8 gap-4  xl:py-9 py-6 font-medium text-primary md:text-base text-xs`}
      >
        <div className=" flex flex-row  md:gap-28 gap-12">
          <div className=" flex flex-col gap-1 ">
            <p>Підтримка:</p>
            <p>support_lilya@gmail.com</p>
          </div>
          <div className=" flex flex-col gap-1 ">
            <p>Співробітництво:</p>
            <p>support_lilya@gmail.com</p>
          </div>
        </div>

        <div className="flex flex-row  xl:gap-28 md:gap-40 gap-16">
          <div className=" flex flex-col gap-1">
            <p>Телефон:</p>
            <a href="tel:+380980000000">+38 098 00 00 000</a>
          </div>
          <div className=" flex flex-col  ">
            <p>Месенджери:</p>
            <div className="flex flex-row xl:gap-28 md:gap-32 gap-6 items-center">
              <div className="grid grid-cols-3 md:gap-3 gap-2 pt-2 ">
                <a href="">
                  <img src={icon} alt="instagram" className='md:w-8 w-5 md:h-8 h-5 '/>
                </a>
                <a href="">
                  <img src={telegram} alt="telegram" className='md:w-8 w-5 md:h-8 h-5' />
                </a>
                <a href="">
                  <img src={viber} alt="viber" className='md:w-8 w-5 md:h-8 h-5' />
                </a>
              </div>
              <div>
                <img src={cards} alt="cards" className='md:w-28 w-20 md:h-8 h-10' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
