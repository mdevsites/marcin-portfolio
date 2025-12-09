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
    { value: "24 / 7", label: "Wsparcie techniczne" },
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
      className="relative min-h-screen flex flex-col justify-start overflow-x-hidden pt-28 px-4 md:px-6"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #60A5FA 0%, #9FD9FF 40%, #E6F7FF 100%)",
      }}
    >
      {/* CHMURKI W TLE */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute w-64 h-64 bg-white/10 rounded-full -top-16 -left-16 animate-pulse"></div>
        <div className="absolute w-48 h-48 bg-white/10 rounded-full -bottom-20 right-10 animate-pulse"></div>
        <div className="absolute w-32 h-32 bg-white/10 rounded-full top-1/2 left-1/2 animate-pulse"></div>
      </div>

      {/* GŁÓWNA ZAWARTOŚĆ */}
      <div className="relative max-w-7xl mx-auto flex flex-col items-center md:flex-row md:justify-between space-y-6 md:space-y-0 w-full">
        {/* OBRAZEK */}
        <div className="flex justify-center w-full md:w-auto">
          <img
            src="/hero_illustration.png"
            alt="Hero illustration"
            className="w-full max-w-xs md:max-w-md rounded-lg shadow-xl transform transition-transform hover:-translate-y-1"
          />
        </div>

        {/* TEKST I STATYSTYKI */}
        <div className="text-center md:text-left md:max-w-xl space-y-6 w-full">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Tworzymy nowoczesne strony internetowe
          </h1>
          <p className="text-lg md:text-2xl text-gray-700">
            Profesjonalne rozwiązania webowe dopasowane do Twojego biznesu
          </p>

          <div className="mt-6 flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-6 flex-wrap w-full">
            {(showIcons ? icons : stats).map((item, idx) => (
              <div
                key={idx}
                className="relative w-full md:w-36 py-4 px-2 flex flex-col items-center justify-center text-center"
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
                  <div className="text-3xl md:text-4xl font-bold text-gray-900">
                    {item.value ?? item.icon}
                  </div>
                  <div className="mt-2 text-sm text-gray-700">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* OPINIE */}
      <div className="mt-12 flex justify-center z-20 px-4 md:px-0">
        <div className="relative bg-transparent px-6 py-6 rounded-2xl text-gray-900 text-center flex items-center max-w-7xl w-full mx-auto overflow-hidden">
          <button
            onClick={prevOpinion}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-gray-200 transition"
          >
            <svg
              className="w-5 h-5"
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
              className={`italic text-lg md:text-xl px-4 py-4 rounded-2xl bg-white/30 backdrop-blur-md shadow-md inline-block transform transition-all duration-700 ease-out ${
                showOpinion
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 -translate-y-6 scale-90"
              }`}
            >
              “{opinions[currentOpinion].text}”
            </p>
            <p className="mt-2 font-semibold text-gray-900">
              {opinions[currentOpinion].author}
            </p>
          </div>

          <button
            onClick={nextOpinion}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-gray-200 transition"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* DOWIEDZ SIĘ WIĘCEJ */}
      <div
        className="flex flex-col items-center mt-6 cursor-pointer group"
        onClick={() => {
          const el = document.getElementById("services");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-gray-900 text-sm mb-1 opacity-80 group-hover:opacity-100 transition">
          Dowiedz się więcej
        </span>

        <svg
          className="w-7 h-7 text-gray-900 animate-bounce opacity-80 group-hover:opacity-100 transition"
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
