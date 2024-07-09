import { useContext, useState } from 'react';
import { AuthContext } from '../../context/Auth/AuthContext';
import { PostOrder } from '../../services/implementations/order/orderService';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export const usePostOrder = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleCreateOrder = (items) => {
    setLoading(true);
    setError(null);

    try {
      const newOrder = {
        userId: 1,
        orderDetails: items.map((item) => {
          return {
            productId: item.id,
            quantity: item.quantity,
            price: item.price,
          };
        }),
      };
      PostOrder(token, newOrder)
        .then((res) => {
          console.log(res);
          toast.success('Orden de compra creada correctamente');

          setTimeout(() => {
            navigate('/')
          }, 4000 )

        })
        .catch((err) => {
          console.log(err);
          toast.error('Hubo un problema al crear la Orden de compra');
        });
    } catch (error) {
      setError(error);
      console.error(error);
      toast.error('Hubo un problema al crear la Orden de compra');
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, handleCreateOrder };
};
