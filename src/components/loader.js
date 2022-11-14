import {
  Alert,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Loader = () => {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="none" transparent={true} visible={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.loadingmain}>
              <Image source={require('./loader.gif')} style={styles.loading} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loading: {
    // position: 'relative',
  },
  loadingmain: {
    position: 'relative',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22
  },
  modalView: {
    // margin: 20,
    // backgroundColor: 'none',
    borderRadius: 20,
    // padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  // modalText: {
  //   marginBottom: 15,
  //   textAlign: "center"
  // }
});
