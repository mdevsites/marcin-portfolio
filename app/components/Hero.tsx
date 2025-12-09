"use client";

import { useEffect, useState } from "react";

interface Opinion {
  text: string;
  author: string;
}

interface Tile {
  value?: string;
  icon?: string;
  label: string;
}

export default function Hero() {
  // --- OPINIE ---
  const opinions: Opinion[] = [
    { text: "Profesjonalizm i szybka realizacja projektów!", author: "Jan K." },
    { text: "Świetna współpraca i elastyczne podejście!", author: "Maria L." },
    { text: "Konkurencyjne ceny i wysoka jakość.", author: "Piotr S." },
    { text: "Szybkie wdrożenia i przyjemny kontakt!", author: "Anna W." },
    { text: "Fantastyczne projekty i świetny kontakt!", author: "Tomasz R." },
  ];

  const [currentOpinion, setCurrentOpinion] = useState(0);
  const [showOpinion, setShowOpinion] = useState(true);

  const changeOpinion = (direction: 1 | -1) => {
    setShowOpinion(false);
    setTimeout(() => {
      setCurrentOpinion(
        (prev) => (prev + direction + opinions.length) % opinions.length
      );
      setShowOpinion(true);
    }, 400);
  };

  useEffect(() => {
    const interval = setInterval(() => changeOpinion(1), 5000);
    return () => clearInterval(interval);
  }, []);

  // --- STATYSTYKI + IKONY ---
  const stats: Tile[] = [
    { value: "50+", label: "Zrealizowanych projektów" },
    { value: "5", label: "Lat doświadczenia" },
    { value: "24/7", label: "Wsparcie techniczne" },
  ];

  const icons: Tile[] = [
    { icon: "⚡", label: "Szybkie wdrożenia" },
    { icon: "💰", label: "Konkurencyjne ceny" },
    { icon: "✅", label: "Profesjonalizm" },
  ];

  const [showIcons, setShowIcons] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setShowIcons((prev) => !prev);
        setAnimating(false);
      }, 500);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const activeTiles = showIcons ? icons : stats;

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 flex flex-col justify-center overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #0b1220 0%, #1e3a8a 60%, #60A5FA 100%)",
      }}
    >
      {/* CHMURKI */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute w-40 h-40 md:w-64 md:h-64 bg-white/10 rounded-full -top-10 -left-10 animate-pulse" />
        <div className="absolute w-32 h-32 md:w-48 md:h-48 bg-white/10 rounded-full -bottom-10 right-5 animate-pulse" />
      </div>

      {/* ZAWARTOŚĆ HERO */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 flex flex-col-reverse md:flex-row items-center md:justify-between w-full z-10">
        {/* LEWA STRONA - TEKST */}
        <div className="text-center md:text-left md:max-w-xl space-y-6 mt-10 md:mt-0 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">
            Tworzymy nowoczesne strony internetowe
          </h1>
          <p className="text-lg md:text-2xl text-white/90">
            Profesjonalne rozwiązania webowe dopasowane do Twojego biznesu
          </p>

          {/* STATYSTYKI / IKONY */}
          {/* Desktop: rząd, Mobile: pozioma karuzela */}
          <div className="mt-10 flex md:flex-row flex-row md:space-x-6 space-x-4 overflow-x-auto md:overflow-visible py-2">
            {activeTiles.map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-28 py-4 px-2 text-center flex flex-col items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm mr-2 md:mr-0"
              >
                <div
                  className={`transition-all duration-700 ${
                    animating
                      ? showIcons
                        ? "-translate-y-full opacity-0"
                        : "translate-y-full opacity-0"
                      : "translate-y-0 opacity-100"
                  }`}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    {item.value ?? item.icon}
                  </div>
                  <div className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-white/90">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PRAWA STRONA - OBRAZEK */}
        <div className="mb-6 md:mb-0 md:ml-12 flex justify-center w-full md:w-auto">
          <img
            src="/hero_illustration.png"
            alt="Hero illustration"
            className="w-60 sm:w-72 md:w-full max-w-sm md:max-w-md rounded-lg shadow-xl transform transition-transform hover:-translate-y-1"
          />
        </div>
      </div>

      {/* OPINIE */}
      <div className="mt-8 md:mt-12 flex justify-center z-20 px-4">
        <div className="relative w-full max-w-2xl px-4 sm:px-8 py-6 text-white text-center flex items-center">
          <button
            onClick={() => changeOpinion(-1)}
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-white/10 transition"
          >
            <span className="text-white text-lg">‹</span>
          </button>

          <div className="flex-1">
            <p
              className={`italic text-base sm:text-lg md:text-xl px-4 sm:px-6 py-4 bg-white/10 backdrop-blur-md rounded-2xl transition-all duration-700 ${
                showOpinion ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
              }`}
            >
              “{opinions[currentOpinion].text}”
            </p>
            <p className="mt-2 font-semibold">{opinions[currentOpinion].author}</p>
          </div>

          <button
            onClick={() => changeOpinion(1)}
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-white/10 transition"
          >
            <span className="text-white text-lg">›</span>
          </button>
        </div>
      </div>

      {/* STRZAŁKA DOWIEDZ SIĘ WIĘCEJ */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer group"
        onClick={() =>
          document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="text-white text-xs sm:text-sm mb-1 opacity-80 group-hover:opacity-100">
          Dowiedz się więcej
        </span>
        <svg
          className="w-6 h-6 animate-bounce text-white opacity-80 group-hover:opacity-100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
