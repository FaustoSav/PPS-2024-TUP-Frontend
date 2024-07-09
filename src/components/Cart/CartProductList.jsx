import { useContext } from 'react';
import { CartItem } from './CartItem';
import { ProductsContext } from '../../context/Products/ProductsContext';

export const CartProductList = () => {
  const { cartItems } = useContext(ProductsContext);

  return (
    <section className='w-full'>
      {cartItems.map((item) => {
        return <CartItem item={item} key={item.id} />;
      })}
    </section>
  );
};
