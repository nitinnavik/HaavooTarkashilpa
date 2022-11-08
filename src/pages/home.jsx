import {Image, StyleSheet, Text, View} from 'react-native';

import React from 'react';

const Home = () => {
  return (
    <View style={styles.mainHeader}>
      <View style={styles.headermain}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.homeimg1}
            source={require('../assets/burger.png')}
          />
          <Image
            style={styles.homeimg2}
            source={require('../assets/app_icon.png')}
          />
        </View>

        <Text style={styles.searchText}>Home</Text>
      </View>
      <Text style={{textAlign: 'center', marginTop: 20}}>
        <Text style={styles.cityText}>Select City</Text>
        <Image
          style={styles.homeimg3}
          source={require('../assets/downarrow.png')}
        />
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainHeader: {
    marginHorizontal: 15,
    flex: 1,
  },
  homeimg1: {
    width: 30,
    height: 30,
    marginTop: 5,
  },
  homeimg2: {
    width: 45,
    height: 40,
    marginLeft: 20,
  },
  homeimg3: {
    width: 20,
    height: 20,
  },
  searchText: {
    fontSize: 22,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    flex: 1,
    marginLeft: -95,
  },
  cityText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    flex: 1,
  },
  headermain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    alignItems: 'center',
  },
});
