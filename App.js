import React from 'react';
import 'react-native-gesture-handler';
import { Portal } from 'react-native-paper';
import { Provider } from 'react-redux';

import AppRouter from './src/router/AppRouter';
import Store from './src/redux/store';


const App = () => {
  return (
    <Provider store = { Store }>
      <Portal.Host>
        <AppRouter />
      </Portal.Host>
    </Provider>
  );
};

export default App;

