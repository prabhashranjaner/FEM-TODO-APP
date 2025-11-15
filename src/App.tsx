import Filter from "./components/Filter";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div className="font-primary dark:bg-navy-950 text-navy-900 lg:bg-size[100%] flex min-h-screen flex-col items-center bg-gray-50 bg-[url(/images/bg-desktop-light.jpg)] bg-contain bg-no-repeat pt-[4em] md:pt-24 dark:bg-[url(/images/bg-desktop-dark.jpg)] dark:text-gray-50">
      <div className="flex w-[90vw] max-w-3xl flex-col gap-5">
        <Header />
        <InputForm />
        <MainSection />
        <div className="dark:bg-navy-900 flex items-center justify-between rounded-md bg-gray-50 p-4 text-sm shadow-lg md:text-base lg:hidden dark:text-gray-600">
          <Filter />
        </div>
      </div>
    </div>
  );
}

export default App;
