import { useNavigate } from "react-router-dom";

export const FormFooter = ({ question, text, route }) => {
  const navigate = useNavigate();
  return (
    <div className="mt-10 text-center text-sm text-gray-500 flex mx-auto items-center justify-center gap-3  ">
      <p>{question}</p>
      <span
        onClick={() => navigate(route)}
        className="font-semibold leading-6 text-black hover:underline underline-offset-2 cursor-pointer"
      >
        {text}
      </span>
    </div>
  );
};
