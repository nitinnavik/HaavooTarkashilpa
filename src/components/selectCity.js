import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import axios from 'react-native-axios';
import { useNavigation } from '@react-navigation/native';

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
  const city = useStoreActions((actions) => actions.city);

  const navigation = useNavigation();
  //  const city = useStoreState((state) => state.city);
  const setCity = useStoreActions((actions) => actions.setCity);
  var [citiesArray,setCityArray] = useState();
        // alert(JSON.stringify(citiesArray));

  let cardList = [
    {
      id: 1,
      name: 'Ernakulam',
      src: '../assets/ernakulam.png',
    },
    {
      id: 2,
      name: 'kozhikode',
      src: '../assets/ernakulam.png',
    },
    {
      id: 3,
      name: 'Malappuram',
      src: '../assets/ernakulam.png',
    },
    {
      id: 4,
      name: 'Whiruvant Hapuram',
      src: '../assets/ernakulam.png',
    },
    {
      id: 5,
      name: 'Thirissur',
      src: '../assets/ernakulam.png',
    },
  ];


  
   const fetchCity = () => {
    let url = `https://admin.haavoo.com/api/city`;
     axios
      .get(url)
      .then(function (response) {
        // alert(JSON.stringify(response));
        setCityArray(response?.data?.data)
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
        { citiesArray&&
          citiesArray.map(el => {
            if(el.is_popular === 1){
              return (
              <TouchableOpacity
                onPress={() => {setCity(el.name)
                navigation.navigate('MainPage')
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
                onPress={() => {setCity(item?.name)
                navigation.navigate('MainPage')
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
