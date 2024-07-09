import ReactInputMask from "react-input-mask";

export const ExpiryDateInput = ({ register, name, placeholder, errors }) => {
  return (
    <div className="input-container">
      <label className="label">
        Fecha de expiración
      </label>
      <ReactInputMask
        mask="99/99"
        maskChar={' '}
        {...register(name)}
        placeholder={placeholder}
      >
        {(inputProps) => (
          <input {...inputProps} className="input autofill:bg-red-200 " />
        )}
      </ReactInputMask>
      <p className="text-red-500 text-[13px] font-medium leading-[13px] mt-1">
        {errors?.message}
      </p>
    </div>
  );
};
