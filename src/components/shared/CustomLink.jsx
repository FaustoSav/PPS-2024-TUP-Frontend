import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { NavContext } from "../../context/Nav/NavContext";

export const CustomLink = ({ route, text }) => {
  const { setShowMenu } = useContext(NavContext);
  return (
    <NavLink
      onClick={() => setShowMenu(false)}
      className="capitalize tracking-wide "
      to={`${route}`}
    >
      {text}
    </NavLink>
  );
};
