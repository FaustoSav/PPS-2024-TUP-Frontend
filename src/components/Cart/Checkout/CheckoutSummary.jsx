import { useContext } from "react";
import { ProductsContext } from "../../../context/Products/ProductsContext";
import { useSummary } from "../../../hooks/cart/useSummary";

export const CheckoutSummary = () => {
  
  const { categories } = useContext(ProductsContext);
  const {cartItems} = useSummary()
  console.log(cartItems)
  return (
    <section className="flex flex-col  justify-start items-start borderDark p-3 pt-0 rounded-xl mt-6 overflow-y-scroll max-h-[520px] dark:bg-secondaryDark">
      {
        cartItems.map((item, index) => {
          return (
           <article key={index} className="flex  justify-between gap-3 w-full  h-[160px] sm:h-[180px] lg:h-[180px] borderDark border-[.5px] border-opacity-15 border-x-0 border-t-0 last:border-none py-8  text-dark-light ">
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
               <h5 className="capitalize font-normal">{categories[item.categoryId - 1].name}</h5>
             </div>
             
           </div>
           <div className="flex flex-col justify-between items-end  w-1/3   ">
             <span
               
               className="font-semibold cursor-pointer  px-1 "
             >
               
             </span>
             <span className="font-medium">$ {item.price}</span>
           </div>
         </article>
          )
         })
      }
    </section>
  )
}
