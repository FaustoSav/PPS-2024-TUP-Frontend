import { useContext } from 'react';
import { AuthContext } from '../../context/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import { NavContext } from '../../context/Nav/NavContext';

export const Dropdown = () => {
  const { isAuthenticated, handleLogout } = useContext(AuthContext);
  const { showDropdown } = useContext(NavContext);

  const navigate = useNavigate();

  const Logout = async () => {
    handleLogout();
  };
  return (
    <ul
      className={` transition-opacity duration-100 absolute -bottom-[130px] -right-7  pt-[17px]  text-center  bg-dark-white  divide-y-[1px]  divide-neutral-600 dark:divide-neutral-400 ${
        !showDropdown && 'hidden '
      }`}
    >
      {isAuthenticated ? (
        <>
          <li className="dropdown-item" onClick={() => navigate('/profile')}>
            {' '}
            Mi perfil
          </li>
          <li className="dropdown-item" onClick={Logout}>
            Cerrar sesión
          </li>
        </>
      ) : (
        <>
          <li className="dropdown-item" onClick={() => navigate('/signin')}>
            Iniciar Sesion
          </li>
          <li className="dropdown-item" onClick={() => navigate("/register")}>
            Registrarse
          </li>
        </>
      )}
    </ul>
  );
};
