import styles from "../style";
import { telegram, viber, icon, cards } from "../assets";

const Footer = () => {
  return (
    <section id="footer" className={`${styles.boxWidth} bg-black mx-auto `}>
      <div className="border-b-dimBlack border-b-[1px]">
        <div className="px-[100px] flex-1 flex flex-col-4 items-start justify-between pt-20 pb-12 ">
          <div className="flex-1">
            <p className=" text-primary text-5xl font-black font-montserrat uppercase">
              Liliya
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-4 font-montserrat font-medium text-primary text-base">
            <a href="">Оплата та доставка</a>
            <a href="">Повернення та обмін</a>
            <a href="">Визначення розміру</a>
          </div>
          <div className="flex-1 flex flex-col gap-5 font-montserrat font-medium text-primary text-base">
            <a href="">Договір публічної оферти</a>
            <a href="">Про нас</a>
            <a href="">FAQ</a>
          </div>
          <div className="w-[413px]">
            <p className="uppercase  font-montserrat font-extrabold text-primary text-lg">
              ХОЧЕМО ПОДІЛИТИСЯ СВОЄЮ ЛЮБОВ’Ю ДО ВЗУТТЯ З ТОБОЮ
            </p>
            <form className=" mt-5 w-100%  grid grid-cols-2 divide-x items-center rounded-3xl ">
              <input
                className="pl-5 py-2 text-borderColor font-montserrat text-lg font-medium border-solid border-dimBlack rounded-r-sm focus:border-secondary focus:outline-none"
                type="text"
                name="email"
                placeholder="E-mail"
              />
              <button
                className="py-2 p-auto bg-secondary border-secondary border-solid font-medium text-lg text-primary rounded-l-sm"
                type="submit"
              >
                Підписатися
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="px-[100px] flex-1 flex flex-col-4 items-start justify-between pt-9 pb-10 selection:font-montserrat font-medium text-primary text-base">
        <div className="flex-1  flex flex-col gap-1 ">
          <p>Підтримка:</p>
          <p>support_lilya@gmail.com</p>
        </div>
        <div className="flex-1 flex flex-col gap-1 ">
          <p>Співробітництво:</p>
          <p>support_lilya@gmail.com</p>
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <p>Телефон:</p>
          <a href="tel:+380980000000">+38 098 00 00 000</a>
        </div>
        <div className="flex-1 flex flex-col  ">
          <p>Месенджери:</p>
          <div className="flex flex-row gap-20 items-center">
            <div className="grid grid-cols-3 gap-3 pt-2 ">
              <a href="">
                <img src={icon} alt="instagram" width={32} height={32} />
              </a>
              <a href="">
                <img src={telegram} alt="telegram" width={32} height={32} />
              </a>
              <a href="">
                <img src={viber} alt="viber" width={32} height={32} />
              </a>
            </div>
            <div  >
              <img src={cards} alt="cards" height={32} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
