import {
  createSelector,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { TODO_TYPE } from "../app/types";
import type { RootStateType } from "../app/store";

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
  initialState: {
    items: todos,
    filter: "all",
  },
  reducers: {
    todoAdded(state, action: PayloadAction<TODO_TYPE>) {
      state.items.push(action.payload);
    },

    todoUpdated(state, action: PayloadAction<TODO_TYPE>) {
      const { id, title, completed } = action.payload;
      const existingTodo = state.items.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.title = title;
        existingTodo.completed = completed;
      }
    },

    filterUpdated(
      state,
      action: PayloadAction<"active" | "completed" | "all">,
    ) {
      state.filter = action.payload;
    },

    todoRemoved(state, action: PayloadAction<string>) {
      const index = state.items.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },

    todoCompletedRemoved(state) {
      state.items = state.items.filter((todo) => !todo.completed);
    },
  },
});

// ! Exporting Selectors
// Basic selector to get the list of tasks
export const selectTodosItems = (state: RootStateType) => state.Todos.items;
export const selectFilter = (state: RootStateType) => state.Todos.filter;

// Memoized selector to count incompleted tasks
export const selectInCompletedTodosCount = createSelector(
  [selectTodosItems],
  (todos) => todos.filter((todo) => !todo.completed).length,
);

export const selectVisibleTodosItems = createSelector(
  [selectTodosItems, selectFilter],
  (todosItems, filter) => {
    if (filter === "active") {
      return todosItems.filter((todosItem) => !todosItem.completed);
    } else if (filter === "completed") {
      return todosItems.filter((todosItem) => todosItem.completed);
    } else return todosItems;
  },
);

export default todosSlice.reducer;

export const {
  todoAdded,
  todoRemoved,
  todoUpdated,
  todoCompletedRemoved,
  filterUpdated,
} = todosSlice.actions;
