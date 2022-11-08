/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import HaavooHome from './src/pages/landing_page';
import Home from './src/pages/home';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  let condition = false;

  return (
    <>
      <LinearGradient
        colors={['#7d0202', 'black']}
        style={styles.linearGradient}>
        {condition ? <HaavooHome /> : <Home />}
      </LinearGradient>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
  },
});
