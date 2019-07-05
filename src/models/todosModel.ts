import {createStore, createEvent, Event} from 'effector';

export interface Todo {
  id: number;
  title?: string;
  done?: boolean;
  toggle?: void;
}

export const addTodo: Event<string> = createEvent('add todo');
export const removeTodo: Event<number> = createEvent('remove todo');
export const toggleTodo: Event<number> = createEvent('toggle todo');

const onAddHandler = (oldState: Todo[], payload: string):Todo[] => [
    ...oldState,
    { id: Date.now() + Math.random(), title: payload, done: false },
];
const onRemoveHandler = (oldState: Todo[], payload: number) =>
  oldState.filter(data => data.id !== payload);

const toggleHandler = (oldState: Todo[], payload: number) =>
  oldState.map((data: Todo) =>
    data.id === payload ? { ...data, done: !data.done } : data,
  );

const defaultState: Todo[] = [{ id: 0, title: 'First task', done: false }];

export const todos = createStore(defaultState)
  .on(addTodo, onAddHandler)
  .on(removeTodo, onRemoveHandler)
  .on(toggleTodo, toggleHandler);
