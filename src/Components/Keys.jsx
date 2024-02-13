/* eslint-disable no-undef */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';  // Updated import for version 7

function Keys() {
  const todos = [
    { task: "mow the yard", id: uuidv4() },  // Updated to use uuidv4() instead of uuid()
    { task: "Work on Odin Projects", id: uuidv4() },
    { task: "feed the cat", id: uuidv4() },
  ];

  const list = todos.map((todo) => {
    return <li key={todo.id}>{todo.task}</li>;
  });

  return (
    <div>
      <ul>
        {list}
      </ul>
    </div>
  );
}

export default Keys;
