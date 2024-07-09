import { object, string } from "yup";

export const registerSchema = object({
  fullName: string()
    .required("Campo requerido")
    .min(3, "Minimo 3 caracteres")
    .max(64),
  email: string().email("Correo inválido").required("Campo requerido"),
  password: string()
    .required("Campo requerido")
    .min(6, "Minimo 6 caracteres")
    .max(64),
});
