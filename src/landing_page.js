import {ScrollView, StyleSheet, Text, View} from 'react-native';

import HaavooCityPage from './components/haavoocitypage';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import Search from './components/search';
import SelectCity from './components/selectCity';

const HaavooHome = () => {
  return (
    <LinearGradient colors={['#7d0202', 'black']} style={styles.linearGradient}>
      <ScrollView style={styles.scrollView}>
        <HaavooCityPage />
        <Search />
        <SelectCity />
      </ScrollView>
    </LinearGradient>
  );
};

export default HaavooHome;

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
