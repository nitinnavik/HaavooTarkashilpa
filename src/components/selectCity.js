import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import React from 'react';

const SelectCity = () => {
  var citiesArray = [
    'Alappuzha',
    'Idukki',
    'Kannur',
    'Kasargod',
    'kollam',
    'kottayam',
    'palakkad',
    'pathanamthitta',
    'wayanad',
  ];

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

  return (
    <View>
      <Text style={styles.mainText}> Popular Cities </Text>
      <View style={styles.mainCard}>
        {cardList &&
          cardList.map(el => {
            return (
              <View style={{width: '33%', minHeight: 120}}>
                <SmallCards
                  key={el.id}
                  name={el.name}
                  src="../assets/ernakulam.png"
                />
              </View>
            );
          })}
      </View>

      <View style={styles.otherCities}>
        <Text style={styles.otherCitiesText}> Other Cities </Text>
        {citiesArray.map((item, key) => (
          <Text key={key} style={styles.TextStyle}>
            {item}
          </Text>
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
    borderColor: '#666666',
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
});
