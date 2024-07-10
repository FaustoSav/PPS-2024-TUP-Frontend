import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
function ToggleShowPassword({ password, TogglePassword }) {
  return (
    <span  onClick={TogglePassword} id="show-password-button" className="select-none cursor-pointer" >
      {password ? (
        <AiFillEyeInvisible className="show-password-icon" />
      ) : (
        <AiFillEye className="show-password-icon" />
      )}
    </span>
  );
}

export default ToggleShowPassword;
