import React from 'react';

function LanguageSelector({ onLanguageChange }) {
  const handleLanguageSelect = (e) => {
    const selectedLocale = e.target.value;
    onLanguageChange(selectedLocale);
  };

  return (
    <select onChange={handleLanguageSelect}>
      <option value="en">English</option>
      <option value="fr">French</option>
      <option value="es">Spanish</option>
      {/* Ajoute d'autres options de langues si nécessaire */}
    </select>
  );
}

export default LanguageSelector;
