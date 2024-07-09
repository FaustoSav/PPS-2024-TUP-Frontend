import { Link } from "react-router-dom";
import { Logo } from "../../icons/Logo";
export const FormHeader = ({title}) => {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <div className="grid place-content-center">
        <Logo customStyle={"w-12"} />
      </div>
      <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900 flex flex-col gap-2">
        {title}
        <span className="font-[400] text-sm "> o <Link className="font-[500] ml-1 underline underline-offset-[2px]" to={'/'}> Continúe sin ingresar una cuenta</Link></span>
      </h2>
    </div>
  );
};
