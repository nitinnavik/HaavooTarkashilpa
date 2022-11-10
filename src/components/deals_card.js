import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import Loader from './loader';
import {SmallCardDeals} from './small_cards_deals';
import axios from 'react-native-axios';

const DealsCards = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchBusiness = async () => {
    await axios
      .get(
        'https://admin.haavoo.com/api/deals?city=kozhikode&area=&query=&page=1&type=&category=&sort=&pageSize=',
      )
      .then(function (response) {
        // alert(JSON.stringify(response?.data?.data));
        setData(response?.data?.data);
        setLoading(false);
      })
      .catch(function (error) {
        alert(error.message);
        setLoading(false);
      });
  };
  // alert(JSON.stringify(data));

  useEffect(() => {
    fetchBusiness();
  }, []);
  return (
    <View style={{flex: 1}}>
      {isLoading ? (
        <Loader />
      ) : (
        <FlatList
          data={data}
          renderItem={SmallCardDeals}
          keyExtractor={item => item.id}
          style={{marginHorizontal: 10, marginVertical: 20}}
        />
      )}
    </View>
  );
};

export default DealsCards;

const styles = StyleSheet.create({});
