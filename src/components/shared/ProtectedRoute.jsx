import { useContext } from 'react';
import { AuthContext } from '../../context/Auth/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';


export const ProtectedRoute = ({ route }) => {
  const { isAuthenticated } = useContext(AuthContext);
  

  return isAuthenticated ? <Outlet /> : <Navigate to={route} />;
};
