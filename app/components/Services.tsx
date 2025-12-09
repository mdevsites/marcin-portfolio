"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaLaptopCode, FaPalette, FaEnvelope } from "react-icons/fa";

export default function Services() {
  const ref = useRef<HTMLElement | null>(null);
  const [minHeight, setMinHeight] = useState<number | null>(null);

  useEffect(() => {
    const update = () => {
      const ctaEl = document.getElementById("contact");
      const footerEl = document.querySelector("footer");
      const navEl = document.querySelector("nav");

      const ctaH = ctaEl?.offsetHeight ?? 0;
      const footerH = footerEl?.offsetHeight ?? 0;
      const navH = navEl?.offsetHeight ?? 0;

      const target = Math.max(0, window.innerHeight - (ctaH + footerH + navH));
      setMinHeight(target);

      if (ref.current) {
        ref.current.style.scrollMarginTop = `${navH}px`;
      }
    };

    update();
    window.addEventListener("resize", update);

    const mo = new MutationObserver(update);
    mo.observe(document.body, { childList: true, subtree: true, attributes: true });

    return () => {
      window.removeEventListener("resize", update);
      mo.disconnect();
    };
  }, []);

  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Tworzenie stron",
      description:
        "Responsywne i szybkie strony internetowe dostosowane do Twoich potrzeb.",
      tooltip: "Realizacja od 7 dni, od 1500 zł",
    },
    {
      icon: <FaPalette />,
      title: "Portfolio & Blog",
      description: "Profesjonalne portfolio i blogi z łatwym zarządzaniem treścią.",
      tooltip: "Realizacja od 5 dni, od 1200 zł",
    },
    {
      icon: <FaEnvelope />,
      title: "Kontakt i wsparcie",
      description:
        "Formularze kontaktowe, szybkie odpowiedzi i pełne wsparcie techniczne.",
      tooltip: "Dostępne od ręki, pakiety wsparcia miesięcznego",
    },
  ];

  return (
    <section
  id="services"
  ref={ref as any}
  style={{ minHeight: minHeight ? `${minHeight}px` : undefined }}
  className="py-12 relative flex flex-col items-center justify-center overflow-hidden"

      // dodatkowy gradient w klasie zamiast tailwind helperów, żeby precyzyjnie kontrolować przejście
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to bottom, #60A5FA 0%, #9FD9FF 40%, #E6F7FF 100%)",
        }}
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />

        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          style={{ opacity: 0.45 }}
        >
          <defs>
            <pattern id="diag-lines-lightblue" width="96" height="96" patternUnits="userSpaceOnUse">
              <path d="M-12 12 L12 -12 M36 108 L108 36" stroke="rgba(6,30,60,0.02)" strokeWidth="1"/>
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#diag-lines-lightblue)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-16 text-gray-900">Co oferujemy</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm transition-all duration-500 transform hover:scale-105 hover:shadow-md relative group"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(244,253,255,0.96) 100%)",
              }}
            >
              <div className="text-[#1e3a8a] text-4xl mx-auto mb-4 transition-transform duration-300 group-hover:rotate-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>

              <p className="text-sm text-gray-500 mb-4">{service.tooltip}</p>

              <p className="text-gray-700 text-lg">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#contact"
            id="services-cta-link"
            className="px-8 py-3 bg-[#2563EB] text-white rounded-lg font-semibold hover:bg-[#1e40af] transition-transform transform hover:scale-105 inline-block"
          >
            Skontaktuj się
          </a>
        </div>
      </div>

      <style jsx>{`
        .blob {
          position: absolute;
          filter: blur(40px);
          opacity: 0.56;
          transform: translate3d(0,0,0);
          will-change: transform, opacity;
          mix-blend-mode: screen;
        }

        .blob-1 {
          width: 420px;
          height: 420px;
          left: -14%;
          top: -8%;
          background: radial-gradient(circle at 30% 30%, rgba(96,165,250,0.92), rgba(159,217,255,0.55) 45%, rgba(230,247,255,0.08) 80%);
          animation: moveBlob1 18s ease-in-out infinite;
        }

        .blob-2 {
          width: 320px;
          height: 320px;
          right: -10%;
          top: 6%;
          background: radial-gradient(circle at 70% 30%, rgba(159,217,255,0.9), rgba(200,235,255,0.45) 45%, rgba(255,250,248,0.06) 80%);
          animation: moveBlob2 22s ease-in-out infinite;
        }

        .blob-3 {
          width: 360px;
          height: 360px;
          left: 18%;
          bottom: -12%;
          background: radial-gradient(circle at 60% 60%, rgba(220,240,255,0.95), rgba(199,230,255,0.5) 50%, rgba(255,255,254,0.04) 85%);
          animation: moveBlob3 24s ease-in-out infinite;
        }

        @keyframes moveBlob1 {
          0% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(16px, -20px, 0) scale(1.03); }
          100% { transform: translate3d(0,0,0) scale(1); }
        }
        @keyframes moveBlob2 {
          0% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(-18px, 12px, 0) scale(0.99); }
          100% { transform: translate3d(0,0,0) scale(1); }
        }
        @keyframes moveBlob3 {
          0% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(12px, 18px, 0) scale(1.02); }
          100% { transform: translate3d(0,0,0) scale(1); }
        }

        @media (max-width: 640px) {
          .blob-1 { width: 220px; height: 220px; left: -18%; top: -18%; filter: blur(30px); opacity: 0.48; }
          .blob-2 { width: 180px; height: 180px; right: -18%; top: 8%; filter: blur(26px); opacity: 0.42; }
          .blob-3 { width: 200px; height: 200px; left: 8%; bottom: -18%; filter: blur(30px); opacity: 0.4; }
        }

        @media (prefers-reduced-motion: reduce) {
          .blob { animation: none !important; }
          .blob, .blob * { transition: none !important; }
        }
      `}</style>
    </section>
  );
}