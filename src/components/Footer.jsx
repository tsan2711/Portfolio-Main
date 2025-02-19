import React from "react";
import { useTranslation } from "react-i18next";

import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope, FaTelegram } from "react-icons/fa"; // Import icons

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className=" text-white py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
        {/* Navigation Links */}
        <nav className="mt-4 flex gap-6 text-gray-400 text-sm">
          <a href="#HOME" className="hover:text-[#A56A5C] transition">{t("footer.home")}</a>
          <a href="#ABOUT" className="hover:text-[#A56A5C] transition">{t("footer.about")}</a>
          <a href="#EXPERIENCE" className="hover:text-[#A56A5C] transition">{t("footer.experience")}</a>
          <a href="#PROJECT" className="hover:text-[#A56A5C] transition">{t("footer.projects")}</a>
          <a href="#CONTACT" className="hover:text-[#A56A5C] transition">{t("footer.contact")}</a>
        </nav>

        {/* Social Media Icons */}
        <div className="mt-4 flex gap-4">
          <a href="https://github.com/tsan2711" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-light[#A56A5C] transition">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/tansang1201" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-light[#A56A5C] transition">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.facebook.com/tan.sang.902833/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-light[#A56A5C] transition">
            <FaFacebook size={24} />
          </a>
          <a href="mailto:nguyentansangxd@gmail.com" className="text-gray-400 hover:text-[#A56A5C] transition">
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs mt-4">
          © {new Date().getFullYear()} {t("footer.privacy")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
