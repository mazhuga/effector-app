import React, { useEffect } from 'react';
import Task from './Task';
import { useStore } from 'effector-react';
import {
  todos,
  addTodo,
  toggleTodo,
  todo,
  removeTodo,
} from '../models/todosModel';

const Tasks = () => {
  console.log('Tasks render');
  const todoList: todo[] = useStore(todos);

  useEffect(() => {
    addTodo('2');
    addTodo('3');
    addTodo('4');
    setTimeout(() => addTodo('inserted task after 3 seconds'), 3000);
    setTimeout(() => addTodo('inserted task after 5 seconds'), 5000);
  }, []);

  return (
    <ul>
      {todoList.map((data: todo) => (
        <Task
          key={data.id}
          task={data}
          remove={removeTodo}
          toggle={toggleTodo}
        />
      ))}
    </ul>
  );
};

export default React.memo(Tasks);
