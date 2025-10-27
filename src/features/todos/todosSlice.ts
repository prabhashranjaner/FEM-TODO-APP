import {
  createSelector,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { TODO_TYPE } from "../../app/types";
import type { RootStateType } from "../../app/store";

const todos: TODO_TYPE[] = [
  {
    id: "1",
    title: "Buy groceries",
    completed: false,
  },
  {
    id: "2",
    title: "Finish project report",
    completed: true,
  },
  {
    id: "3",
    title: "Workout session",
    completed: false,
  },
  {
    id: "4",
    title: "Call the electrician",
    completed: false,
  },
  {
    id: "5",
    title: "Read a new book",
    completed: true,
  },
];
const todosSlice = createSlice({
  name: "todos",
  initialState: todos,
  reducers: {
    todoAdded(state, action: PayloadAction<TODO_TYPE>) {
      state.push(action.payload);
    },

    todoUpdated(state, action: PayloadAction<TODO_TYPE>) {
      const { id, title, completed } = action.payload;
      const existingTodo = state.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.title = title;
        existingTodo.completed = completed;
      }
    },

    todoRemoved(state, action: PayloadAction<string>) {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },

    todoCompletedRemoved(state) {
      const newState = state.filter((todo) => !todo.completed);
      state.length = 0;
      state.push(...newState);
    },
  },
});

// ! Exporting Selectors
// Basic selector to get the list of tasks
export const selectTodosList = (state: RootStateType) => state.Todos;

// Memoized selector to count incompleted tasks
export const selectInCompletedTodosCount = createSelector(
  [selectTodosList],
  (todos) => todos.filter((todo) => !todo.completed).length,
);

export default todosSlice.reducer;

export const { todoAdded, todoRemoved, todoUpdated, todoCompletedRemoved } =
  todosSlice.actions;
