import React from 'react';
import { View, Text } from 'react-native';
import Picker from '@react-native-picker/picker';

/*function LanguageSelector({ onLanguageChange }) {
  const handleLanguageSelect = (e) => {
    const selectedLocale = e.target.value;
    onLanguageChange(selectedLocale);
  };*/
function LanguageSelector({ onLanguageChange }) {
  const handleLanguageSelect = (selectedLocale) => {
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
      <Picker onValueChange={handleLanguageSelect}>
        <Picker.Item label="English" value="en" />
        <Picker.Item label="French" value="fr" />
        <Picker.Item label="Spanish" value="es" />
        {/* Add other language options if needed */}
      </Picker>
    </View>
  );
}

export default LanguageSelector;
