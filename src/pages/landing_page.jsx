import {ScrollView, StyleSheet, Text, View} from 'react-native';

import HaavooCityPage from '../components/haavoocitypage';
import React from 'react';
import Search from '../components/search';
import SelectCity from '../components/selectCity';

const HaavooHome = props => {
  return (
    <>
      <HaavooCityPage
        condition={props.condition}
        setCondition={props.setCondition}
      />
      <Search />
      <ScrollView style={styles.scrollView}>
        <SelectCity />
      </ScrollView>
    </>
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
