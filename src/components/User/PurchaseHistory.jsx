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
      <section className="flex flex-col items-center justify-evenly gap-2">
        {userOrders.map((order) => {
         return (<Order key={order.id} order={order} />) 
        })}
      </section>
    </div>
  );
};
