/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { NavContext } from "./NavContext";

export const NavProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);


  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("overflow-hidden"); // Agrega la clase al body
    } else {
      document.body.classList.remove("overflow-hidden"); // Elimina la clase del body
    }
  }, [showMenu]);

  const ProductCategories = [
    { name: "Pequeños", route: "small" },
    { name: "Medianos", route: "medium" },
    { name: "Grandes", route: "large" },
  ];
  return (
    <NavContext.Provider
      value={{
        showMenu,
        setShowMenu,
        ProductCategories,
        showDropdown,
        setShowDropdown
      }}
    >
      {children}
    </NavContext.Provider>
  );
};
