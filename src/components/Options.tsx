import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  filterUpdated,
  selectInCompletedTodosCount,
  todoCompletedRemoved,
} from "../slices/todosSlice";

const Options = () => {
  const completedTask = useAppSelector(selectInCompletedTodosCount);
  const filter = useAppSelector((state) => state.Todos.filter);

  const disptach = useAppDispatch();
  return (
    <div className="flex justify-between items-center p-4">
      <p>
        <span>{completedTask}</span> Items left
      </p>
      <div className="grow align-middle flex justify-center items-center gap-3">
        <span
          className={filter === "all" ? "text-primary " : "cursor-pointer"}
          onClick={() => {
            if (filter === "all") return;
            disptach(filterUpdated("all"));
          }}
        >
          All
        </span>
        <span
          className={filter === "active" ? "text-primary " : "cursor-pointer"}
          onClick={() => {
            if (filter === "active") return;
            disptach(filterUpdated("active"));
          }}
        >
          {" "}
          Active
        </span>
        <span
          className={
            filter === "completed" ? "text-primary " : "cursor-pointer"
          }
          onClick={() => {
            if (filter === "completed") return;
            disptach(filterUpdated("completed"));
          }}
        >
          Completed
        </span>
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
