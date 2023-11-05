import { navLinks,icons } from "../constants";
import styles from "../style";

const NavBar = () => {
  return (
    <nav className={`${styles.line} py-[10px] px-[100px]`}>
      <div className="flex flex-row justify-between">
        <div className={`${styles.flexCenter}`}>
          <p className="font-montserrat font-black text-black text-5xl uppercase mr-12">Liliya</p>
          <ul className={`${styles.flexCenter} `}>
            {navLinks.map((navlink, index) => (
              <li key={index} className={` text-[13px]  cursor-pointer ${styles.paragraph} ${index === navLinks.lenght - 1 ? 'mr-0' : 'mr-4'}`}>
                <a href={`#${navlink.id}`}>{navlink.title}</a>
                 </li>
            ))}
          </ul>
        </div>
        <div className={`${styles.flexCenter}`}>
          <ul className={`${styles.flexCenter} gap-8  `}>
          {icons.map((icon, index) => (
              <li key={index} className="group">
                <a href="" className=" relative">
                  <img src={`${icon.name}`} alt="" className="static"/>                 
                  <div  className={` invisible group-last:visible ${styles.flexCenter} absolute  w-[20px] h-[20px] rounded-full bg-black text-primary -top-1 -right-3 `}>2</div>
                            
                </a>
                 </li>
          ))}
          </ul>
          </div>
      </div>
    </nav>
      );
};

export default NavBar;
