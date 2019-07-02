import { createStore, createEvent, createEffect } from 'effector';

export interface todo {
  id: number;
  title?: string;
  done?: boolean;
  toggle?: void;
}

export const addTodo = createEvent('add todo');
export const removeTodo = createEvent('remove todo');
export const toggleTodo = createEvent('toggle todo');

const addHandler = (oldState: todo[], payload: string) => [
  ...oldState,
  { id: Date.now() + Math.random(), title: payload, done: false },
];
const removeHandler = (oldState: todo[], payload: number) =>
  oldState.filter(data => data.id !== payload);

const toggleHandler = (oldState: todo[], payload: number) =>
  oldState.map((data: todo) =>
    data.id === payload ? { ...data, done: !data.done } : data,
  );

const defaultState = [{ id: 0, title: 'First task', done: false }];

export const todos = createStore(defaultState)
  .on(addTodo, addHandler)
  .on(removeTodo, removeHandler)
  .on(toggleTodo, toggleHandler);
