import {FlatList, StyleSheet, Text, View} from 'react-native';

import React from 'react';
import {SmallCardDeals} from './small_cards_deals';

const DATA = [
  {
    id: 1,
    title: 'First Item',
    category: 'Clothes',
    endingDate: '12 November',
    brand: 'H&M',
    src: '../assets/photo.jpg',
  },
  {
    id: 2,
    title: 'Second Item',
    category: 'Clothes',
    endingDate: '12 November',
    brand: 'Service',
    src: '../assets/photo.jpg',
  },
  {
    id: 3,
    title: 'Third Item',
    category: 'IT',
    endingDate: '12 November',
    brand: 'Service',
    src: '../assets/photo.jpg',
  },
  {
    id: 4,
    title: 'Fourth Item',
    category: 'Dream',
    endingDate: '12 November',
    brand: 'Service',
    src: '../assets/photo.jpg',
  },
  {
    id: 5,
    title: 'Fifth Item',
    category: 'Tours/Travels',
    endingDate: '12 November',
    brand: 'Service',
    src: '../assets/photo.jpg',
  },
  {
    id: 6,
    title: 'Sixth Item',
    category: 'Tours/Travels',
    endingDate: '12 November',
    brand: 'Service',
    src: '../assets/photo.jpg',
  },
];
const DealsCards = () => {
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={SmallCardDeals}
        keyExtractor={item => item.id}
        style={{marginHorizontal: 10, marginVertical: 20}}
      />
    </View>
  );
};

export default DealsCards;

const styles = StyleSheet.create({});
