/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
// Asegúrate de usar 'jwt-decode' correctamente
import { jwtDecode } from 'jwt-decode';
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    verifyUserSession();
  }, []);

  const verifyUserSession = () => {
    const storedToken = getToken();
    if (!storedToken) {
      handleLogout();
      console.log(
        'Auth proveider - Logout porque no hay token en local storage'
      );
      return;
    }
    try {
      const decodedToken = jwtDecode(storedToken);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        handleLogout();
        console.log(' Auth proveider - Expiro el token y se cerro sesion');
      } else {
        console.log('Auth proveider - token valido');
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error(' Auth proveider - Error decoding token:', error);
      handleLogout();
    }
  };

  const handleLogout = () => {
    clearToken();
    setIsAuthenticated(false);
  };

  const getToken = () => {
    let storedToken = localStorage.getItem('token');
    return storedToken;
  };

  const clearToken = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  const saveUserToken = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <AuthContext.Provider
      value={{
        clearToken,
        saveUserToken,
        isAuthenticated,
        handleLogout,
        token,
        verifyUserSession,
        toggleTheme,
        setTheme,
        theme,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
