import {Image, StyleSheet, Text, View} from 'react-native';

import React from 'react';
import Search from '../components/search';

const Header = props => {
  return (
    <View style={styles.mainHeader}>
      <View style={styles.headermain}>
        <View style={{flex: 1}}>
          <Image
            style={styles.leftarrow}
            source={require('../assets/leftarrow.png')}
          />
        </View>
        <Text
          style={[
            styles.cityText,
            {
              fontSize: 22,
              textAlign: 'center',
              flex: 1,
            },
          ]}>
          Search
        </Text>
        <View style={{flex: 1}}></View>
      </View>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  homeimg3: {
    width: 20,
    height: 20,
    marginTop: 5,
    marginLeft: 10,
  },
  leftarrow: {
    height: 20,
    width: 20,
    color: 'white',
  },

  cityText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  headermain: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 15,
    justifyContent: 'space-evenly',
  },
});
