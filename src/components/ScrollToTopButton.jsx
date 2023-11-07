import ScrollToTop from 'react-scroll-up';
import { arrow_left } from '../assets'


const ScrollToTopButton = () => {
  return (
    <>
      <ScrollToTop showUnder={160} duration={200}>
        <div className=' flex bg-secondary border-none w-12 h-12 rounded-full items-center justify-center rotate-90 '>
          <img src={arrow_left} alt="up" width={24} height={24} />
        </div>
      </ScrollToTop>
    </>
  );
};

export default ScrollToTopButton