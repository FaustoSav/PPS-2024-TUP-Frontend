/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { ProductsContext } from './ProductsContext';

export const ProductsProvider = ({ children }) => {
  const [categories] = useState([
    { name: 'pequeños', route: 'small', imageId: 'small.png' },
    { name: 'medianos', route: 'medium', imageId: 'medium.png' },
    { name: 'grandes', route: 'large', imageId: 'large.png' },
  ]);
  const cartLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
  const [cartItems, setCartItems] = useState(cartLocalStorage);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const ProductExistInCart = (productId) => {
    let productExist = cartItems.find((product) => product.id == productId);
    console.log('Product Exist:' + productExist);
    return productExist;
  };

  const GetCartTotal = () => {
    let total = 1;
    return total;
  };
  return (
    <ProductsContext.Provider
      value={{
        categories,
        cartItems,
        setCartItems,
        ProductExistInCart,
        GetCartTotal,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
