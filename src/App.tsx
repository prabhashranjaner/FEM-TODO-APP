import "./App.css";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div className="bg-[url(../../images/bg-desktop-light.jpg)] flex  pt-[3em] items-center min-h-screen bg-no-repeat flex-col font-primary">
      <div className="flex flex-col gap-4">
        <Header />
        <InputForm />
        <MainSection />
      </div>
    </div>
  );
}

export default App;
