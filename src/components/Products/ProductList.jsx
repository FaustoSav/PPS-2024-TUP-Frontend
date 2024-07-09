import { ProductCard } from './ProductCard';
import { GoBackButton } from './../shared/GoBackButton';
import { useParams } from 'react-router-dom';
import { Loader } from '../shared/Loader';
import { useProductsByCategoryId } from '../../hooks/products/useProductsByCategoryId';
import { Error } from '../shared/Error';

export const ProductList = () => {
  const { categoryId } = useParams();
  const { productsByCategory, loading, error } =
    useProductsByCategoryId(categoryId);
  if (loading) return <Loader />;
  if (error) return <Error />;

  return (
    <section className="">
      <GoBackButton />
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 xl:grid-cols-4 ">
        {productsByCategory?.map((product) => (
          <ProductCard
            key={product.id}
            title={product.productName}
            price={product.price}
            stock={product.available}
            productId={product.id}
            available = {product.available}
          />
        ))}
      </div>
    </section>
  );
};
