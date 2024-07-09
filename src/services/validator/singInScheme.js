import { object, string } from "yup";

export const signInScheme = object({
  email: string().email("Correo inválido").required("Campo requerido"),
  password: string()
    .required("Campo requerido")
    .min(6, "Minimo 6 caracteres")
    .max(64),
});
