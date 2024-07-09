import { useEffect, useState } from 'react';
import { useSearchProducts } from '../../../hooks/products/useSearchProducts';

export const ChatResponse = ({ steps, triggerNextStep }) => {
  const { SearchProducts } = useSearchProducts();

  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    setLoading(true)
    setResult(null)
    setTrigger(false)
  }, [])
  

  const searchProduct = async (productName) => {
    try {
      SearchProducts(productName).then((data) => {
        setResult(data);
        setLoading(false);
        setTrigger(true);
       
      });
    } catch (error) {
      console.error('Error fetching product:', error);
      setResult({ message: 'Error fetching product' });
      setLoading(false);
      setTrigger(true);
    }
  };

  if (loading) {
    searchProduct(steps.productName.value);
  }

  if (trigger) {
    triggerNextStep();
  }

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col gap-1">
          <div className="flex justify-center items-center gap-1">
            <img
              src="/assets/png/products/small.png"
              className="w-1/3 bg-bgSemiLight rounded-md"
              alt=""
            />
            <span className="w-1/3 font-semibold">{result[0].productName}</span>
            <span className="w-1/3 font-semibold">$ {result[0].price}</span>
          </div>
          <a
            className=" text-blue-600"
            href={'http://192.168.0.20:5173/product/' + result[0].id}
          >
            {'http://192.168.0.20:5173/product/' + result[0].id}
          </a>
        </div>
      )}
    </div>
  );
};
