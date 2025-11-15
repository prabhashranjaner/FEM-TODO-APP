import { useState } from "react";
import type { FormEvent } from "react";
import type { TODO_TYPE } from "../app/types";
import { useAppDispatch } from "../app/hooks";
import { todoAdded } from "../slices/todosSlice";
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
    // ! dispatch action
    dispatch(todoAdded(todo));
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      {/* Circle */}
      <div className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 rounded-full border-2 border-gray-400"></div>
      <input
        type="text"
        placeholder="Create a new todo.."
        className="dark:bg-navy-900 w-full rounded-md bg-gray-50 p-3 pl-12 text-sm outline-none lg:p-5 lg:pl-12 lg:text-lg dark:text-purple-300"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="absolute hidden"></button>
    </form>
  );
};

export default InputForm;
