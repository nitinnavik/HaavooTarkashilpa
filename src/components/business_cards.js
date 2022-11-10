import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {SmallCardBusiness} from './small_cards_business';
import axios from 'react-native-axios';
import {fetchBusiness} from '../API/api';

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
const BusinessCards = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchBusiness = async () => {
    await axios
      .get(
        'https://admin.haavoo.com/api/business?city=ernakulam&area=&search_query=&page=1&type=&category=&sort=',
      )
      .then(function (response) {
        // handle success
        // alert(JSON.stringify(response.data));
        setData(response?.data?.data?.data);
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      });
  };
  // alert(JSON.stringify(data));

  useEffect(() => {
    fetchBusiness();
  }, []);
  return (
    <FlatList
      data={data}
      renderItem={SmallCardBusiness}
      keyExtractor={item => item.id}
      style={{marginHorizontal: 10, marginVertical: 20}}
    />
  );
};

export default BusinessCards;

const styles = StyleSheet.create({});
