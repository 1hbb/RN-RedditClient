import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {persistor} from './src/store/store';
import AppNavigator from './src/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
