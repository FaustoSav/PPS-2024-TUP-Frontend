import { useNavigate } from "react-router-dom";

export const FormFooter = ({ question, text, route }) => {
  const navigate = useNavigate();
  return (
    <div className="mt-10 text-center text-sm text-dark-light flex mx-auto items-center justify-center gap-3  ">
      <p>{question}</p>
      <span
        onClick={() => navigate(route)}
        className="font-semibold leading-6  hover:underline underline-offset-2 cursor-pointer dark:font-medium"
      >
        {text}
      </span>
    </div>
  );
};
