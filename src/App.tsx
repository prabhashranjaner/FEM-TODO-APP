import "./App.css";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div className="bg-[url(../../images/bg-desktop-light.jpg)] flex  pt-[4em] items-center min-h-screen bg-no-repeat flex-col font-primary dark:bg-[url(../../images/bg-desktop-dark.jpg)] bg-gray-50 dark:bg-navy-950 text-navy-900 dark:text-gray-50">
      <div className="flex flex-col gap-4">
        <Header />
        <InputForm />
        <MainSection />
      </div>
    </div>
  );
}

export default App;
