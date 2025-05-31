// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Импортируем JSON-переводы
import translationEN from "./locales/en/translation.json";
import translationRU from "./locales/ru/translation.json";
import translationHE from "./locales/he/translation.json";
import translationAR from "./locales/ar/translation.json";
import translationFR from "./locales/fr/translation.json";

i18n
    // Опционально: подпишем автоматическое распознавание языка браузера
    .use(LanguageDetector)
    // Обязательно: инициализируем адаптер для React
    .use(initReactI18next)
    .init({
        fallbackLng: "en",        // если язык не найден, берём англ.
        debug: false,             // включите true, если хотите логи i18next в консоли

        // Список доступных переводов
        resources: {
            en: { translation: translationEN },
            ru: { translation: translationRU },
            he: { translation: translationHE },
            ar: { translation: translationAR },
            fr: { translation: translationFR }
        },

        // По умолчанию будем искать ключи именно в namespace "translation"
        ns: ["translation"],
        defaultNS: "translation",
        interpolation: {
            escapeValue: false,     // React сам экранирует XSS, поэтому false
        },
    });

export default i18n;