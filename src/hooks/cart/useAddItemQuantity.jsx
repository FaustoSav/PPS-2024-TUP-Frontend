import { useContext } from 'react';
import { ProductsContext } from '../../context/Products/ProductsContext';

export const useAddItemQuantity = () => {
  const { cartItems, setCartItems, ProductExistInCart } =
    useContext(ProductsContext);

  function AddItemQuantity(product) {
    let prevCartItems = [...cartItems];

    let existingItem = ProductExistInCart(product.id);

    if (existingItem) {
      prevCartItems = prevCartItems.map((item) =>
        item.id === existingItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      const NewCartItem = {
        id: product.id,
        categoryId: product.categoryId,
        imageId: product.imageId,
        price: product.price,
        name: product.productName,
        quantity: 1,
      };

      prevCartItems = [NewCartItem,...prevCartItems];
    }

    setCartItems(prevCartItems);
  }

  return { AddItemQuantity };
};
