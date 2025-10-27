import { useState } from "react";
import type { FormEvent } from "react";
import type { TODO_TYPE } from "../app/types";
import { useAppDispatch } from "../app/hooks";
import { todoAdded } from "../features/todos/todosSlice";
import { nanoid } from "@reduxjs/toolkit";

const InputForm = () => {
  const [input, setInput] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input) return;

    const todo: TODO_TYPE = {
      id: nanoid(),
      title: input,
      completed: false,
    };
    console.log({ todo });

    // ! dispatch action
    dispatch(todoAdded(todo));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Create a new todo.."
        className="min-w-md p-2 bg-gray-50"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default InputForm;
