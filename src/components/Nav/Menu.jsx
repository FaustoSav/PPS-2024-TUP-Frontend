import { useContext } from 'react';
import { NavContext } from '../../context/Nav/NavContext';
import { NavListItems } from './NavListItems';
import { Search } from './Search';
import { CustomLink } from '../shared/CustomLink';
import { User } from '../../icons/User';
import { ToggleTheme } from '../shared/ToggleTheme';

export const Menu = () => {
  const { showMenu } = useContext(NavContext);

  return (
    <div
      className={`fixed z-10 w-full  overflow-hidden customPadding transition-all duration-500  top-16 flex flex-col gap-16 items-center pt-20 justify-start  h-[calc(100vh-64px)]  sm:relative sm:flex-row sm:left-0 sm:items-center sm:gap-2 sm:h-16 sm:top-auto sm:p-0 sm:justify-around sm:px-5 bg-dark-white  ${
        showMenu ? 'left-0' : 'left-full'
      }`}
    >
      <ToggleTheme />
      <Search />
      <div className="flex items-center gap-4 sm:hidden">
        <User customStyle="w-6 " />
        <CustomLink route="/profile" text="Mi perfil" />
      </div>

      <NavListItems />
    </div>
  );
};
