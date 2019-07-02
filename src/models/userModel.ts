import { createStore, createEvent, createEffect } from 'effector';

export const updateUser = createEvent('update user');
export const toggleLoading = createEvent('toggle loading');

interface User {
  firstName?: string;
  lastName?: string;
}

// data
export const user = createStore({
  firstName: '',
  lastName: '',
}).on(updateUser, (state: User, payload: User) => ({ ...state, ...payload }));

export const firstName = user.map((store: User) => store.firstName);
export const lastName = user.map((store: User) => store.lastName);

export const isUserLoading = createStore(false).on(
  toggleLoading,
  (_, isLoading) => isLoading,
);

export const fetchUser = createEffect('fetch user').use(() => {
  return fetch('https://randomuser.me/api/').then(res => res.json());
});

fetchUser.pending.watch(toggleLoading);

fetchUser.done.watch(({ result: { results } }) => {
  const { first, last } = results[0].name;
  updateUser({ firstName: first, lastName: last });
});

fetchUser.fail.watch(data => console.error(data));
