import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Portal, Provider as ThemeProvider } from 'react-native-paper';

import Navigator from './Navigator'

export default function App() {
  return (
    <Portal.Host>
      <Navigator />
    </Portal.Host>
  );
}

