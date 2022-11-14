import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useStoreActions, useStoreState} from 'easy-peasy';

import Modal from 'react-native-modal';

const SortByDialog = ({show, onClose}) => {
  const [checkedValue, setCheckedValue] = useState(null);
  let data = ['relevance', 'popularity', 'distance'];
  const setBusinessFilterObject = useStoreActions(
    actions => actions.setBusinessFilterObject,
  );
  const filterObject = useStoreState(state => state.filterObject);

  return (
    <View style={styles.container}>
      <Modal
        isVisible={show}
        swipeDirection="down"
        style={{
          justifyContent: 'flex-end',
          margin: 0,
          marginBottom: 60,
          height: Dimensions.get('screen').height / 1.5,
        }}>
        <View
          style={
            {
              // position: 'absolute',
              // bottom: 50,
            }
          }>
          <View style={{minWidth: '100%'}}>
            <Pressable
              onPress={onClose}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 20,
              }}>
              <Image
                style={styles.sortclosebtn}
                source={require('../assets/close.png')}
              />
            </Pressable>
            <View
              style={{
                backgroundColor: 'black',
              }}>
              {data &&
                data.map((item, key) => {
                  return (
                    <View
                      key={key}
                      style={{
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        borderBottomColor: 'gray',
                        borderBottomWidth: 1,
                      }}>
                      {checkedValue === key ? (
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}>
                          <Text style={styles.radioText}>{item}</Text>
                          <Pressable
                            style={styles.checkedcard}
                            onPress={() => {
                              filterObject.sort = item;
                              setBusinessFilterObject(filterObject);
                              setCheckedValue(key);
                              onClose();
                            }}>
                            <Image
                              style={styles.radioCircleChecked}
                              source={require('../assets/yellowchecked.png')}
                            />
                          </Pressable>
                        </View>
                      ) : (
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}>
                          <Text style={styles.radioText}>{item}</Text>
                          <Pressable
                            onPress={() => {
                              filterObject.sort = item;
                              setBusinessFilterObject(filterObject);
                              setCheckedValue(key);
                              onClose();
                            }}
                            style={styles.checkedcard}>
                            <Image
                              style={styles.radioCircle}
                              source={require('../assets/squarewhite.png')}
                            />
                          </Pressable>
                        </View>
                      )}
                    </View>
                  );
                })}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SortByDialog;

const styles = StyleSheet.create({
  container: {},
  sortclosebtn: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  radioText: {
    fontSize: 17,
    color: 'white',
    fontWeight: '700',
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 100,
    borderWidth: 2,
  },
  radioCircleChecked: {
    height: 17,
    width: 17,
    borderRadius: 100,
    borderWidth: 2,
  },
  checkedcard: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
});
