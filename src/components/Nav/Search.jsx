import { SearchIcon } from '../../icons/SearchIcon';

export const Search = () => {
  return (
    <div className="  h-10  px-10 rounded-full flex w-full sm:w-1/2 sm:py-0  overflow-hidden sm:max-w-[300px] border-light-dark ">
      <input
        className=" bg-dark-white text-light-dark text-sm  placeholder:text-light placeholder:font-light dark:placeholder:text-primaryDark dark:placeholder:font-normal lg:text-base [&::-webkit-search-cancel-button]:hidden outline-none w-full  px-2   "
        type="search"
        name="searchProducto"
        id="searchProducto"
        placeholder="Busque un producto"
      />
      <SearchIcon customStyle="w-5" />
    </div>
  );
};
