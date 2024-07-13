const parseDate = (dateString) => {
  const [datePart] = dateString.split('T');
  const [year, month, day] = datePart.split('-');

  return { year, month, day };
};

export const OrderHeader = ({ date, total, orderId }) => {
  const { year, month, day } = parseDate(date);

  return (
    <>
      <div className="order_header-container">
        <span className="order_header-title">Número de Orden</span>
        <span className="oder_header-detail">{orderId}</span>
      </div>
      <div className="order_header-container">
        <span className="order_header-title">Fecha de compra</span>
        <span className="oder_header-detail">
          {day}/{month}/{year}
        </span>
      </div>
      <div className="order_header-container">
        <span className="order_header-title">Total</span>
        <span className="oder_header-detail text-inherit text-dark-light font-medium dark: ">
          {total}
        </span>
      </div>
    </>
  );
};
