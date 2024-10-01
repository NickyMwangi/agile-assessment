import { useState } from "react";
import { NavLink } from "react-router-dom";

type dark = {
  darkMode: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setDarkMode: any;
};

export const Header = ({ darkMode, setDarkMode }: dark) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const togleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavLinks = () => {
    return (
      <>
        <NavLink className="dark:text-white" to={"/"}>
          Home
        </NavLink>
      </>
    );
  };

  return (
    <header className="sticky top-0 z-[1] mx-auto  flex w-full max-w-7xl flex-wrap items-center justify-between border-b border-gray-100 bg-background p-[2em] font-sans font-bold uppercase text-text-primary backdrop-blur-[100px] dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary">
      <div className="logo h-16 w-16">
        <img src="/logo.svg" alt="Logo" />
      </div>
      <nav className="w-1/3 ">
        <div className="flex justify-between">
          <NavLinks />
        </div>
        <button
          onClick={togleDarkMode}
          className="rounded-full absolute w-16 h-16 bottom-16 right-16 bg-black dark:bg-white text-white dark:text-black font-semibold mt-2"
        >
          {darkMode ? "Toggle Light" : "Toggle Dark"}
        </button>
        <div>
          <button
            onClick={toggleNavbar}
            className="rounded-full bg-blue-400"
          ></button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="flex basis-full flex-col items-center ">
          <NavLinks />
        </div>
      )}
    </header>
  );
};
