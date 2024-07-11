import { useContext, useState } from 'react';
import { AuthContext } from '../../context/Auth/AuthContext';
import { SignInUser } from '../../services/implementations/user/userService';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { saveUserToken } = useContext(AuthContext);
  const navigate = useNavigate();

  function Login(userData) {
    try {
      setLoading(true);
      SignInUser(userData.email, userData.password)
        .then((AuthResponse) => {
          saveUserToken(AuthResponse.data);
          navigate('/');
        })
        .catch((err) => {
          setError(err);
          console.log('ThenCatch Error Login: ' + err);
        });
    } catch (error) {
      setError(error);
      console.log('TryCatch erro Login: ' + error);
    } finally {
      setLoading(false);
    }
  }

  return { Login, error, loading };
};
