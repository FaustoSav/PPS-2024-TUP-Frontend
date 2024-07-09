import { ToggleButton } from "./ToggleButton";
import { Logo } from "../../icons/Logo";
import { Menu } from "./Menu";
import { NavProvider } from "./../../context/Nav/NavProvider";
import { User } from "./../../icons/User";
import { CartButton } from "../Cart/CartButton";


export const NavBar = () => {
  return (
    <NavProvider>
      <nav className="bg-dark-white  text-light-dark  px-4 lg:px-7  ">
        <div className="flex h-16   justify-between items-center leading-[64px]  ">
          <Logo customStyle="w-10 " />
          <div className="w-full  flex gap-5 items-center justify-end relative xl:gap-7 ">
            <Menu />
            <CartButton />
            <User customStyle="hidden sm:bock" />
            <ToggleButton />
          </div>
        </div>
      </nav>
    </NavProvider>
  );
};
