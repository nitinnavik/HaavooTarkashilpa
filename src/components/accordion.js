import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useStoreActions, useStoreState} from 'easy-peasy';

const Accordion = ({data, checkedValue, setCheckedValue, showDrop}) => {
  const filterObject = useStoreState(state => state.filterObject);
  const [selectedAccordion, setSelectedAccordion] = useState();

  useEffect(() => {}, [data]);
  return (
    <View
      style={{
        padding: 20,
      }}>
      <ScrollView>
        {data &&
          data?.map((item, key) => {
            return (
              <View key={key}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 5,
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    {checkedValue?.includes(item?.name) ? (
                      <Pressable
                        onPress={() => {
                          setSelectedAccordion(key);

                          const newSelectCategory = [...checkedValue];
                          if (newSelectCategory.includes(item?.name)) {
                            let itemIndex = checkedValue?.findIndex(
                              tm => tm === item?.name,
                            );
                            newSelectCategory.splice(itemIndex, 1);
                          } else {
                            if (item?.child?.length > 0) {
                              item?.child?.map(tempItem => {
                                newSelectCategory.push(tempItem?.name);
                              });
                              newSelectCategory.push(item?.name);
                              alert(JSON.stringify(newSelectCategory));
                            } else {
                              newSelectCategory.push(item?.name);
                            }
                          }
                          if (
                            item?.child?.length > 0 &&
                            item?.child?.includes(item?.name)
                          ) {
                            item?.child?.map(tempItem => {
                              let itemIndex = checkedValue?.findIndex(
                                tm => tm === tempItem?.name,
                              );
                              newSelectCategory.splice(itemIndex, 1);
                            });
                          }
                          setCheckedValue(newSelectCategory);
                        }}>
                        <View style={styles.radioSquareChecked}></View>
                      </Pressable>
                    ) : (
                      <Pressable
                        onPress={() => {
                          setSelectedAccordion(key);

                          const newSelectCategory = [...checkedValue];
                          if (newSelectCategory?.includes(item?.name)) {
                            let itemIndex = checkedValue?.findIndex(
                              tm => tm === item?.name,
                            );
                            newSelectCategory.splice(itemIndex, 1);
                          } else {
                            if (item?.child?.length > 0) {
                              item?.child?.map(tempItem => {
                                newSelectCategory.push(tempItem?.name);
                              });
                              newSelectCategory.push(item?.name);
                              //   alert(JSON.stringify(newSelectCategory));
                            } else {
                              newSelectCategory.push(item?.name);
                            }
                          }
                          if (
                            item?.child?.length > 0 &&
                            item?.child?.includes(item?.name)
                          ) {
                            item?.child?.map(tempItem => {
                              let itemIndex = checkedValue?.findIndex(
                                tm => tm === tempItem?.name,
                              );
                              newSelectCategory.splice(itemIndex, 1);
                            });
                          }
                          setCheckedValue(newSelectCategory);
                        }}
                        style={styles.checkedcard}>
                        <View style={styles.radioCircle}></View>
                      </Pressable>
                    )}
                    <Text style={styles.radioText}>{item?.name}</Text>
                  </View>
                  {showDrop && (
                    <Pressable
                      onPress={() => {
                        if (selectedAccordion === key) {
                          setSelectedAccordion(null);
                        } else {
                          setSelectedAccordion(key);
                        }
                      }}>
                      <Image
                        style={styles.downarrow}
                        source={require('../assets/downarrow.png')}
                      />
                    </Pressable>
                  )}
                </View>
                {selectedAccordion === key && showDrop ? (
                  <View
                    style={{marginLeft: 20, marginTop: 5, marginBottom: 10}}>
                    {item?.child?.length > 0
                      ? item?.child?.map(el => {
                          //   alert(JSON.stringify(el));
                          return (
                            <View
                              style={{
                                flexDirection: 'row',
                                marginVertical: 3,
                                alignItems: 'center',
                              }}>
                              {checkedValue.includes(el?.name) ? (
                                <Pressable
                                  onPress={() => {
                                    const newSelectCategory = [...checkedValue];
                                    if (newSelectCategory.includes(el?.name)) {
                                      let itemIndex = checkedValue?.findIndex(
                                        tm => tm === el?.name,
                                      );
                                      newSelectCategory.splice(itemIndex, 1);
                                    } else {
                                      newSelectCategory.push(el?.name);
                                    }
                                    setCheckedValue(newSelectCategory);
                                  }}>
                                  <View
                                    style={styles.radioSquareChecked}></View>
                                </Pressable>
                              ) : (
                                <Pressable
                                  onPress={() => {
                                    const newSelectCategory = [...checkedValue];
                                    if (newSelectCategory?.includes(el?.name)) {
                                      let itemIndex = checkedValue?.findIndex(
                                        tm => tm === el?.name,
                                      );
                                      newSelectCategory.splice(itemIndex, 1);
                                    } else {
                                      newSelectCategory.push(el?.name);
                                    }
                                    setCheckedValue(newSelectCategory);
                                  }}
                                  style={styles.checkedcard}>
                                  <View style={styles.radioCircle}></View>
                                </Pressable>
                              )}
                              <Text style={styles.radioText}>{el.name}</Text>
                            </View>
                          );
                        })
                      : ''}
                  </View>
                ) : (
                  ''
                )}
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  radioText: {
    fontSize: 17,
    color: 'white',
    // fontWeight: '500',
    // marginLeft: 20,
  },
  radioCircle: {
    height: 17,
    width: 17,
    borderRadius: 5,
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  radioSquareChecked: {
    height: 17,
    width: 17,
    borderWidth: 2,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'orange',
    borderRadius: 5,
    marginHorizontal: 20,
  },
  downarrow: {
    height: 18,
    width: 18,
  },
});
