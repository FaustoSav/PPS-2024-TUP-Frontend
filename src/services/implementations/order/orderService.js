import { api } from '../../axios';

export const GetOrderByUserId = (id) => {
  return api.get('/orders/user/' + id);
};

export const GetAllOrders = (token) => {
  return api.get('/orders', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const PostOrder = (token, newOrder) => {
  return api.post('/orders', newOrder, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const GetCurrentUserOrder = (token) => {
  return api.get('/orders/current', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
