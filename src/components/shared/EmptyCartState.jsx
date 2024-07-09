import { EmptyCartIcon } from '../../icons/EmptyCartIcon';

export const EmptyCartState = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 p-5 mt-32">
      {' '}
      <EmptyCartIcon />
      <div className='flex flex-col items-center font-medium'>
        <span className="text-xl">Tu carrito está vacío</span>
        <span className="text-xl">Pedazo de pobre</span>
      </div>
    </div>
  );
};
