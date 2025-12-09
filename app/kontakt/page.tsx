"use client";

import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    pages: "",
    materials: "",
    integrations: "",
    style: "",
    examples: "",
    features: "",
    deadline: "",
    budget: "",
    notes: "",
  });

  const projectOptions: string[] = ["Wizytówka", "Sklep", "Blog", "Portfolio", "Inna"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Formularz wysłany!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          pages: "",
          materials: "",
          integrations: "",
          style: "",
          examples: "",
          features: "",
          deadline: "",
          budget: "",
          notes: "",
        });
      } else {
        alert("Błąd przy wysyłaniu formularza");
      }
    } catch (err) {
      alert("Błąd: " + err);
    }
  };

  return (
    <div className="min-h-screen pt-32 px-6 md:px-0 flex justify-center bg-gradient-to-b from-[#0b1220] via-[#1e3a8a] to-[#60A5FA]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl p-8 rounded-3xl backdrop-blur-md bg-white/10 text-white shadow-2xl space-y-8"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Formularz kontaktowy</h2>

        {/* Dane klienta */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold border-b border-white/30 pb-2">Dane klienta</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Imię i nazwisko / Firma"
              value={formData.name}
              onChange={handleChange}
              required
              className="input"
            />
            <input
              type="email"
              name="email"
              placeholder="Adres e-mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="input"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Telefon"
              value={formData.phone}
              onChange={handleChange}
              className="input"
            />
          </div>
        </div>

        {/* Informacje o projekcie */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold border-b border-white/30 pb-2">Informacje o projekcie</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Stylowany dropdown */}
            <div className="relative">
              <Listbox
                value={formData.projectType}
                onChange={(value: string) => setFormData({ ...formData, projectType: value })}
              >
                <Listbox.Button className="relative w-full py-3 px-4 bg-white/10 text-white rounded-xl text-left focus:ring-2 focus:ring-blue-400">
                  {formData.projectType || "Rodzaj strony"}
                  <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <ChevronUpDownIcon className="w-5 h-5 text-white" />
                  </span>
                </Listbox.Button>
                <Listbox.Options className="absolute mt-1 w-full bg-[#1e3a8a]/90 border border-white/20 rounded-xl shadow-lg max-h-60 overflow-auto text-white z-10">
                  {projectOptions.map((option, idx) => (
                    <Listbox.Option
                      key={idx}
                      value={option}
                      className={({ active }: { active: boolean }) =>
                        `cursor-pointer select-none px-4 py-2 rounded-lg ${
                          active ? "bg-blue-500/50" : ""
                        } transition-colors`
                      }
                    >
                      {option}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Listbox>
            </div>

            <input
              type="number"
              name="pages"
              placeholder="Ilość podstron / sekcji"
              value={formData.pages}
              onChange={handleChange}
              className="input"
            />
          </div>
          <input
            type="text"
            name="materials"
            placeholder="Czy masz gotowe materiały (logo, grafiki, teksty)?"
            value={formData.materials}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="integrations"
            placeholder="Potrzebne integracje (płatności, newsletter, CRM)"
            value={formData.integrations}
            onChange={handleChange}
            className="input"
          />
        </div>

        {/* Styl i preferencje */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold border-b border-white/30 pb-2">Styl i preferencje</h3>
          <input
            type="text"
            name="style"
            placeholder="Styl i kolorystyka"
            value={formData.style}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="examples"
            placeholder="Przykłady stron, które Ci się podobają"
            value={formData.examples}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="features"
            placeholder="Dodatkowe funkcje (formularze, galeria, animacje...)"
            value={formData.features}
            onChange={handleChange}
            className="input"
          />
        </div>

        {/* Termin i budżet */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold border-b border-white/30 pb-2">Termin i budżet</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="input"
            />
            <input
              type="text"
              name="budget"
              placeholder="Budżet"
              value={formData.budget}
              onChange={handleChange}
              className="input"
            />
          </div>
        </div>

        {/* Dodatkowe uwagi */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold border-b border-white/30 pb-2">Dodatkowe uwagi</h3>
          <textarea
            name="notes"
            placeholder="Dodatkowe informacje"
            value={formData.notes}
            onChange={handleChange}
            className="input h-32"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-2xl transition"
        >
          Wyślij formularz
        </button>
      </form>
    </div>
  );
}
