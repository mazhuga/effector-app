import React from 'react';
import { useStore } from 'effector-react';
import { firstName, updateUser } from '../models/userModel';

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const FirstName = () => {
  console.log('FirstName render');
  const value = useStore(firstName);

  const handleChange = (e: InputEvent):void => {
    // @ts-ignore
      updateUser({firstName: e.target.value});
  };

  return (
    <div>
      <div>Type your first name</div>
      <input value={value} onChange={handleChange} />
    </div>
  );
};

export default React.memo(FirstName);
