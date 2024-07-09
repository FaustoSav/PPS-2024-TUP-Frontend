import { useContext } from 'react';
import { ProductsContext } from '../../context/Products/ProductsContext';

export const useDeleleteItem = () => {
  const { cartItems, setCartItems } = useContext(ProductsContext);

  function DeleteItem(productToDelete) {
    let currentCartItems = [...cartItems];

    currentCartItems = currentCartItems.filter(
      (item) => item.id != productToDelete.id
    );

    setCartItems(currentCartItems);
  }
  return { DeleteItem };
};
