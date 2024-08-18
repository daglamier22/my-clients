import { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";

import { ModeToggle } from "@/components/mode-toggle.tsx";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  console.log(location.pathname);

  function handleToggleMenu() {
    setIsMobileMenuOpen((prev: boolean) => !prev);
  }

  let menuBtnClasses = "text-3xl md:hidden cursor-pointer relative w-8 h-8";
  let menuClasses =
    "absolute top-68 bg-accent w-full text-5xl flex-col justify-content-center origin-top animate-open-menu";

  if (isMobileMenuOpen) {
    menuBtnClasses += " toggle-btn";
    menuClasses += " flex";
  } else {
    menuClasses += " hidden";
  }

  return (
    <header className="bg-accent text-accent-foreground sticky top-0 z-10">
      <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-medium">
          <NavLink to="/">My Clients</NavLink>
        </h1>
        <div className="flex flex-row md:flex-row-reverse">
          <div className="px-4 md:-translate-y-1">
            <ModeToggle />
          </div>
          <div>
            <button
              id="hamburger-button"
              className={menuBtnClasses}
              onClick={handleToggleMenu}
            >
              <div className="bg-accent-foreground w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-accent-foreground before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500 after:content-[''] after:bg-accent-foreground after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500"></div>
            </button>
            <nav
              className="hidden md:block space-x-8 text-xl"
              aria-label="main"
            >
              <NavLink to="/auth" className="hover:opacity-90">
                Sign In
              </NavLink>
            </nav>
          </div>
        </div>
      </section>
      <section
        id="mobile-menu"
        className={menuClasses}
        onClick={handleToggleMenu}
      >
        <nav
          className="flex flex-col min-h-screen items-center py-8"
          aria-label="mobile"
        >
          <NavLink to="/" className="w-full text-center py-6 hover:opacity-90">
            Home
          </NavLink>
          <NavLink
            to="/auth"
            className="w-full text-center py-6 hover:opacity-90"
          >
            Sign In
          </NavLink>
        </nav>
      </section>
    </header>
  );
}
