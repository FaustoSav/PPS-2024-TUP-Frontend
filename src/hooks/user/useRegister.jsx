import {  useState } from 'react';

import { RegisterUser } from '../../services/implementations/user/userService';
//import { useNavigate } from 'react-router-dom';

export const useRegister = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  //const navigate = useNavigate();

  function Register(newUser) {
    try {
      setLoading(true);
      RegisterUser(newUser)
        .then((response) => {
            console.log(response)
          //navigate('/login');
        })
        .catch((err) => {
          setError(err);
          console.log('ThenCatch Error Register: ' + err);
        });
    } catch (error) {
      setError(error);
      console.log('TryCatch erro Register: ' + error);
    } finally {
      setLoading(false);
    }
  }

  return { Register, error, loading };
};
