import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import React from 'react';

const TabSwitcher = () => {
  const DATA = [
    {
      id: 1,
      title: 'First Item',
      category: 'Tours/Travels',
      area: 'Vennala',
      description:
        'Service available for or business, leisure, or medical reasons -Taxi service with experienced drive',
      src: '../assets/photo.jpg',
    },
    {
      id: 2,
      title: 'Second Item',
      category: 'Tours/Travels',
      area: 'Vennala',
      description:
        'HOME TUITION IN THRISSUR- ICSE, CBSE, STATE BOARD, NIOS- ALL SUBJECTS',
      src: '../assets/photo.jpg',
    },
    {
      id: 3,
      title: 'Third Item',
      category: 'Tours/Travels',
      area: 'Vennala',
      description: 'House of Highgine, Mask and other Highgine Products',
      src: '../assets/photo.jpg',
    },
    {
      id: 4,
      title: 'Fourth Item',
      category: 'Tours/Travels',
      area: 'Vennala',
      description: 'House of Highgine, Mask and other Highgine Products',
      src: '../assets/photo.jpg',
    },
    {
      id: 5,
      title: 'Fifth Item',
      category: 'Tours/Travels',
      area: 'Vennala',
      description: 'House of Highgine, Mask and other Highgine Products',
      src: '../assets/photo.jpg',
    },
    {
      id: 6,
      title: 'Sixth Item',
      category: 'Tours/Travels',
      area: 'Vennala',
      description: 'House of Highgine, Mask and other Highgine Products',
      src: '../assets/photo.jpg',
    },
  ];
  const SmallCards = props => {
    console.log(props.item);
    return (
      <View style={styles.cityCard} key={props.item.id}>
        <View>
          <Image
            style={styles.imageCard}
            source={require('../assets/photo.jpg')}
            resizeMode="cover"
          />
        </View>
        <View style={{marginLeft: 30, width: '100%'}}>
          <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
            {props?.item?.title}
          </Text>
          <Text style={{color: '#7f7e7e'}}>
            Category : {props?.item?.title}
          </Text>
          <Text style={{color: '#7f7e7e'}}>Area : {props?.item?.title}</Text>
          <Text
            style={{
              color: '#7f7e7e',
              width: '56%',
            }}>
            {props?.item?.description}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={styles.tabsMain}>
        <Text style={styles.tabSection}>Business</Text>
        <Text style={styles.tabSection}>Deals</Text>
      </View>
      <View style={{marginHorizontal: 10, marginVertical: 20}}>
        <FlatList
          data={DATA}
          renderItem={SmallCards}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
};
export default TabSwitcher;

const styles = StyleSheet.create({
  tabsMain: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  tabSection: {
    borderColor: '#fff',
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 5,
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
    borderRadius: 50,
    height: 50,
    width: '48%',
    textAlign: 'center',
  },
  cityCard: {
    borderWidth: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderColor: 'gray',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    flexDirection: 'row',
  },
  imageCard: {
    height: 120,
    width: 120,
  },
});
