import React from 'react';
import { useStore } from 'effector-react';
import { isUserLoading } from '../models/userModel';

const Loader = () => {
  const isLoading = useStore(isUserLoading);
  return isLoading ? <span>Loading...</span> : null;
};

export default React.memo(Loader);
