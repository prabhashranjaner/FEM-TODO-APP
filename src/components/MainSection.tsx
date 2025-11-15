import Options from "./Options";
import TodoList from "./TodoList";

const MainSection = () => {
  return (
    <section className="dark:bg-navy-900 rounded-md bg-gray-50 shadow-lg">
      <TodoList />
      <Options />
    </section>
  );
};

export default MainSection;
