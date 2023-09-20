import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const style = {
  li: `flex justify-between px-4 py-2 my-2 capitalize rounded-lg bg-slate-300`,
  liComplete: `flex justify-between px-4 py-2 my-2 capitalize rounded-lg bg-slate-500`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
};

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          className="scale-150	"
          checked={todo.completed ? "checked" : ""}
        />

        <p
          onClick={() => toggleComplete(todo)}
          className={todo.completed ? style.textComplete : style.text}
        >
          {todo.name}
        </p>
      </div>

      <button onClick={() => deleteTodo(todo.id)}>
        <FaRegTrashAlt color="red" />
      </button>
    </li>
  );
};

export default Todo;
