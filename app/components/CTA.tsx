export default function CTA() {
  return (
    <section
      id="contact"
      className="py-12 text-center -mt-10"
      style={{
        backgroundColor: "#E6F7FF", // dokładny kolor z końca gradientu Services
        boxShadow: "inset 0 8px 24px rgba(14,165,250,0.04)" // delikatne zmiękczenie krawędzi
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Gotowy na współpracę?</h2>
      <p className="text-gray-700 mb-6 text-lg">
        Skontaktuj się ze mną, aby omówić Twój projekt i otrzymać darmową wycenę.
      </p>
      <a
        href="mailto:kontakt@marcin.dev"
        className="bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-lg hover:bg-blue-500 transition"
      >
        Napisz do mnie
      </a>
    </section>
  );
}