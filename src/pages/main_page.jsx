import {StyleSheet, Text, View} from 'react-native';

import Home from './home';
import React from 'react';
import TabSwitcher from './../components/tabswitcher';

const MainPage = props => {
  return (
    <>
      <Home />
      <TabSwitcher />
    </>
  );
};
export default MainPage;

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
  },
});
