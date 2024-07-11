import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
function ToggleShowPassword({ password, TogglePassword }) {
  return (
    <div className="cursor-pointer absolute right-3 bottom-[15px] opacity-75" onClick={TogglePassword} id="show-password-button">
      {password ? (
        <AiFillEyeInvisible className="show-password-icon" />
      ) : (
        <AiFillEye className="show-password-icon" />
      )}
    </div>
  );
}

export default ToggleShowPassword;
