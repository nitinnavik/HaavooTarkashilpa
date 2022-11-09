import {Image, StyleSheet, Text, View} from 'react-native';

import React from 'react';
import Search from '../components/search';

const Home = props => {
  return (
    <View style={styles.mainHeader}>
      <View style={styles.headermain}>
        <View
          style={styles.mainHeader}
          onPress={() => props?.setCondition(!props?.condition)}>
          <View>
            <Image
              style={styles.leftarrow}
              source={require('../assets/leftarrow.png')}
            />
          </View>
        </View>
        <View style={{paddingLeft: 20, flex: 1}}>
          <Text
            style={[
              styles.cityText,
              {
                fontSize: 22,
                textAlign: 'center',
                marginLeft: -60,
              },
            ]}>
            Search
          </Text>
        </View>
      </View>
      <View
        onPress={() => props?.setCondition(!props?.condition)}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <Text style={styles.cityText}>Ernakulam</Text>
        <Image
          style={styles.homeimg3}
          source={require('../assets/downarrow.png')}
        />
      </View>
      <View style={{marginVertical: 20}}>
        <Search />
      </View>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  mainHeader: {
    marginHorizontal: 10,
  },

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
    textAlign: 'center',
    marginTop: 20,
  },
});
