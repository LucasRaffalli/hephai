// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importez vos traductions
import enTranslation from '@/lang/en.json';
import frTranslation from '@/lang/fr.json';

const savedLanguage = localStorage.getItem('language') || 'en';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslation },
            fr: { translation: frTranslation },
        },
        lng: savedLanguage,
        fallbackLng: 'fr',
        interpolation: { escapeValue: false },
    });

export default i18n;
