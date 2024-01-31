import en from './en.json';
import fr from './fr.json';
import es from './es.json';
import React from 'react';
import { FormattedMessage } from 'react-intl';

const translations = {
  en,
  fr,
  es,
  // Ajoute d'autres langues au besoin
};

function Title() {
  return (
    <p>
      <FormattedMessage id="title" defaultMessage="Text-to-Speech in React Native" />
    </p>
  );
}

export default translations;
