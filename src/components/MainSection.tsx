import Options from "./Options";
import TodoList from "./TodoList";

const MainSection = () => {
  return (
    <section className="bg-gray-50 dark:bg-navy-900">
      <TodoList />
      <Options />
    </section>
  );
};

export default MainSection;
