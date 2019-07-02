import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { user, fetchUser } from '../models/userModel';

const FullName = () => {
  useEffect(() => {
      // @ts-ignore
      fetchUser()
  }, []);


  console.log('FullName render');
  const { firstName, lastName } = useStore(user);
  return <span>{`${firstName} ${lastName}`}</span>;
};

export default React.memo(FullName);
