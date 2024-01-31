/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import LanguageProvider from './android/app/src/translation/translations';

const RootComponent = () => (
    <LanguageProvider locale="en">
      <App />
    </LanguageProvider>
  );

AppRegistry.registerComponent(appName, () => RootComponent);
