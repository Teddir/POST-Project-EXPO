import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Portal, Provider as ThemeProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import Store from './src/redux/store';

import Navigator from './Navigator'

export default function App() {
  return (
    <Provider store = { Store }>
      <Portal.Host>
        <Navigator />
      </Portal.Host>
    </Provider>
  );
}

