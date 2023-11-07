import { useState } from 'react';
import {navLinks, categories} from '../constants'
import styles from '../style'
import PropTypes from 'prop-types'

const Sidebar = ({onClose}) => {
    const [show, setShow] = useState(false)
    const categoryId = navLinks[0].id
  return (
    <div
        className={` absolute top-0 left-0 z-10 bg-primary w-80 h-screen  flex-1 flex flex-col`}
      >
        <div className={`${styles.line} border-b-primary bg-dimBlack py-6 pl-6`}>
          <p className={`${styles.title} text-10 text-black uppercase`}>
            Каталог
          </p>
        </div>
        <div className={`${show ? 'hidden' : 'flex'}`}>
        <ul className="p-6 py-6 list-none flex flex-col flex1 gap-4 ">
          {categories.map((category, index) => (
            <li
              key={index}
              className={` text-4  cursor-pointer ${styles.title} `}
              onClick={onClose}
            >
              <a href={`#${categoryId}`}>{category.name}</a>
            </li>
          ))}
        </ul>
        </div>
        <div className="bg-dimBlack py-6 pl-6" onClick={()=> setShow(prev => !prev)} >
          <p className={`${styles.title} text-10 text-black uppercase`}>
           Інформація
          </p>
        </div>
        <div className={`${show ? 'flex' : 'hidden'}`}>
        <ul className="p-6 py-6 list-none flex flex-col flex1 gap-4 ">
          {navLinks.map((navLink, index) => (
            <li
              key={index}
              className={` text-4  cursor-pointer ${styles.title} `}
              onClick={onClose}
            >
              <a href={`#${navLink.id}`}>{navLink.title}</a>
            </li>
          ))}
        </ul>
        </div>
      </div>
  );
};

Sidebar.propTypes = {
   onClose: PropTypes.func
  }

export default Sidebar;
