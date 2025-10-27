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
            className="flex items-center px-4 py-2 justify-between gap-2 border-b-2 border-gray-300"
          >
            <Todo todo={todo} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
