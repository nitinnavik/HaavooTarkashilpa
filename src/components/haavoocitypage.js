import {Image, StyleSheet, Text, View} from 'react-native';

import React from 'react';

const HaavooCityPage = props => {
  return (
    <View
      style={styles.mainHeader}
      onPress={() => props?.setCondition(!props?.condition)}>
      <View>
        <Image
          style={styles.leftarrow}
          source={require('../assets/leftarrow.png')}
        />
      </View>

      <Text style={styles.searchText}>Search Your City or Location</Text>
    </View>
  );
};
export default HaavooCityPage;

const styles = StyleSheet.create({
  mainHeader: {
    padding: 10,
    flexDirection: 'row',
  },
  backArrow: {
    width: 20,
    height: 30,
  },
  searchText: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 40,
    marginRight: 40,
    color: 'white',
    marginTop: 10,
  },
  leftarrow: {
    height: 20,
    width: 20,
    color: 'white',
    marginTop: 15,
    marginLeft: 10,
  },
});
