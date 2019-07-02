import React from 'react';

interface PassedProps extends React.FC {
  key?: number;
  remove?: (id: number) => void;
  toggle?: (id: number) => void;
}

// @ts-ignore
const Task: PassedProps = ({ task, remove, toggle }) => {
  console.log('Task render');

  return (
    <li>
      <span
        onClick={() => toggle(task.id)}
        style={{ textDecoration: task.done && 'line-through' }}
      >
        {task.title}
      </span>
      <button onClick={() => remove(task.id)}>remove</button>
    </li>
  );
};

export default React.memo(Task);
