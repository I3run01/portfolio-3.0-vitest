import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en_usTranslation from './locales/en.json';
import pt_brTranslation from './locales/ptbr.json';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
    resources: {
      en: { translation: en_usTranslation },
      ptbr: { translation: pt_brTranslation },
    },
  });

export default i18n;