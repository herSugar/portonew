import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-white">
              Portofolio<span className="text-blue-400">.</span>
            </a>
            <p className="text-gray-400 mt-2">
              © {currentYear} All rights reserved
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/herSugar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-xl transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="www.linkedin.com/in/restu-jaya-113667360"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-xl transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/gr1mriper?igsh=cndhM2pndGtoYmtu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-xl transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@gerip69"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-xl transition-colors"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}