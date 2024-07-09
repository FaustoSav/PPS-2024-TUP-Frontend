import { useContext } from 'react';
import { useAddItemQuantity } from '../../hooks/cart/useAddItemQuantity';
import { useDecreaseItemQuantity } from '../../hooks/cart/useDecreaseItemQuantity';
import { useDeleleteItem } from '../../hooks/cart/useDeleleteItem';
import { ProductsContext } from '../../context/Products/ProductsContext';

export const CartItem = ({ item }) => {
  const { categories } = useContext(ProductsContext);
  const { AddItemQuantity } = useAddItemQuantity();
  const { DecreaseItemQuantity } = useDecreaseItemQuantity();
  const { DeleteItem } = useDeleleteItem();

  return (
    <article className="flex justify-between text-dark-light  w-full  h-[160px] sm:h-[180px] lg:h-[200px] borderDark border-[.5px] border-opacity-15 border-x-0 border-t-0  py-8 ">
      <div className="w-auto ">
        <img
          className="bg-bgSemiLight rounded-md  aspect-square h-full lg:p-2  "
          src="assets/png/products/small.png"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-between items-start   w-1/3 ">
        <div className="">
          <h4 className="font-semibold">{item.name}</h4>
          <h5 className="capitalize">{categories[item.categoryId - 1].name}</h5>
        </div>
        <div className="addContainer   ">
          <div
            onClick={() => DecreaseItemQuantity(item)}
            className="cart_quantity-change-item  "
          >
            –
          </div>
          <div className="cart_quantity-change-item cursor-default hover:bg-opacity-50 ">
            {item.quantity}
          </div>
          <div
            onClick={() => AddItemQuantity(item)}
            className="cart_quantity-change-item  "
          >
            +
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end  w-1/3    ">
        <span
          onClick={() => DeleteItem(item)}
          className="font-semibold cursor-pointer  px-1 "
        >
          ✕
        </span>
        <span className="font-medium">$ {item.price}</span>
      </div>
    </article>
  );
};
