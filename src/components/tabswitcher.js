import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import BusinessCards from './business_cards';
import DealsCards from './deals_card';

const TabSwitcher = () => {
  const [tabSwitch, setTabSwitch] = useState(true);

  return (
    <View style={{flexDirection: 'column', flex: 1}}>
      <View style={styles.tabsMain}>
        <Text
          style={tabSwitch === true ? styles.yellowBg : styles.tabSection}
          onPress={() => setTabSwitch(true)}>
          Business
        </Text>
        <Text
          style={tabSwitch === false ? styles.yellowBg : styles.tabSection}
          onPress={() => setTabSwitch(false)}>
          Deals
        </Text>
      </View>
      <View style={{flex: 1}}>
        {tabSwitch && <BusinessCards />}
        {tabSwitch === false && <DealsCards />}
      </View>
    </View>
  );
};
export default TabSwitcher;

const styles = StyleSheet.create({
  tabsMain: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
    flex: 0,
  },
  tabSection: {
    borderColor: '#fff',
    borderWidth: 1,
    padding: 8,
    margin: 2,
    color: '#000',
    fontWeight: '600',
    fontSize: 20,
    borderRadius: 50,
    flex: 1,
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  noDeals: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  yellowBg: {
    backgroundColor: '#FAA41A',
    borderColor: '#FAA41A',
    borderWidth: 1,
    padding: 8,
    margin: 2,
    color: '#fff',
    fontWeight: '600',
    fontSize: 20,
    borderRadius: 50,
    flex: 1,
    textAlign: 'center',
  },
  cityCard: {
    borderWidth: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderColor: 'gray',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    flexDirection: 'row',
  },
  imageCard: {
    height: 120,
    width: 120,
  },
});
