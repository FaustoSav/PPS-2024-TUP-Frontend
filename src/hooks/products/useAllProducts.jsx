import { useEffect } from 'react';
import { useState } from 'react';

import { GetAllProducts } from '../../services/implementations/product/productService';

export const useAllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    GetAllProducts()
      .then((res) => {
        setAllProducts(res.data);
      })
      .catch((err) => setError(err))
      .finally(setLoading(false));
  }, []);

  return { allProducts, loading, error };
};
