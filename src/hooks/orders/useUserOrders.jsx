import { useState } from 'react';
import { GetCurrentUserOrder } from '../../services/implementations/order/orderService';

export const useUserOrders = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userOrders, setUserOrders] = useState(null);

  const GetUserOrders = (token) => {
    try {
      setLoading(true);
      GetCurrentUserOrder(token)
        .then((res) => {
          console.log(res.data);
          setUserOrders(res.data)
        })
        .catch((err) => {
          setError(err);
          console.log(err);
        });
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, GetUserOrders,userOrders };
};
