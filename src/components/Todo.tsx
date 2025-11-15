import { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import type { TODO_TYPE } from "../app/types";
import { todoRemoved, todoUpdated } from "../slices/todosSlice";

type PROP_TYPE = {
  todo: TODO_TYPE;
};

const Todo = ({ todo }: PROP_TYPE) => {
  const dispatch = useAppDispatch();
  const [isChecked, setIsChecked] = useState(todo.completed);

  const handleComplete = () => {
    const newTodo = { ...todo, completed: !todo.completed };
    dispatch(todoUpdated(newTodo));
    setIsChecked((s) => !s);
  };
  return (
    <>
      <label className="relative cursor-pointer pl-12">
        <input
          type="checkbox"
          className="absolute opacity-0"
          checked={isChecked}
          onChange={() => handleComplete()}
        />
        <span
          className={`absolute top-1/2 left-3 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full border border-gray-400 lg:h-6 lg:w-6 ${todo.completed ? "bg-purple-500" : ""}`}
        >
          {todo.completed && (
            <img src="/images/icon-check.svg" className="h-3 w-3" />
          )}
        </span>
      </label>
      <p
        className={`lg:text-md grow text-sm dark:text-purple-300 ${todo.completed ? "line-through" : ""}`}
      >
        {todo.title}
      </p>
      <img
        alt="delete_icon"
        src="../../images/icon-cross.svg"
        className="w-7 cursor-pointer pr-4"
        onClick={() => dispatch(todoRemoved(todo.id))}
      />
    </>
  );
};

export default Todo;
