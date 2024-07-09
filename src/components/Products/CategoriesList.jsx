import { CategoryCard } from './CategoryCard';
import { Subtitle } from './../shared/Subtitle';

import { SkeletonCard } from '../shared/SkeletonCard';
import { useGetCategories } from '../../hooks/categories/useGetCategories';
import { Error } from '../shared/Error';
export const CategoriesList = () => {
  const { categories, error, loading } = useGetCategories();

  if (loading) return <SkeletonCard />;
  if (error) return <Error />;
  return (
    <section className="w-full ">
      <Subtitle text={'Categorias'} />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 ">
        {categories.map((category) => {
          return (
            <CategoryCard
              key={category.id}
              imageId={category.imageId}
              categoryName={category.categoryName}
              route={'/categories/' + category.id}
            />
          );
        })}
      </div>
    </section>
  );
};
