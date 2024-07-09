import { useContext } from "react";
import { Bars } from "./Bars";
import { NavContext } from "../../context/Nav/NavContext";

export const ToggleButton = () => {
  const { setShowMenu } = useContext(NavContext);
  return (
    <div
      onClick={() => setShowMenu((showMenu) => !showMenu)}
      className="cursor-pointer z-10 sm:hidden"
    >
      <Bars />
    </div>
  );
};
