import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useStoreActions, useStoreState} from 'easy-peasy';

import axios from 'react-native-axios';
import {useNavigation} from '@react-navigation/native';

const SmallCards = props => {
  return (
    <View style={styles.cityCard}>
      <Image
        style={styles.imageCard}
        source={require('../assets/ernakulam.png')}
      />
      <Text style={{color: 'white'}}>{props.name}</Text>
    </View>
  );
};

const SelectCity = () => {
  const setBusinessFilterObject = useStoreActions(
    actions => actions.setBusinessFilterObject,
  );
  const filterObject = useStoreState(state => state.filterObject);
  // alert(JSON.stringify(filterObject));
  const navigation = useNavigation();
  const setCity = useStoreActions(actions => actions.setCity);
  var [citiesArray, setCityArray] = useState();

  const fetchCity = () => {
    let url = `https://admin.haavoo.com/api/city`;
    axios
      .get(url)
      .then(function (response) {
        // alert(JSON.stringify(response));
        setCityArray(response?.data?.data);
      })
      .catch(function (error) {
        alert(error.message);
      });
  };
  // alert(JSON.stringify(data));

  useEffect(() => {
    fetchCity();
  }, []);

  return (
    <View style={{}}>
      <Text style={styles.mainText}> Popular Cities </Text>
      <View style={styles.mainCard}>
        {citiesArray &&
          citiesArray.map(el => {
            if (el.is_popular === 1) {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setCity(el.name);
                    navigation.navigate('MainPage');
                    filterObject.city = el?.name;
                    setBusinessFilterObject(filterObject);
                  }}
                  style={styles.cardmaindiv}
                  key={el.id}>
                  <SmallCards name={el.name} src="../assets/ernakulam.png" />
                </TouchableOpacity>
              );
            }
          })}
      </View>

      <View style={styles.otherCities}>
        <Text style={styles.otherCitiesText}> Other Cities </Text>
        {citiesArray?.map((item, key) => (
          <TouchableOpacity
            onPress={() => {
              setCity(item?.name);
              navigation.navigate('MainPage');
              filterObject.city = item?.name;
              setBusinessFilterObject(filterObject);
            }}
            key={key}>
            <Text key={key} style={styles.TextStyle}>
              {item?.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SelectCity;

const styles = StyleSheet.create({
  mainText: {
    fontSize: 22,
    paddingLeft: 10,
    color: 'white',
  },
  mainCard: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
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
  imageCard: {
    width: 50,
    height: 50,
    resizeMode: 'center',
  },
  otherCities: {
    paddingLeft: 10,
    paddingTop: 20,
  },
  otherCitiesText: {
    fontSize: 20,
    color: 'white',
  },
  TextStyle: {
    fontSize: 16,
    padding: 5,
    color: 'white',
  },
  cardmaindiv: {
    minHeight: 150,
    width: '33%',
  },
});
