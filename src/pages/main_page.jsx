import {StyleSheet, Text, View} from 'react-native';

import Home from './home';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import TabSwitcher from './../components/tabswitcher';

const MainPage = props => {
  return (
    <View>
      <Home />
      <TabSwitcher />
    </View>
  );
};
export default MainPage;

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
  },
});
