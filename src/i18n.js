import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "../locales/en.json";
import translationVI from "../locales/vi.json";

const resources = {
  en: { translation: translationEN },
  vi: { translation: translationVI },
};

i18n
  .use(initReactI18next) // Kết nối với React
  .use(LanguageDetector) // Tự động phát hiện ngôn ngữ từ trình duyệt
  .init({
    resources,
    fallbackLng: "en", // Ngôn ngữ mặc định
    interpolation: { escapeValue: false },
  });

export default i18n;
