import { useEffect, useState } from 'react';
import { GetCategories } from '../../services/implementations/category/categoryService';

export const useGetCategories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('API CALL  - Get all Categories');

    GetCategories()
      .then((catResponse) => {
        setCategories(catResponse.data);
      })
      .catch((err) => setError(err))
      .finally(setLoading(false));
  }, []);

  return { categories, loading, error };
};
