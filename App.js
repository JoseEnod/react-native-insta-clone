import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import Routes from './src/routes/router';

export default function App() {

  return (<>
    <StatusBar backgroundColor="#FFF" />
    <Routes />
  </>
  );
}