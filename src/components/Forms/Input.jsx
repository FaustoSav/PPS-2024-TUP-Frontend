import { CreditCardInput } from "./Checkout/CreditCardInput";
import { ExpiryDateInput } from "./Checkout/ExpiryDateInput";

export const Input = ({ name, label, register, placeholder, errors }) => {
  if (name === 'tarjetaNumero') {
    return (
      <CreditCardInput
        register={register}
        name={name}
        placeholder={placeholder}
        errors={errors}
      />
    );
  }

  if (name === 'expirationDate') {
    return (
      <ExpiryDateInput
        register={register}
        name={name}
        placeholder={placeholder}
        errors={errors}
      />
    );
  }

  return (
    <div className="input-container">
      <label className="label">
        {label}
      </label>
      <input {...register(name)} placeholder={placeholder} className="input" />
      <p className="text-red-500 text-[13px] font-medium leading-[13px] mt-1">
        {errors?.message}
      </p>
    </div>
  );
};
