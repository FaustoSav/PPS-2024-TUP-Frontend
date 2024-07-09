import { useContext } from 'react';
import { ProductsContext } from '../../context/Products/ProductsContext';
import { useDeleleteItem } from './useDeleleteItem';

export const useDecreaseItemQuantity = () => {
  const { DeleteItem } = useDeleleteItem();
  const { ProductExistInCart, cartItems,setCartItems } = useContext(ProductsContext);
  

  function DecreaseItemQuantity(product) {
    let prevCartItems = [...cartItems];
    let existingItem = ProductExistInCart(product.id);

    if (existingItem) {
      if (existingItem.quantity > 1) {
        prevCartItems = prevCartItems.map((item) =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        DeleteItem(existingItem);
      }
    }
    setCartItems(prevCartItems);
  }

  return { DecreaseItemQuantity };
};
