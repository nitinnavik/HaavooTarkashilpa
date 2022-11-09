import {Image, StyleSheet, TextInput, View} from 'react-native';

import React from 'react';

const Search = () => {
  return (
    <View style={styles.textInputView}>
      <TextInput
        placeholder={'Search'}
        style={styles.textInput}
        activeUnderlineColor={'transparent'}
        underlineColor="transparent"
        returnKeyType={'done'}
        selectionColor="black"
      />
      <Image
        style={styles.searchIcon}
        source={require('../assets/search-icon.png')}
      />
    </View>
  );
};
export default Search;

const styles = StyleSheet.create({
  searchIcon: {
    alignSelf: 'center',
    marginRight: 20,
    width: 20,
    height: 20,
  },
  textInputView: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  textInput: {
    flex: 1,
    padding: 5,
    paddingLeft: 20,
    margin: 5,
    fontSize: 20,
    color: 'white',
  },
});
