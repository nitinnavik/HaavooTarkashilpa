import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import React,{useState} from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

const Search = () => {
  const [query,setQuery] = useState('');
   const searchQuery = useStoreState((state) => state.searchQuery);
  const setSearchQuery = useStoreActions((actions) => actions.setSearchQuery);
  if(query === ""){
    setSearchQuery("")
  }
  return (
    <View style={styles.textInputView}>
      <TextInput
        placeholder={'Search'}
        style={styles.textInput}
        activeUnderlineColor={'transparent'}
        underlineColor="transparent"
        returnKeyType={'done'}
        selectionColor="black"
        onChangeText={(text)=>setQuery(text)}
      />
      <TouchableOpacity onPress={()=>setSearchQuery(query)}>
      <Image
        style={styles.searchIcon}
        source={require('../assets/search-icon.png')}
      />
      </TouchableOpacity>
    </View>
  );
};
export default Search;

const styles = StyleSheet.create({
  searchIcon: {
    alignSelf: 'center',
    marginRight: 15,
    // width: 20,
    // height: 20,
   marginTop:10
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
