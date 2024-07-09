import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../../services/validator/registerScheme";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { FormHeader } from "../FormHeader";
import { FormFooter } from "../FormFooter";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <FormHeader title={"Crear Cuenta"} />

      <form
        className="space-y-6 mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          errors={errors.fullName}
          name={"fullName"}
          label={"Nombre Completo"}
          placeholder={"Pedro Perez"}
          register={register}
        />
        <Input
          errors={errors.email}
          name={"email"}
          label={"Correo electronico"}
          placeholder={"pedro@gmail.com"}
          register={register}
        />
        <div>
          <InputPassword
            errors={errors.password}
            label={"Contraseña"}
            name={"password"}
            placeholder={"******"}
            register={register}
          />
        </div>
        <button type="submit" className="btn-submit">
          Crear cuenta
        </button>
      </form>

      <FormFooter
        question={"¿Ya tenes una cuenta?"}
        text={"Iniciar sesion"}
        route={"/signin"}
      />
    </div>
  );
};
