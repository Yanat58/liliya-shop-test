import {catalog} from '../constants'
import styles from '../style'


const Catalog = () => {
  return (
    <section id="catalog" className={`mx-auto px-[100px] py-14`}>
      <h2 className={`${styles.title} uppercase text-3xl mb-9`}>Каталог взуття</h2>

      <ul className={`grid  grid-cols-4  gap-5  `}>
        {catalog.map((item, index) => (
          <li key={index} className="max-w-[290px] relative">
            <img src={`${item.image}`} alt={`${item.title}`} className="object-contain" />
            <p className={` absolute top-14 inset-x-2 min-w-[45px] ${styles.title} uppercase text-xl ${styles.flexCenter} p-2 cursor-pointer hover:bg-secondary focus:bg-secondary bg-primary`}>{item.title}</p>
          </li>
        ))}
      </ul>

    </section>
  );
};

export default Catalog;
