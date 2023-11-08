import { navLinks } from '../constants';
import { menu, shopping_cart, close, loupa, user, favourite } from '../assets';
import styles from '../style';
import { useState } from 'react';
import { Sidebar, Search } from '../components';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleToggle = () => {
    setToggle(prev => !prev);
  };
  const handleShowModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <nav className={`${styles.line} ${styles.paddingX}  xl:py-[10px] py-2   `}>
      <div className="flex flex-row justify-between ">
        <div className={`${styles.flexCenter} `}>
          <div className="xl:hidden flex flex-1 px-2 mr-12">
            <img
              src={toggle ? close : menu}
              alt="menu"
              onClick={handleToggle}
              width={49}
              height={49}
            />
          </div>
          <p className="inline-blok font-montserrat font-black text-black text-5xl  uppercase mr-12 ">
            Liliya
          </p>
          <div className="hidden xl:flex">
            <ul className={`${styles.flexCenter}   `}>
              {navLinks.map((navlink, index) => (
                <li
                  key={index}
                  className={` text-[13px]  cursor-pointer ${
                    styles.paragraph
                  } ${index === navLinks.lenght - 1 ? 'mr-0' : 'mr-4'}`}
                >
                  <a href={`#${navlink.id}`}>{navlink.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={`hidden xl:${styles.flexCenter}`}>
          <ul className={`${styles.flexCenter}  gap-8 last:mr-4 `}>
            <li>
              <button onClick={handleShowModal} type="button">
                <img src={loupa} alt="loupa" width={28} height={28} />
              </button>
            </li>
            <li>
              <img src={user} alt="" className="w-[28px] h-[28px]" />
            </li>
            <li>
              <img src={favourite} alt="" className="w-[28px] h-[28px]" />
            </li>
            <li className=" flex items-center ">
              <div className=" relative ">
                <img src={shopping_cart} alt="" className="w-[28px] h-[28px]" />
                <div
                  className={` ${styles.flexCenter} absolute  w-[20px] h-[20px] rounded-full bg-black text-primary -top-1 -right-3 `}
                >
                  2
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="xl:hidden flex items-center ">
          <div className=" relative mr-5">
            <img src={shopping_cart} alt="" className="static" />
            <div
              className={` ${styles.flexCenter} absolute  w-[20px] h-[20px] rounded-full bg-black text-primary -top-1 -right-3 `}
            >
              2
            </div>
          </div>
        </div>
      </div>

      <div className={`${toggle ? 'flex' : 'hidden'} `}>
        <Sidebar onClose={handleToggle} />
      </div>

      <div className={`${showModal ? 'flex' : 'hidden'}`}>
        <Search onClose={handleShowModal} />
      </div>
    </nav>
  );
};

export default NavBar;
