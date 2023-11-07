import { useEffect, useState } from 'react';
import {navLinks, categories} from '../constants'
import styles from '../style'
import PropTypes from 'prop-types'
import  {close} from '../assets'

const Sidebar = ({onClose}) => {
    const [show, setShow] = useState(false)
    const categoryId = navLinks[0].id

    const handleClickBackdrop = e => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };
  
    useEffect(() => {
      const handleKeyDown = e => {
        if (e.code === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [onClose]);
  
  return (
    <div onClick={handleClickBackdrop} className='fixed top-0 left-0 w-screen h-screen z-20 bg-black/60'>
   <div >
     <button 
    onClick={onClose} 
    type="button" 
    className=' absolute flex top-1  right-2.5 z-20'>
          <img src={close} alt="mevu" className='w->8 h->8 hover:fill-red-600' />
        </button>
   </div>
   
    <div
        className={` absolute top-0 left-0 z-50 bg-primary w-10/12 h-screen  flex-1 flex flex-col`}
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
              className={` text-4  hover:text-blue-700  cursor-pointer ${styles.title} `}
              onClick={onClose}
            >
              <a href={`#${categoryId}`}>{category.name}</a>
            </li>
          ))}
        </ul>
        </div>
        <div className="bg-dimBlack py-6 pl-6" onClick={()=> setShow(prev => !prev)} >
          <p className={`${styles.title} text-10 cursor-pointer text-black uppercase`}>
           Інформація
          </p>
        </div>
        <div className={`${show ? 'flex' : 'hidden'}`}>
        <ul className="p-6 py-6 list-none flex flex-col flex1 gap-4 ">
          {navLinks.map((navLink, index) => (
            <li
              key={index}
              className={` text-4 hover:text-blue-700 cursor-pointer ${styles.title} `}
              onClick={onClose}
            >
              <a href={`#${navLink.id}`}>{navLink.title}</a>
            </li>
          ))}
        </ul>
        </div>
      </div>
       </div>
  );
};

Sidebar.propTypes = {
   onClose: PropTypes.func
  }

export default Sidebar;
