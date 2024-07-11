import { useForm } from 'react-hook-form';
import { signInScheme } from '../../../services/validator/singInScheme';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../Input';
import { InputPassword } from '../InputPassword';
import { useLogin } from '../../../hooks/user/useLogin';
export const SignInForm = () => {
  
  const { Login } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInScheme),
  });

  const onSubmit = (userData) => {
    Login(userData);
  };
  return (
    <form
      className="space-y-6 mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        errors={errors.email}
        name={'email'}
        label={'Correo electronico'}
        placeholder={'pedro@gmail.com'}
        register={register}
      />
      <InputPassword
        errors={errors.password}
        label={'Contraseña'}
        name={'password'}
        placeholder={'******'}
        register={register}
      />

      <button type="submit" className="btn-submit">
        Iniciar Sesión
      </button>
    </form>
  );
};
