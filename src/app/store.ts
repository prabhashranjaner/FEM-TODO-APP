import { configureStore } from "@reduxjs/toolkit";
import TodosReducer from "../slices/todosSlice";
import ThemeReducer from "../slices/themeSlice";

export const store = configureStore({
  reducer: {
    Todos: TodosReducer,
    Theme: ThemeReducer,
  },
});

// ! Exporting Types
export type StoreType = typeof store;
export type DispatchType = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;
