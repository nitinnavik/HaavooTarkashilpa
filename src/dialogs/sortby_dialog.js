import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

import Modal from 'react-native-modal';

const SortByDialog = () => {
  const [checkedValue, setCheckedValue] = useState(null);
  return (
    <Modal isVisible={true}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            // justifyContent: 'center',
            // textAlign: 'center',
          }}>
          <View style={{flex: 1}}>
            <Image
              style={styles.sortclosebtn}
              source={require('../assets/close.png')}
            />
            {/* <View
              style={{
                marginTop: 30,
                flexDirection: 'row',
                alignItems: 'center',
                justifyItems: 'space-between',
                flex: 1,
              }}>
              <Text style={styles.radioText}>Relevance</Text>
              <TouchableOpacity style={styles.radioCircle}>
                {value === checkedValue && <View style={styles.selectedRb} />}
              </TouchableOpacity>
            </View> */}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SortByDialog;

const styles = StyleSheet.create({
  sortclosebtn: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  radioText: {
    fontSize: 22,
    color: 'white',
    fontWeight: '700',
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white',
  },
  selectedRb: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: 'yellow',
  },
});
