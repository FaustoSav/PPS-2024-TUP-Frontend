/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import { Loader } from '../shared/Loader';
import { NotFound } from '../shared/NotFound';
import { Error } from '../shared/Error';

import { AuthContext } from '../../context/Auth/AuthContext';

import { useProfile } from '../../hooks/user/useProfile';
import { ProfileDetails } from './ProfileDetails';
import { PurchaseHistory } from './PurchaseHistory';

export const Profile = () => {
  const { token } = useContext(AuthContext);
  const { GetProfile, data, error, loading } = useProfile();

  useEffect(() => {
    if (token) {
      GetProfile();
    }
  }, []);

  if (!data) {
    return <NotFound />;
  }
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <>
      <ProfileDetails
        email={data.email}
        firstName={data.firstName}
        lastName={data.lastName}
        userName={data.userName}
      />

      <PurchaseHistory />
    </>
  );
};
