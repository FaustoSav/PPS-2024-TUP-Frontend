import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../../services/validator/registerScheme';
import { Input } from '../Input';
import { InputPassword } from '../InputPassword';
import { FormHeader } from '../FormHeader';
import { FormFooter } from '../FormFooter';
import { useRegister } from '../../../hooks/user/useRegister';
import { Toaster } from 'sonner';

export const Register = () => {
  const { Register } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (newUserData) => {
    Register(newUserData);
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
     <Toaster richColors position="top-center" closeButton />
      <FormHeader title={'Crear Cuenta'} />

      <form
        className="space-y-6 mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          errors={errors.name}
          name={'name'}
          label={'Nombre'}
          placeholder={'Pedro'}
          register={register}
        />
        <Input
          errors={errors.lastName}
          name={'lastName'}
          label={'Apellido'}
          placeholder={'Perez'}
          register={register}
        />
        <Input
          errors={errors.email}
          name={'email'}
          label={'Correo electronico'}
          placeholder={'pedro@gmail.com'}
          register={register}
        />
        <div>
          <InputPassword
            errors={errors.password}
            label={'Contraseña'}
            name={'password'}
            placeholder={'******'}
            register={register}
          />
        </div>
        <button type="submit" className="btn-submit">
          Crear cuenta
        </button>
      </form>

      <FormFooter
        question={'¿Ya tenes una cuenta?'}
        text={'Iniciar sesion'}
        route={'/signin'}
      />
    </div>
  );
};
