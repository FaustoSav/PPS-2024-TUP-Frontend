import { useForm } from 'react-hook-form';
import { Input } from '../Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { checkoutScheme } from '../../../services/validator/checkoutScheme';
import { checkoutFormData } from '../../../services/const/checkoutFormData';
import { useSummary } from '../../../hooks/cart/useSummary';
import { usePostOrder } from '../../../hooks/orders/usePostOrder';
export const CheckoutForm = () => {
  const { cartItems } = useSummary();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkoutScheme),
  });

  const { handleCreateOrder, loading } = usePostOrder();
  // Password = "has3vgHdhDfbsSajsd",
  // Email = "usuario1@gmail.com",
  const onSubmit = () => {
    handleCreateOrder(cartItems);
  };
  return (
    <form
      className="grid grid-cols-3 grid-rows-6 gap-x-3 gap-y-5 max-w-3xl md:w-1/2 "
      onSubmit={handleSubmit(onSubmit)}
    >
      {checkoutFormData.map((input) => {
        return (
          <div key={input.name} className={`${input.customClass} `}>
            <Input
              errors={errors[input.name]}
              name={input.name}
              label={input.label}
              placeholder={input.placeholder}
              register={register}
            />
          </div>
        );
      })}

      <button type="submit" className="btn-submit col-span-2 col-start-2 ">
        {loading ? (
          <div className="flex items-center gap-3 font-medium ">
            <div
              className="animate-spin inline-block size-5 border-[2px] border-current border-t-transparent  rounded-full dark:text-black"
              role="status"
              aria-label="loading"
            ></div>{' '}
            Procesando compra
          </div>
        ) : (
          'Realizar Compra'
        )}
      </button>
    </form>
  );
};
