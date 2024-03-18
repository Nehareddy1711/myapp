import React, { useContext } from "react";
import { TodoListContext } from "./Provider";
export default function AddTodo() {
  const { addTodo } = useContext(TodoListContext);
  return (
    <div>
        <input type="text"></input>
      <button onClick={() => addTodo(todos)}>Add</button>
    </div>
  );
}