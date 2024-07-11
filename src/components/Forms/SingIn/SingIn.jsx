/* eslint-disable react-hooks/exhaustive-deps */
import { FormHeader } from "../FormHeader";
import { FormFooter } from "../FormFooter";
import { SignInForm } from "./SignInForm";
import { useContext } from "react";
import { AuthContext } from "../../../context/Auth/AuthContext";
import { Navigate } from "react-router-dom";
import { Toaster } from "sonner";

export const SignIn = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if(isAuthenticated){
    return <Navigate to={'/'}/>
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <Toaster richColors position="top-center" closeButton />
      <FormHeader title={"Iniciar sesion"} />

      <SignInForm />

      <FormFooter
        question={"¿No tienes una cuenta?"}
        text={"Registrarse"}
        route={"/register"}
      />
    </div>
  );
};
