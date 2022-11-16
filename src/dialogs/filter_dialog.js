import {
  Button,
  Image,
  Pressable,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import Accordion from '../components/accordion';
import Collapsible from 'react-native-collapsible';
import LinearGradient from 'react-native-linear-gradient';
import {Modal} from 'react-native';
import axios from 'react-native-axios/lib/axios';
import {useStoreState} from 'easy-peasy';

const FilterDialog = ({show, onClose}) => {
  const city = useStoreState(state => state.city);

  let businessButtons = [
    {
      id: 1,
      name: 'Individual',
    },
    {id: 2, name: 'Shop/Office'},
  ];

  const [selectedBusiness, setSelectedBusiness] = useState([]);
  const [accordionData, setAccordionData] = useState([]);
  const [areasData, setAreasData] = useState([]);
  const [checkedValueCategory, setCheckedValueCategory] = useState([]);
  const [checkedValueAreas, setCheckedValueAreas] = useState([]);

  const fetchCategory = () => {
    let url = `https://admin.haavoo.com/api/category`;
    axios
      .get(url)
      .then(function (response) {
        // alert(JSON.stringify(response?.data?.data));
        setAccordionData(response?.data?.data);
      })
      .catch(function (error) {
        alert(error.message);
      });
  };
  // alert(JSON.stringify(data));

  const fetchAreas = () => {
    let url = `https://admin.haavoo.com/api/area?city=${city}`;
    axios
      .get(url)
      .then(function (response) {
        // alert(JSON.stringify(response?.data?.data));
        setAreasData(response?.data?.data);
      })
      .catch(function (error) {
        alert(error.message);
      });
  };
  // alert(JSON.stringify(data));

  useEffect(() => {
    fetchCategory();
    fetchAreas();
  }, [show, city]);
  return (
    <Modal
      visible={show}
      animationType="fade"
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <LinearGradient
        colors={['#7d0202', 'black']}
        style={styles.linearGradient}>
        <View style={styles.container}>
          <Pressable
            onPress={onClose}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
              paddingTop: 20,
            }}>
            <Image
              style={styles.leftarrow}
              source={require('../assets/leftarrow.png')}
            />
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                marginLeft: -20,
                fontWeight: 'bold',
              }}>
              Filter
            </Text>
            <Text></Text>
          </Pressable>
          <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
            <View style={styles.typebusiness}>
              <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
                Type Business
              </Text>
              <View style={{flexWrap: 'nowrap', flexDirection: 'row'}}>
                {businessButtons &&
                  businessButtons.map((item, key) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          if (selectedBusiness.includes(item.id)) {
                            selectedBusiness.slice(0);
                          }
                          if (selectedBusiness?.includes(item.id)) {
                            let itemIndex = businessButtons?.findIndex(
                              tm => tm === item.id,
                            );
                            selectedBusiness.splice(itemIndex, 1);
                          } else {
                            selectedBusiness.push(item.id);
                          }
                        }}
                        key={item.id}
                        style={{
                          margin: 10,
                          padding: 10,
                          backgroundColor: '#3a3535',
                          borderRadius: 20,
                          borderWidth: 1,
                          borderColor: 'gray',
                        }}>
                        <Text
                          style={{
                            fontSize: 14,
                            color: 'white',
                            fontWeight: 'bold',
                          }}>
                          {item.name}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
              </View>
            </View>
            <View style={styles.category}>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'white',
                    fontWeight: '500',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    padding: 20,
                  }}>
                  Category
                </Text>
              </View>
              <View>
                <Accordion
                  data={accordionData}
                  checkedValue={checkedValueCategory}
                  setCheckedValue={setCheckedValueCategory}
                  showDrop
                />
              </View>
            </View>
            <View style={styles.areas}>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'white',
                    fontWeight: '500',
                    paddingTop: 20,
                    paddingLeft: 20,
                  }}>
                  Areas
                </Text>
              </View>
              <View>
                <Accordion
                  data={areasData}
                  checkedValue={checkedValueAreas}
                  setCheckedValue={setCheckedValueAreas}
                  showDrop={false}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </LinearGradient>
    </Modal>
  );
};

export default FilterDialog;

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    // margin: 20,
  },
  leftarrow: {
    height: 20,
    width: 20,
    color: 'white',
  },
  typebusiness: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 20,
    marginTop: 20,
    borderRadius: 16,
  },
  cityCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  category: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 16,
    marginTop: 30,
    overflow: 'hidden',
  },
  areas: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 16,
    marginTop: 40,
    overflow: 'hidden',
    marginBottom: 30,
  },
});
