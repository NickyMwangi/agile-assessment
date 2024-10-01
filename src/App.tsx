import { Outlet } from "react-router-dom";
import { Header } from "./components";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="bg-background text-text-primary dark:bg-neutral-900 dark:text-d-text-primary">
        <div className="flex min-h-screen flex-col">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <main className="relative mx-auto my-0 box-border flex w-full max-w-7xl flex-[1] flex-grow flex-col py-[1em] px-[2em]">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
