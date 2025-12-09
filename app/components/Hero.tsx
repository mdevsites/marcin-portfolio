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
  const opinions: Opinion[] = [
    { text: "Profesjonalizm i szybka realizacja projektów!", author: "Jan K." },
    { text: "Świetna współpraca i elastyczne podejście!", author: "Maria L." },
    { text: "Konkurencyjne ceny i wysoka jakość.", author: "Piotr S." },
    { text: "Szybkie wdrożenia i przyjemny kontakt!", author: "Anna W." },
    { text: "Fantastyczne projekty i świetny kontakt!", author: "Tomasz R." },
  ];

  const [currentOpinion, setCurrentOpinion] = useState(0);
  const [showOpinion, setShowOpinion] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowOpinion(false);
      setTimeout(() => {
        setCurrentOpinion((prev) => (prev + 1) % opinions.length);
        setShowOpinion(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextOpinion = () => {
    setShowOpinion(false);
    setTimeout(() => {
      setCurrentOpinion((currentOpinion + 1) % opinions.length);
      setShowOpinion(true);
    }, 500);
  };

  const prevOpinion = () => {
    setShowOpinion(false);
    setTimeout(() => {
      setCurrentOpinion((currentOpinion - 1 + opinions.length) % opinions.length);
      setShowOpinion(true);
    }, 500);
  };

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
      }, 600);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #0b1220 0%, #1e3a8a 60%, #60A5FA 100%)",
      }}
    >
      {/* CHMURKI W TLE */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute w-64 h-64 bg-white/10 rounded-full -top-16 -left-16 animate-pulse"></div>
        <div className="absolute w-48 h-48 bg-white/10 rounded-full -bottom-20 right-10 animate-pulse"></div>
        <div className="absolute w-32 h-32 bg-white/10 rounded-full top-1/2 left-1/2 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center md:justify-between h-full z-10">
        {/* LEWA STRONA */}
        <div className="text-center md:text-left md:max-w-xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Tworzymy nowoczesne strony internetowe
          </h1>
          <p className="text-lg md:text-2xl text-white/90">
            Profesjonalne rozwiązania webowe dopasowane do Twojego biznesu
          </p>

          {/* STATYSTYKI / IKONY Z ANIMACJĄ */}
          <div className="mt-10 flex justify-center md:justify-start space-x-6">
            {(showIcons ? icons : stats).map((item, idx) => (
              <div
                key={idx}
                className="relative w-36 py-6 px-4 flex flex-col items-center justify-center text-center"
              >
                <div
                  className={`transition-all duration-700 ease-in-out transform ${
                    animating
                      ? showIcons
                        ? "-translate-y-full opacity-0"
                        : "translate-y-full opacity-0"
                      : "translate-y-0 opacity-100"
                  }`}
                >
                  <div className="text-3xl md:text-4xl font-bold text-white">
                    {item.value ?? item.icon}
                  </div>
                  <div className="mt-2 text-sm text-white/90">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PRAWA STRONA */}
        <div className="mb-6 md:mb-0 md:ml-12 md:flex-1 flex justify-center relative">
          <img
            src="/hero_illustration.png"
            alt="Hero illustration"
            className="w-80 md:w-full max-w-md rounded-lg shadow-xl transform transition-transform hover:-translate-y-1"
          />
        </div>
      </div>

      {/* OPINIE */}
      <div className="mt-12 flex justify-center z-20">
        <div className="relative bg-transparent px-8 py-6 rounded-2xl text-white text-center flex items-center max-w-7xl w-full mx-auto overflow-hidden">
          <button
            onClick={prevOpinion}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-white/10 transition"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="mx-auto text-center flex-1">
            <p
              className={`italic text-lg md:text-xl px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md shadow-md inline-block transform transition-all duration-700 ease-out ${
                showOpinion
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 -translate-y-6 scale-90"
              }`}
            >
              “{opinions[currentOpinion].text}”
            </p>
            <p className="mt-2 font-semibold text-white">
              {opinions[currentOpinion].author}
            </p>
          </div>

          <button
            onClick={nextOpinion}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-white/10 transition"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* STRZAŁKA DOWIEDZ SIĘ WIĘCEJ */}
      <div
        className="absolute bottom-4 md:bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center mb-4 cursor-pointer group"
        onClick={() => {
          const el = document.getElementById("services");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-white text-sm mb-1 opacity-80 group-hover:opacity-100 transition">
          Dowiedz się więcej
        </span>

        <svg
          className="w-7 h-7 text-white animate-bounce opacity-80 group-hover:opacity-100 transition"
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
