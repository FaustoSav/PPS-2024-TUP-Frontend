import { useEffect, useState } from 'react';
import { GetProductsByCategoryId } from '../../services/implementations/product/productService';

export const useProductsByCategoryId = (categoryId) => {
  const [productsByCategory, setAllProdcutsByCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    GetProductsByCategoryId(categoryId)
      .then((res) => {
        setAllProdcutsByCategory(res.data);
      })
      .catch((err) => setError(err))
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return { productsByCategory, loading, error };
};
