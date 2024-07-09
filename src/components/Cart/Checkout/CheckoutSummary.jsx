import { useContext, useEffect } from 'react';
import { ProductsContext } from '../../../context/Products/ProductsContext';

import { CartSummaryItem } from '../CartSummaryItem';
import { useSummary } from '../../../hooks/cart/useSummary';

export const CheckoutSummary = () => {
  const { categories } = useContext(ProductsContext);
  const { SetCartSummary, total, subTotal, costoEnvio, cartItems } =
    useSummary();
  useEffect(() => {
    SetCartSummary();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);
  return (
    <section className="flex flex-col justify-center items-center borderDark  pt-0 rounded-xl mt-6  max-h-[520px] dark:bg-primaryDark w-full md:w-1/2 ">
      <div className='overflow-y-scroll  px-2  w-full ' id='style-4'>
        {cartItems.map((item, index) => {
          return (
            <article
              key={index}
              className="flex  justify-between gap-3 w-full  h-[160px] sm:h-[180px]  borderDark border-[.5px] border-opacity-15 border-x-0 border-t-0 last:border-none py-8  text-dark-light first:py-6 first:h-[144px] first:sm:h-[164px] "
            >
              <div className="w-auto ">
                <img
                  className="bg-bgSemiLight rounded-md  aspect-square h-full lg:p-2  "
                  src="assets/png/products/small.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between items-start   w-1/3 ">
                <div className="">
                  <h4 className="font-medium">{item.name}</h4>
                  <h5 className="capitalize font-normal">
                    {categories[item.categoryId - 1].name}
                  </h5>
                </div>
              </div>
              <div className="flex flex-col justify-between items-end  w-1/3   ">
                <span className="font-semibold cursor-pointer  px-1 "></span>
                <span className="font-medium">$ {item.price}</span>
              </div>
            </article>
          );
        })}
      </div>
      <div className='w-full dark:bg-secondaryDark  rounded sm:rounded-lg px-5'>
      <CartSummaryItem price={subTotal} title={'Sub total'} />
      <CartSummaryItem price={costoEnvio} title={'Costo de envío'} />
      <CartSummaryItem
        price={total}
        customStyle={'font-semibold'}
        title={'Total'}
      />
      </div>
      
    </section>
  );
};
