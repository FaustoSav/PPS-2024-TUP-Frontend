import { useNavigate } from 'react-router-dom';

export const CategoryCard = ({ categoryName, imageId, route }) => {
  const categoryImageRoute = '/assets/png/products/';
  const navigate = useNavigate();
  return (
    <article
      onClick={() => navigate(route)}
      className=" min-w-full cardBgLight   flex flex-col items-center w-full py-5   borderDark border-opacity-15 sm:border-opacity-10 hover:border-opacity-20 hover:drop-shadow  cursor-pointer"
    >
      <img
        className="max-w-[280px] sm:p-10"
        src={categoryImageRoute + imageId}
        alt={` ${categoryName}`}
      />
      <span className="text-center  font-[500] w-full capitalize">
        {categoryName}{' '}
      </span>
    </article>
  );
};
