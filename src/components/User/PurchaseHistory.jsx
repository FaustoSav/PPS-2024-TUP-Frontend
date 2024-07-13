/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import { useUserOrders } from '../../hooks/orders/useUserOrders';
import { Order } from '../Orders/Order';
import { AuthContext } from '../../context/Auth/AuthContext';

export const PurchaseHistory = () => {
  const { token, isAuthenticated } = useContext(AuthContext);

  const { GetUserOrders, userOrders } = useUserOrders();

  useEffect(() => {
    if (isAuthenticated && token) {
      GetUserOrders(token);
    }
  }, []);

  if (!userOrders) {
    return <div>No hay ordenes</div>;
  }
  return (
    <div>
      <h1 className="font-semibold text-dark-light pt-5">
        Historial de compras
      </h1>
      <h3 className="text-sm font-medium  text-neutral-500">
        Detalle de compras realizadas, precios y fechas.
      </h3>
      <section className=" mt-5 flex flex-col justify-center items-center gap-5 mb-5">
        {userOrders.map((order) => {
          return <Order key={order.id} order={order} />;
        })}
      </section>
    </div>
  );
};
