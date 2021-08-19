import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StorageData} from './src/hooks/useStorageData';

import {StatusBar} from 'react-native';
import {TabBarRoutes} from './src/routes';
export default function App() {
  return (
    <NavigationContainer>
      <StorageData>
        <StatusBar barStyle="light-content" />
        <TabBarRoutes />
      </StorageData>
    </NavigationContainer>
  );
}
