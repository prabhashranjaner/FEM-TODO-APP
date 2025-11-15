import Todo from "./Todo";
import { useAppSelector } from "../app/hooks";
import type { TODO_TYPE } from "../app/types";
import { selectVisibleTodosItems } from "../slices/todosSlice";

const TodoList: React.FC = () => {
  const todos = useAppSelector(selectVisibleTodosItems);
  return (
    <ul>
      {todos.map((todo: TODO_TYPE) => {
        return (
          <li
            key={todo.id}
            className="flex items-center justify-between gap-2 border-b border-purple-100 py-3 hover:cursor-pointer lg:px-3 lg:py-4 dark:border-purple-700"
          >
            <Todo todo={todo} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
