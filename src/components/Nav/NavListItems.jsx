import { useContext } from "react";
import { NavContext } from "../../context/Nav/NavContext";
import { CategoryBig } from "../../icons/CategoryBig";
import { CategoryMedium } from "../../icons/CategoryMedium";
import { CategorySmall } from "../../icons/CategorySmall";
import { NavLink } from "react-router-dom";
export const NavListItems = () => {
  const { ProductCategories, setShowMenu } = useContext(NavContext);
  const Icons = [CategorySmall, CategoryMedium, CategoryBig];
  return (
    <ul className=" space-y-20 sm:flex sm:flex-row sm:space-y-0 sm:gap-3  sm:w-1/2  sm:justify-evenly  ">
      {ProductCategories.map((category,i ) => {
        const Icon = Icons[i];
        return (
          <li className="" key={i}>
            <NavLink
              to={`/categories/${i + 1}`}
              className="capitalize tracking-wide dark:font-medium  flex gap-3 text-sm lg:text-base"
              key={category}
              onClick={() => setShowMenu(false)}
            >
              {Icon && <Icon customStyle="w-7 sm:hidden  " />}
              <div className="flex items-center">
                <span className="sm:hidden  ">Muebles </span>
                {category.name}
              </div>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
