import { api } from '../../axios';

//Public
export const GetAllProducts = () => {
  return api.get('/products');
};

//Public
export const GetProductById = (productId) => {
  return api.get('/products/' + productId);
};

//Public
export const GetProductsByCategoryId = (categoryId) => {
  return api.get('/products/category/' + categoryId);
};
export const GetProductsByName = (productName) => {
  return api.get('/products/search/' + productName);
};
