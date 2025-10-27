import { useAppDispatch } from "../app/hooks";
import type { TODO_TYPE } from "../app/types";
import { todoRemoved, todoUpdated } from "../features/todos/todosSlice";

type PROP_TYPE = {
  todo: TODO_TYPE;
};

const Todo = ({ todo }: PROP_TYPE) => {
  const dispatch = useAppDispatch();
  console.log({ todo });
  return (
    <>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) =>
          dispatch(todoUpdated({ ...todo, completed: e.target.checked }))
        }
      />

      <p className="grow">{todo.title}</p>

      <img
        alt="delete_icon"
        src="../../images/icon-cross.svg"
        className="cursor-pointer"
        onClick={() => dispatch(todoRemoved(todo.id))}
      />
    </>
  );
};

export default Todo;
