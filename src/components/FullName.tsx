import React, { useContext } from 'react';
import { useStore } from 'effector-react';
import { user } from '../models/userModel';

const FullName = () => {
    console.log('FullName render');
    const {firstName, lastName} = useStore(user);
    return <span>{`${firstName} ${lastName}`}</span>;
};

export default React.memo(FullName);
