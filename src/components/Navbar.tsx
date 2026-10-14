import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { mainNav } from "../data/navigation";
import { company } from "../data/company";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 border-b-2 border-primary transition-colors ${
        scrolled ? "bg-secondary" : "bg-secondary/95 backdrop-blur-md"
      }`}
    >
      <div className="site-header-inner mx-auto flex h-14 max-w-[1600px] items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex shrink-0 items-center"
          onClick={() => setOpen(false)}
        >
          <img
            src="/images/logo.png"
            alt={company.name}
            className="h-9 w-auto max-h-9 object-contain object-left brightness-0 sm:h-10 sm:max-h-10"
          />
        </Link>

        <nav className="hidden h-full items-stretch md:flex">
          {mainNav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `flex items-center border-l-2 border-primary px-3 text-sm font-semibold transition-colors lg:px-5 lg:text-[15px] ${
                  isActive
                    ? "bg-primary text-secondary"
                    : "text-primary hover:bg-primary hover:text-secondary"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="flex items-center border-l-2 border-primary bg-primary px-4 text-sm font-bold text-secondary transition hover:bg-secondary hover:text-primary lg:px-6 lg:text-[15px]"
          >
            Book demo
          </Link>
        </nav>

        <button
          type="button"
          className="shrink-0 border-2 border-primary p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-t-2 border-primary bg-secondary sm:max-h-[calc(100dvh-4rem)] md:hidden">
          {mainNav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block border-b-2 border-primary px-5 py-4 text-base font-semibold ${
                  isActive ? "bg-primary text-secondary" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block bg-primary px-5 py-4 text-base font-bold text-secondary"
          >
            Book demo
          </Link>
        </div>
      )}
    </header>
  );
}
