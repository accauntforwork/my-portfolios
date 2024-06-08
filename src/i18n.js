import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      downloadBtn: "Download CV",
      latestVideo: "My latest videos",
      top: "top",
      newest: "Newest",
      reset: "Reset",
      search: "Search projects...",
    },
  },
  uz: {
    translation: {
      downloadBtn: "Rezyumeni yuklab olish",
      latestVideo: "Mening so'nggi videolarim",
      top: "top",
      newest: "Yangilari",
      reset: "Tozalash",
      search: "Loyihalardan qidirish...",
    },
  },
  ru: {
    translation: {
      downloadBtn: "Скачать резюме",
      latestVideo: "Мои последние видео",
      top: "лучшие",
      newest: "новый",
      reset: "Сброс",
      search: "Поиск проектов...",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uz", // Default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
