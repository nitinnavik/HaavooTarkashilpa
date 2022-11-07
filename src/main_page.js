import {StyleSheet, Text, View} from 'react-native';

import HaavooHeader from './components/header';
import React from 'react';
import Search from './components/search';
import Tabs from './components/tabs';

const MainPage = () => {
  return (
    <View style={styles.main}>
      <HaavooHeader />
      <Search />
      <Tabs />
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'red',
  },
});
