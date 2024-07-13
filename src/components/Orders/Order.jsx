import { OrderHeader } from './OrderHeader';
import { OrderDetail } from './OrderDetail';
import { useState } from 'react';

export const Order = ({ order }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <article className="bg-bgSemiLight px-3 border-dark-light border-opacity-5  w-full rounded-md dark:bg-secondaryDark">
      <div className="py-3   flex flex-col divide-dark-light  ">
        <OrderHeader
          orderId={order.id}
          date={order.createdAt}
          total={order.total}
        />

        <div
          onClick={() => setShowDetails((prevState) => !prevState)}
          className=" relative cursor-pointer hover:drop-shadow-md   text-center text-dark-light bg-light-dark py-2 rounded-md opacity-80 mb-5 border-[1px] border-black customShadow  px-10  "
        >
          {showDetails ? 'Ocultar detalles' : 'Ver detalles'}
          <span
            className={`absolute right-3 transition-transform duration-300 ${
              showDetails && 'rotate-180'
            }`}
          >
            ↓
          </span>
        </div>
      </div>

      <div
        className={`h-0 overflow-hidden flex flex-col    transition-all duration-300 rounded-md mb-2 px-3 text-sm ${
          showDetails && 'h-auto overflow-auto  bg-light-dark '
        }`}
      >
        {order.orderDetails.map((item) => {
          return <OrderDetail key={item.id} orderDetail={item} />;
        })}
      </div>
    </article>
  );
};
