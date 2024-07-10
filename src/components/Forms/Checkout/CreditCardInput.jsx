import ReactInputMask from 'react-input-mask';

export const CreditCardInput = ({ register, name, placeholder, errors }) => {
  return (
    <div className="input-container">
      <label className="label">Número de tarjeta</label>
      <ReactInputMask
        mask="9999 9999 9999 9999"
        maskChar={' '}
        {...register(name)}
        placeholder={placeholder}
      >
        {(inputProps) => (
          <input {...inputProps} className="input autofill:bg-black" />
        )}
      </ReactInputMask>
      <p className="text-red-500 text-[13px] font-medium leading-[13px] mt-1">
        {errors?.message}
      </p>
    </div>
  );
};
