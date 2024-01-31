/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import { IntlProvider } from 'react-intl';
import App from './App';
import {name as appName} from './app.json';
import translations from './android/app/src/translation/translations';

const locale = 'en';//default locale

const RootComponent = () => (
    <IntlProvider locale={locale} messages={translations[locale]}>
      <App />
    </IntlProvider>
  );

AppRegistry.registerComponent(appName, () => RootComponent);
