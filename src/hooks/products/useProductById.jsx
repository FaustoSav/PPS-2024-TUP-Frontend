import { useEffect, useState } from 'react';
import { GetProductById } from '../../services/implementations/product/productService';

export const useProductById = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    GetProductById(productId)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  return { product, loading, error };
};
