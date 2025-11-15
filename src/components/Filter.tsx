import { useAppDispatch, useAppSelector } from "../app/hooks";
import { filterUpdated } from "../slices/todosSlice";

const Filter = () => {
  const filter = useAppSelector((state) => state.Todos.filter);
  const disptach = useAppDispatch();
  return (
    <div className="lg:text-md flex grow items-center justify-center gap-4 align-middle text-sm">
      <span
        className={
          filter === "all"
            ? "text-primary"
            : "hover:text-primary cursor-pointer"
        }
        onClick={() => {
          if (filter === "all") return;
          disptach(filterUpdated("all"));
        }}
      >
        All
      </span>
      <span
        className={
          filter === "active"
            ? "text-primary"
            : "hover:text-primary cursor-pointer"
        }
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
          filter === "completed"
            ? "text-primary"
            : "hover:text-primary cursor-pointer"
        }
        onClick={() => {
          if (filter === "completed") return;
          disptach(filterUpdated("completed"));
        }}
      >
        Completed
      </span>
    </div>
  );
};

export default Filter;
