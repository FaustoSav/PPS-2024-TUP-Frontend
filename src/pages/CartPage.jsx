import { Subtitle } from '../components/shared/Subtitle';

import { Summary } from '../components/Cart/Summary';
import { CartProductList } from '../components/Cart/CartProductList';
import { useContext } from 'react';
import { ProductsContext } from '../context/Products/ProductsContext';

import { EmptyCartState } from '../components/shared/EmptyCartState';

export const CartPage = () => {
  const { cartItems } = useContext(ProductsContext);
  if (!cartItems.length) {
    return <EmptyCartState />;
  }
  return (
    <section className="flex flex-col justify-center items-center gap-10 pt-10 w-full  max-w-4xl mx-auto ">
      <Subtitle text={'Carrito de compras'} />
      <CartProductList />
      <Summary />
    </section>
  );
};
