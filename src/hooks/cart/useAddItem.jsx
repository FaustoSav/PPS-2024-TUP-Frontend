import { useContext } from 'react';
import { ProductsContext } from '../../context/Products/ProductsContext';
import { toast } from 'sonner';

export const useAddItem = () => {
  const { cartItems, setCartItems, ProductExistInCart } =
    useContext(ProductsContext);

  function AddToCart(product) {
    let prevCartItems = [...cartItems];

    let existingItem = ProductExistInCart(product.id);

    if (existingItem) {
      toast.error('El producto seleccionado ya existe en el carrito')
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
      toast.success('El producto fue agregado al carrito')
    }

    setCartItems(prevCartItems);
  }

  return { AddToCart };
};
