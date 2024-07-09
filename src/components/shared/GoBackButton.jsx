import { useNavigate } from "react-router-dom";
import { LeftArrow } from "../../icons/LeftArrow";

export const GoBackButton = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(-1)} className=" text-dark-light cursor-pointer flex underline decoration-transparent decoration-[0.8px] underline-offset-[3px] hover:decoration-secondaryDark transition-colors duration-200  my-10 ">
      {" "}
      <LeftArrow /> Volver{" "}
    </div>
  );
};
