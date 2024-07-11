import { useState } from 'react';
import ToggleShowPassword from '../shared/ToggleShowPassword';

export const InputPassword = ({
  name,
  label,
  register,
  placeholder,
  errors,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const changeShowPasswordHandler = () => {
    setShowPassword(!showPassword);

    console.log(showPassword);
  };
  return (
    <div className="input-container relative" >
      <label className="font-[500]">{label}</label>
      <input
        type={showPassword ? 'text' : 'password'}
        {...register(name)}
        placeholder={showPassword ? 'Contraseña' : placeholder}
        className="input"
      />
      <ToggleShowPassword
        password={showPassword}
        TogglePassword={changeShowPasswordHandler}
      />
      <p className="text-red-500 text-[13px] font-medium leading-[13px] mt-1">
        {errors?.message}
      </p>
    </div>
  );
};
