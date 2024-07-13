import { useContext, useState } from 'react';
import { ProductsContext } from '../../context/Products/ProductsContext';

export const useSummary = () => {
  const { cartItems } = useContext(ProductsContext);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const costoEnvio = 20;
  function SetCartSummary() {
    const newTotal = cartItems.reduce((acc, item) => {
      return (acc += item.price * item.quantity);
    }, 0);
    setSubTotal(newTotal.toFixed(2));
    setTotal((newTotal + costoEnvio).toFixed(2));
  }

  return { SetCartSummary, subTotal, total, costoEnvio, cartItems };
};
