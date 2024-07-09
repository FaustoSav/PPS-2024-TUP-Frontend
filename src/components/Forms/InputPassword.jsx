import { useState } from "react";
import ToggleShowPassword from "../shared/ToggleShowPassword";

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
    <div className="input-container ">
      <label className="font-[500]">{label}</label>
      <input
        type={showPassword ? "text" : "password"}
        {...register(name)}
        placeholder={placeholder}
        className="input"
      />
      <ToggleShowPassword
        password={showPassword}
        TogglePassword={changeShowPasswordHandler}
      />
      <p>{errors?.message}</p>
    </div>
  );
};
