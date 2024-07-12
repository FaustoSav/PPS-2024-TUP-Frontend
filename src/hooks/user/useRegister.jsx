import { useState } from 'react';

import { RegisterUser } from '../../services/implementations/user/userService';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export const useRegister = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function Register(newUser) {
    try {
      setLoading(true);
      const user = {
        userName: newUser.name + newUser.lastName,
        firstName: newUser.name,
        lastName: newUser.lastName,
        password: newUser.password,
        email: newUser.email,
      };
      RegisterUser(user)
        .then((response) => {
          console.log('Response Register:', response);
          console.log('User enviado: ', user);
          toast.success(
            'Usuario creado correctamente, por favor pruebe iniciar sesión'
          );
          setTimeout(() => {
            navigate('/signin');
          }, 3000);
        })
        .catch((err) => {
          setError(err.response.data);
          toast.error(err.response.data);
        });
    } catch (error) {
      setError(error.response.data);

      toast.error(error.response.data);
    } finally {
      setLoading(false);
    }
  }

  return { Register, error, loading };
};
