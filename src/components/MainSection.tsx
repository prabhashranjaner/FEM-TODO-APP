import Options from "./Options";
import TodoList from "./TodoList";

const MainSection = () => {
  return (
    <section className="bg-gray-50">
      <TodoList />
      <Options />
    </section>
  );
};

export default MainSection;
