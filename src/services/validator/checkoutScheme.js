import {  object, string } from 'yup';

export const checkoutScheme = object({
  email: string().email('Correo inválido').required('Campo requerido'),
  tarjetaNombre: string()
    .required('Campo requerido')
    .min(6, 'Minimo 4 caracteres')
    .max(80),
  tarjetaNumero: string()
    .required('Campo requerido')
    .transform(value => value.replace(/\s+/g, ''))
    .matches(/^[0-9]+$/, "Solo se permiten números")
    .min(5)
    .max(16, 'Número inválido')
    .typeError('Número de tarjeta inválido'),
  expirationDate: string()
    .required('Campo requerido')
    .max(5, 'Fecha inválida. Ej: MM/AA')
    .matches(/([0-9]{2})\/([0-9]{2})/, 'Fecha inválida. Ej: MM/AA')
    ,
  cvv: string()
    .required('Campo requerido')
    .matches(/^[0-9]+$/, "Solo se permiten números")
    .min(3, 'CVV inválido')
    .max(3, 'CVV inválido')
    .typeError('CVV inválido'),
  direccion: string()
    .required('Campo requerido')
    .min(3, 'Direccion inválida')
    .max(90, 'Muy largo'),
  provincia: string()
    .required('Campo requerido')
    .min(3, 'Provincia inválida')
    .max(70, 'Provincia inválida'),
  ciudad: string()
    .required('Campo requerido')
    .min(3, 'Ciudad inválida')
    .max(70, 'Ciudad inválida'),
  codigoPostal: string()
    .required('Campo requerido')
    .min(3, 'CP inválido')
    .max(16, 'CP inválido'),
});
