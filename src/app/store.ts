import { configureStore } from "@reduxjs/toolkit";
import TodosReducer from "../features/todos/todosSlice";

export const store = configureStore({
  reducer: {
    Todos: TodosReducer,
  },
});

// ! Exporting Types
export type StoreType = typeof store;
export type DispatchType = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;
