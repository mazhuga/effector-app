import { createStore, createStoreObject, createEvent } from 'effector';

export const updateUser = createEvent('update user');

export const firstName = createStore('').on(
  updateUser,
  (state: any, payload: any): any => payload.firstName,
);
export const lastName = createStore('').on(
  updateUser,
  (state: any, payload: any): any => payload.lastName,
);

export const user = createStoreObject({
  firstName,
  lastName,
});
