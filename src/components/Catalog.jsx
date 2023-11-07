import {catalog} from '../constants'
import styles from '../style'


const Catalog = () => {
  return (
    <section id="catalog" className={` ${styles.paddingY}`}>
      <h2 className={`${styles.title} uppercase xl:text-3xl text-2xl xl:mb-9 mb-6`}>Каталог взуття</h2>

      <ul className={`grid  grid-cols-2 md:grid-cols-3 xl:grid-cols-4  xl:gap-5 gap-4  `}>
        {catalog.map((item, index) => (
          <li key={index} className="max-w-[294px] relative">
            <img src={`${item.image}`} alt={`${item.title}`} className="object-contain" />
            <p className={` absolute xl:top-14  top-6 md:py-2  py-1  px-1 inset-x-2.5  ${styles.title} uppercase xl:text-xl md:text-xs text-xs ${styles.flexCenter} p-2 cursor-pointer hover:bg-secondary focus:bg-secondary bg-primary`}>{item.title}</p>
          </li>
        ))}
      </ul>

    </section>
  );
};

export default Catalog;
