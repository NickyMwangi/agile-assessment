import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavLinks = () => {
    return (
      <>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/"}>Home</NavLink>
      </>
    );
  };

  return (
    <header className="sticky top-0 z-[1] mx-auto  flex w-full max-w-7xl flex-wrap items-center justify-between border-b border-gray-100 bg-background p-[2em] font-sans font-bold uppercase text-text-primary backdrop-blur-[100px] dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary">
      <div className="logo h-16 w-16">
        <img src="/logo.svg" alt="Logo" />
      </div>
      <nav className="w-1/3">
        <div className="flex justify-between">
          <NavLinks />
        </div>
        <div>
          <button onClick={toggleNavbar} className="rounded-full"></button>
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
