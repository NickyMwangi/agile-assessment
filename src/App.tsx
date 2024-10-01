import { Outlet } from "react-router-dom";
import { Header } from "./components";

function App() {
  return (
    <div className="bg-background text-text-primary dark:bg-d-background dark:text-d-text-primary">
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="relative mx-auto my-0 box-border flex w-full max-w-7xl flex-[1] flex-grow flex-col py-[1em] px-[2em]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
