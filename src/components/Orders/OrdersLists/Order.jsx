import OrderDetail from "./OrderDetail";

const Order = ({ id, userId, orderDate, total, orderDetails }) => {
  return (
    <div className="flex flex-col-2 gap-10 ">
      <div className="flex-col min-w-0 gap-x-4 divide-x divide-x-reverse divide-gray-600 pr-10">
        <p className="text-xl">Detalles de la orden</p>
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            Numero de orden
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">{id}</p>
        </div>
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            Datos del usuario de orden
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            Id: {userId}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            nombre
          </p>
        </div>
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">Fecha</p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            {orderDate}
          </p>
        </div>
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            Cantidad de productos
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            {orderDetails.length}
          </p>
        </div>
        <div className="min-w-0 flex-auto">
          <p className="text-xl font-semibold leading-6 text-gray-900">Total</p>
          <p className="mt-1 truncate text-xl leading-5 text-gray-500">
            $ {total}
          </p>
        </div>
      </div>
      <div className="min-w-0 flex flex-col divide-y divide-y-reverse divide-gray-600 ">
        <p className="text-xl ">Detalles de productos</p>
        {orderDetails?.map((details) => (
          <OrderDetail
            key={details.id}
            price={details.price}
            quantity={details.quantity}
          />
        ))}
      </div>
    </div>
  );
};

export default Order;
