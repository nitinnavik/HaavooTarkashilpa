import {Image, StyleSheet, Text, View} from 'react-native';

import React from 'react';

const Loader = () => {
  return (
    <View style={styles.loadingmain}>
      <Image source={require('./loader.gif')} style={styles.loading} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
  },
  loadingmain: {
    position: 'relative',
  },
});
