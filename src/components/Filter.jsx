
import { categories } from '../constants'
import styles from '../style'

const Filter = () => {
  return (
    <div className={`${styles.flexCenter} py-[16px] px-[100px] justify-between `}>
      <ul className={`${styles.flexCenter}`}>
        {categories.map((category, index) => (
            <li key={index} className={`${styles.title}  text-[15px] cursor-pointer ${index === categories.length - 1 ? 'mr-0' : 'mr-5'}`} >
                <a href="">{category.name}</a>
            </li>
        ))}
      </ul>
      <a href="" className={`${styles.title} text-[15px] cursor-pointer`}>Знижки</a>
    </div>
  )
}

export default Filter
