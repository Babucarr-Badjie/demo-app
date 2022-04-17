import React from "react";

export default function TodoList(props) {
  return (
    <ol>
      {props.todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ol>
  );
}
