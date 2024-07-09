import { useNavigate } from 'react-router-dom';

export const ProductCard = ({ title, price, stock, productId,available }) => {
  const navigate = useNavigate();

  const RedirectToOvertivew = (id) => {
    available &&  navigate('/product/' + id);
   
  };
  return (
    <article
      onClick={() => RedirectToOvertivew(productId)}
      className={`mt-10  flex flex-col gap-5 max-w-xl group cursor-pointer ${
        !stock ? 'opacity-45 cursor-not-allowed' : 'opacity-100'
      }`}
    >
      <div className="cardBgLight grid place-items-center aspect-square  transition-all duration-200 borderDark border-opacity-10 group-hover:drop-shadow group-hover:border-opacity-10 ">
        <img
          className=" w-1/2 drop-shadow-xl transition-transform duration-200  group-hover:scale-105"
          src="../../../public/assets/png/products/small.png"
          alt="image"
        />
      </div>

      <div className="w-full flex justify-between">
        <h3 className="font-[500] text-dark-light">{title}</h3>
        <h4 className="tracking-wide  text-[#6b7280] ">${price}</h4>
      </div>
      
    </article>
  );
};
