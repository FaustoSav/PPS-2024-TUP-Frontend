import { useContext, useState } from 'react';
import { AuthContext } from '../../context/Auth/AuthContext';
import { GetUserProfile } from '../../services/implementations/user/userService';

export const useProfile = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { token, verifyUserSession } = useContext(AuthContext);
  const [data, setData] = useState(null);

  const GetProfile = async () => {
    setLoading(true);
    try {
      await verifyUserSession(); // Asegúrate de que verifyUserSession sea una función asincrónica si es asíncrona
      const response = await GetUserProfile(token);
      setData(response.data);
      console.log(response.data)
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { GetProfile, data, error, loading };
};
