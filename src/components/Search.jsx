import styles from '../style';
import { loupa, close } from '../assets';
import { useEffect, useState} from 'react';

const Search = ({  onClose }) => {
    const [search, setSearch] = useState('')
    
    const handleSubmit = e => {
        e.preventDefault();
      };
    
      const handleChange = e => {
        const searchQuery = e.target.value;
       
        setSearch(searchQuery);
        onClickClear()
      };
    
      const onClickClear = () => {
        setSearch('');
      };

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
    <div
    onClick={handleClickBackdrop} 
     className="fixed top-0 left-0 w-screen h-screen z-10 bg-black/60">
      <form
      onSubmit={handleSubmit}
        className={`${styles.flexCenter} absolute top-8 md:left-16 left-10 flex-col gap-1 w-10/12 xl:h-32 h-24 py-2  z-10 rounded-md bg-primary `}
      >
        <label
          htmlFor=""
          className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
        >
          Знайдіть товар за назвою
        </label>
        <div className="relative  mt-2">
          <input
            id="email"
            name="search"
            value={search}
            type="text"
            placeholder="Пошук"
            onChange={handleChange}
            className="block md:w-96 w-72 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  pl-9 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
          />
            <img src={loupa} alt="loupa" className="absolute top-2.5 left-2  w-4 h-4 fill-black/60" />       
        </div>
        <button
          onClick={onClose}
          type="button"
          className=" absolute flex top-1  right-2.5 z-10 w-6 h-6 rounded-full items-center justify-center bg-secondary"
        >
          <img
            src={close}
            alt="close"
            className="w-5 h-5 "
          />
        </button>
      </form>
    </div>
  );
};

export default Search;