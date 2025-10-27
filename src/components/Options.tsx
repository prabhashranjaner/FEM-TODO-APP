import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  selectInCompletedTodosCount,
  todoCompletedRemoved,
} from "../features/todos/todosSlice";

const Options = () => {
  const completedTask = useAppSelector(selectInCompletedTodosCount);
  const disptach = useAppDispatch();
  return (
    <div className="flex justify-between items-center p-4">
      <p>
        <span>{completedTask}</span> Items left
      </p>
      <div className="grow align-middle flex justify-center items-center gap-3">
        <span>All</span>
        <span>Active</span>
        <span>Completed</span>
      </div>
      <p
        onClick={() => disptach(todoCompletedRemoved())}
        className="cursor-pointer"
      >
        Clear Completed
      </p>
    </div>
  );
};

export default Options;
