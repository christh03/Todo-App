import React from "react";

export const TodoTask = ({ todos }) => {
  return (
    <li className="List-li">
      <span className="List-span">{todos.description}</span>
      <button className="List-btn">Delete</button>
    </li>
  );
};
