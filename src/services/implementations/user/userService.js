import { api } from '../../axios';

export const GetUserById = (id) => {
  return api.get('/users/' + id);
};
export const GetUserProfile = (token) => {
  return api.get('/users/profile', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const UpdateUsername = (id, newName) => {
  return api.put('/users/' + id, { name: newName });
};

export const SignInUser = (email, password) => {
  return api.post('/authenticate/login', {
    email: email,
    password: password,
  });
};

export const RegisterUser = (newUser) => {
  return api.post('/authenticate/register', newUser);
};
