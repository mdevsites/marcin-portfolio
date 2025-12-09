import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 py-6 flex flex-col items-center font-sans text-center">
      
      {/* Subtelny separator nad footerem */}
      <span className="block w-16 h-[2px] mb-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 rounded-full"></span>

      <p className="text-sm md:text-base mb-3">
        © {new Date().getFullYear()} M.dev – Wszystkie prawa zastrzeżone
      </p>

      <div className="flex justify-center gap-5 text-2xl">
        <a
          href="https://github.com/mdevsites"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-200 hover:text-white transition-colors duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/marcin-chrąchol-5a9a7b21b"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-200 hover:text-white transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:m.devkontakt@gmail.com"
          className="text-gray-200 hover:text-white transition-colors duration-300"
        >
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
}
