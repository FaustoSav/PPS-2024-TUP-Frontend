import { GoBackButton } from './../shared/GoBackButton';
import { Loader } from '../shared/Loader';
import { useParams } from 'react-router-dom';
import { useProductById } from '../../hooks/products/useProductById';
import { useAddItem } from '../../hooks/cart/useAddItem';
import { useEffect } from 'react';
import { NotFound } from '../shared/NotFound';

export const ProductOverview = () => {
  const { productId } = useParams();
  const { product, loading, error } = useProductById(productId);
  const { AddToCart } = useAddItem();
  useEffect(() => {
    console.log(product);
  }, [product]);
  if (loading) return <Loader />;
  if (error) return <NotFound />;

  return (
    <section className="mb-10">
      <GoBackButton />
      <article className="flex flex-col  gap-10 md:flex-row">
        <div className="cardBgLight dark:hover:bg-secondaryDark md:w-1/2">
          <img
            className="drop-shadow-2xl p-5 sm:p-10 "
            src="../../../public/assets/png/products/medium.png"
            alt=""
          />
        </div>

        <div className="flex flex-col gap-3 sm:gap-10 md:w-1/2 mb-5">
          <h2 className="font-bold text-4xl text-dark-light  ">
            {product.productName}
          </h2>
          <span className="text-2xl font-[400] text-dark-light ">${product.price}</span>
          <p className="font-[300] max-w-md text-dark-light leading-7  ">{product.productDescription}</p>
          <button
            onClick={() => AddToCart(product)}
            className="bg-dark-white text-light-dark font-medium tracking-wide  py-3 w-fit px-5  "
          >
            Agregar al carrito
          </button>
        </div>
      </article>
    </section>
  );
};
