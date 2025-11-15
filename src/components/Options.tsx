import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  selectInCompletedTodosCount,
  todoCompletedRemoved,
} from "../slices/todosSlice";
import Filter from "./Filter";

const Options = () => {
  const completedTask = useAppSelector(selectInCompletedTodosCount);

  const disptach = useAppDispatch();
  return (
    <div className="lg:text-md flex items-center justify-between p-4 text-sm md:text-base dark:text-gray-600">
      <p>
        <span>{completedTask}</span> Items left
      </p>
      <div className="hidden lg:block">
        <Filter />
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
