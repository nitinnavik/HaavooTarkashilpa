import {StyleSheet, Text, View} from 'react-native';

import Header from './header';
import React from 'react';
import TabSwitcher from './../components/tabswitcher';

const MainPage = props => {
  return (
    <>
      <Header />
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
