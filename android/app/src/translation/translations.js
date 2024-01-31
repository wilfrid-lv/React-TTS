import React from 'react';
import { IntlProvider } from 'react-intl';
import en from './en.json';
import fr from './fr.json';
import es from './es.json';

const translations = {
  en,
  fr,
  es,
  // Ajoute d'autres langues au besoin
};

const LanguageProvider = ({ children, locale = 'en' }) => (
  <IntlProvider locale={locale} messages={translations[locale]}>
    {children}
  </IntlProvider>
);


export default translations;
