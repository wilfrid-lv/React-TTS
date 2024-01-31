import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ModalSelector from 'react-native-modal-selector';

function LanguageSelector({ onLanguageChange }) {
  const handleLanguageSelect = (e) => {
    //const selectedLocale = e.target.value;
    onLanguageChange(selectedLocale);
  };

  const data = [
    { key: 'en', label: 'English' },
    { key: 'fr', label: 'French' },
    { key: 'es', label: 'Spanish' },
    // Add other language options as needed
  ];
  /*return (
    <View>
      <Text>Please select a language:</Text>
      <select onChange={handleLanguageSelect}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        {/* Ajoute d'autres options de langues si nécessaire *//*}
      </select>
    </View>
  );*/
  return (
    <View>
      <Text>Please select a language:</Text>
      <ModalSelector
        data={data}
        initValue="Select Language"
        onChange={handleLanguageSelect}
      >
        <TouchableOpacity>
          <Text>Select Language</Text>
        </TouchableOpacity>
      </ModalSelector>
    </View>
  );
}

export default LanguageSelector;
