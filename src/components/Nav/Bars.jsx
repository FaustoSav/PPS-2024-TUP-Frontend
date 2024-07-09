import { useContext } from "react";
import { NavContext } from "../../context/Nav/NavContext";

export const Bars = () => {
  const { showMenu } = useContext(NavContext);
  return (
    <div className=" aspect-square w-7 py-[3px] flex flex-col justify-between bg-transparent">
      <div
        className={`bar  ${
          showMenu ? "translate-y-[12px] rotate-45" : " translate-y-0 rotate-0"
        }`}
      ></div>
      <div
        className={`bar ${
          showMenu
            ? " opacity-0"
            : "transition-all  duration-700 opacity-100 h-[1px]  bg-white"
        }`}
      ></div>
      <div
        className={`bar ${
          showMenu
            ? "-translate-y-[8px] -rotate-45 "
            : " -translate-y-0 -rotate-0 "
        }`}
      ></div>
    </div>
  );
};
