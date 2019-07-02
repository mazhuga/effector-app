import React from 'react';
import { useStore } from 'effector-react';
import { lastName, updateUser } from '../models/userModel';

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const LastName = () => {
  console.log('LastName render');
  const value = useStore(lastName);

  const handleChange = (e: InputEvent): void => {
    // @ts-ignore
    updateUser({ lastName: e.target.value });
  };

  return (
    <div>
      <div>Type your last name</div>
      <input value={value} onChange={handleChange} />
    </div>
  );
};

export default React.memo(LastName);
