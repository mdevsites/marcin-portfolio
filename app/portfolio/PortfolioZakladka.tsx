"use client";

import React from "react";

export default function PortfolioZakladka() {
  const projects = [
    {
      title: "Projekt 1",
      description: "Opis projektu numer 1",
      image: "/portfolio1.png",
    },
    {
      title: "Projekt 2",
      description: "Opis projektu numer 2",
      image: "/portfolio2.png",
    },
    {
      title: "Projekt 3",
      description: "Opis projektu numer 3",
      image: "/portfolio3.png",
    },
    {
      title: "Projekt 4",
      description: "Opis projektu numer 4",
      image: "/portfolio4.png",
    },
  ];

  return (
    <section
      id="portfolio"
      className="pt-28 pb-16 min-h-[calc(100vh-7rem)]"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #0b1220 0%, #1e3a8a 60%, #60A5FA 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="text-4xl font-bold mb-12 text-center">Portfolio</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white/10 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
