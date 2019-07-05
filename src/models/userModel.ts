import { createStore, createEvent, createEffect, Event } from 'effector';

interface User {
  firstName?: string;
  lastName?: string;
}
const defaultState: User = {
  firstName: '',
  lastName: '',
};

export const updateUser: Event<User> = createEvent('update user');
export const toggleLoading: Event<boolean> = createEvent('toggle loading');

// data
export const user = createStore(defaultState).on<User>(
  updateUser,
  (state: User, payload: User): User => ({ ...state, ...payload }),
);

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

fetchUser.done.watch(({ result: { results } }: any) => {
  const { first, last } = results[0].name;
  updateUser({ firstName: first, lastName: last });
});

fetchUser.fail.watch(data => console.error(data));
