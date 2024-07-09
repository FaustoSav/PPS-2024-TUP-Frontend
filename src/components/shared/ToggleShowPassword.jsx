import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
function ToggleShowPassword({ password, TogglePassword }) {
  return (
    <button onClick={TogglePassword} id="show-password-button">
      {password ? (
        <AiFillEyeInvisible className="show-password-icon" />
      ) : (
        <AiFillEye className="show-password-icon" />
      )}
    </button>
  );
}

export default ToggleShowPassword;
