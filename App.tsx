/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import Main from './components/Main';
import Body from './components/Body';



function App(): JSX.Element {

  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: '100%', width: '100%'}}>
      <Main />
      <Body />
    </SafeAreaView>
  );
}


export default App;
