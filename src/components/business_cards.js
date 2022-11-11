import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import Loader from './loader';
import {SmallCardBusiness} from './small_cards_business';
import axios from 'react-native-axios';

const BusinessCards = (props) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchBusiness = async () => {
    let url = 'https://admin.haavoo.com/api/business?city=kozhikode&area=&search_query=&page=1&type=&category=&sort=';
    if(props?.search){
      url = `https://admin.haavoo.com/api/business?city=kozhikode&area=&search_query=${props?.search}&page=1&type=&category=&sort=`;
    }
    // alert(url)
    await axios
      .get(url)
      .then(function (response) {
        // alert(JSON.stringify(response.data));
        setData(response?.data?.data?.data);
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
          renderItem={SmallCardBusiness}
          keyExtractor={item => item.id}
          style={{marginHorizontal: 10, marginVertical: 20}}
        />
      )}
    </View>
  );
};

export default BusinessCards;

const styles = StyleSheet.create({});
