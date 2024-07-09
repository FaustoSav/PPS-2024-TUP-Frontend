import { NavLink } from "react-router-dom";
import { CartIcon } from "../../icons/CartIcon";

export const CartButton = () => {
  return (
    <NavLink to={'/cart'}>
      <CartIcon />
    </NavLink>
  );
};
