"use client";

import { useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface NavItemProps {
  label: string;
  href: string;
  active?: boolean;
  scrolled?: boolean;
  onClick?: () => void;
  external?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  label,
  href,
  active,
  scrolled,
  onClick,
  external,
}) => {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent) => {
    if (!external && href.startsWith("#") && pathname !== "/") {
      e.preventDefault();
      window.location.href = `/${href}`;
    }
    if (onClick) onClick();
  };

  // jeśli to "Kontakt", nadaj wygląd przycisku
  if (external) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`px-6 py-2 rounded-2xl font-semibold text-white text-lg md:text-xl tracking-wide
          bg-gradient-to-r from-blue-500 to-indigo-500
          hover:from-indigo-500 hover:to-blue-500
          transition-colors duration-300 ${poppins.className}`}
      >
        {label}
      </Link>
    );
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`relative px-5 py-2 transition-colors duration-300
        ${active ? "font-bold" : "font-medium"}
        ${scrolled ? "text-gray-900" : "text-white"}
        text-lg md:text-xl tracking-wide group ${poppins.className}`}
    >
      {label}
      <span
        className={`absolute left-1/2 bottom-0 h-1 w-1 bg-blue-400 rounded-full transform -translate-x-1/2 scale-0 transition-transform duration-300
          ${active ? "scale-100" : "group-hover:scale-100"}`}
      ></span>
    </a>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "portfolio"];
      const scrollPos = window.scrollY + 120;

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActive(section);
        }
      });

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-white/20 backdrop-blur-sm"
      } rounded-b-lg`}
    >
      <div className="flex items-center h-20 justify-between px-6">
        {/* LOGO */}
        <div className="flex-shrink-0">
          <Link href="/" className="cursor-pointer">
            <img src="/logotyp2.png" alt="M.dev" className="h-12 w-auto" />
          </Link>
        </div>

        {/* MENU CENTER */}
        <div className="hidden md:flex gap-10">
          <NavItem label="Strona Główna" href="/#home" active={active === "home"} scrolled={scrolled} />
          <NavItem label="Usługi" href="/#services" active={active === "services"} scrolled={scrolled} />
          <NavItem label="Portfolio" href="/portfolio" active={active === "portfolio"} scrolled={scrolled} />
          <NavItem label="Kontakt" href="/kontakt" external />
        </div>

        {/* HAMBURGER */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col w-10 h-10 justify-between p-1"
          >
            <span
              className={`block h-1 w-full bg-gray-700 rounded-full transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-3" : ""
              }`}
            />
            <span
              className={`block h-1 w-full bg-gray-700 rounded-full transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-1 w-full bg-gray-700 rounded-full transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-3" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div
          className={`md:hidden flex flex-col items-center gap-4 py-6 border-t border-gray-200 rounded-b-lg transition-colors duration-500 ${
            scrolled ? "bg-white/80 backdrop-blur-md" : "bg-white/20 backdrop-blur-sm"
          }`}
        >
          <NavItem label="Home" href="/#home" active={active === "home"} scrolled={scrolled} onClick={() => setIsOpen(false)} />
          <NavItem label="Usługi" href="/#services" active={active === "services"} scrolled={scrolled} onClick={() => setIsOpen(false)} />
          <NavItem label="Portfolio" href="/#portfolio" active={active === "portfolio"} scrolled={scrolled} onClick={() => setIsOpen(false)} />
          <NavItem label="Kontakt" href="/kontakt" external onClick={() => setIsOpen(false)} />
        </div>
      )}
    </nav>
  );
}
