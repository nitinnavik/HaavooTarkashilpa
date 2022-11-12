import {StyleSheet, Text, View} from 'react-native';

import Header from './header';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import TabSwitcher from './../components/tabswitcher';

const MainPage = () => {
  return (
    <LinearGradient colors={['#7d0202', 'black']} style={styles.linearGradient}>
      <Header />
      <TabSwitcher />
    </LinearGradient >

  );
};
export default MainPage;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 10,
  },
  linearGradient: {
    height: '100%',
  },
});