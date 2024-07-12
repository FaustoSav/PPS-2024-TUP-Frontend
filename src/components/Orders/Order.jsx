import { OrderHeader } from './OrderHeader';
import { OrderDetail } from './OrderDetail';

export const Order = ({ order }) => {
  return (
    <article>
      <OrderHeader
        orderId={order.id}
        date={order.createdAt}
        total={order.total}
      />

      {order.orderDetails.map((item) => {
        return <OrderDetail key={item.id} orderDetail={item} />;
      })}
    </article>
  );
};
