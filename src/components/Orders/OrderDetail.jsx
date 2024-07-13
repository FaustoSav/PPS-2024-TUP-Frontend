export const OrderDetail = ({ orderDetail }) => {
  return (
    <div className=" flex   py-2  items-center justify-between text-dark-light gap-3  border-dark-light border-x-0 border-t-0 last:border-0  dark:border-x-0 dark:border-t-0">
      <div className=" py-1  h-full w-1/5 aspect-square ">
        <img
          src="assets/png/products/small.png"
          alt=""
          className=" bg-neutral-200 rounded p-1     "
        />
      </div>

      <div className="flex flex-col justify-between items-start gap-1   ">
        <span className="font-medium overflow-scroll max-h-[50px] leading-4">
          {' '}
          Leatherbound Daily Journal Set{' '}
        </span>
        <span className="opacity-80  dark:font-light">${orderDetail.price}  -  Cantidad: {orderDetail.quantity}</span>
      </div>
      {/* <div className="flex w-1/4 ">Cant: 1{orderDetail.quantity}</div> */}

      <div className="text-blue-600 font-medium  w-1/4  text-center ">Ver producto</div>
    </div>
  );
};
