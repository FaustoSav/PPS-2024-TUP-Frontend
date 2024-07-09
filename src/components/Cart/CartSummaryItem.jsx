

export const CartSummaryItem = ({ title, price, customStyle }) => {
  return (
    <div className="  w-full flex justify-between tracking-wider items-center borderLight border-opacity-10 border-x-0 border-t-0 last-of-type:border-0 py-5 dark:text-gray-200">
      <span className={`${customStyle}`}>{title}</span>
      <span className="font-medium" >$ {price}</span>
    </div>
  );
};
