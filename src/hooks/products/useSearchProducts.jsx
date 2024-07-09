// import { useEffect, useState } from 'react';
import { GetProductsByName } from '../../services/implementations/product/productService';

export const useSearchProducts = () => {
  async function SearchProducts(productName) {
    const data = await GetProductsByName(productName);
    const products = await data.data;

    return products;
  }
  // const [productByName, setAllProdcutsByName] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {

  //   console.log("Product Name en hook: " + productName)
  //   GetProductsByName(productName)
  //     .then((res) => {
  //       setAllProdcutsByName(res.data);
  //     })
  //     .catch((err) => setError(err))
  //     .finally(() => {
  //       setLoading(false);
  //     });

  // }, [productName]);

  return { SearchProducts };
};
