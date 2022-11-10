import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {SmallCardBusiness} from './small_cards_business';
import axios from 'react-native-axios';

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
