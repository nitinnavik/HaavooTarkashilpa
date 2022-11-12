import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { ListEmptyView } from './nodatafound';
import Loader from './loader';
import {SmallCardBusiness} from './small_cards_business';
import axios from 'react-native-axios';

const BusinessCards = () => {
  let city = useStoreActions((actions) => actions.city);
  if(!city){
      city=''
    }
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
   const searchQuery = useStoreState((state) => state.searchQuery);
  //  alert(JSON.stringify(searchQuery))
  const fetchBusiness = async () => {
    let url;
    if(!searchQuery === null || !searchQuery === "" ){
      url = `https://admin.haavoo.com/api/business?city=${city}&area=&search_query=&page=1&type=&category=&sort=`;
    }else{
           url = `https://admin.haavoo.com/api/business?city=${city}&area=&search_query=${searchQuery}&page=1&type=&category=&sort=`;
    }
    alert(JSON.stringify(url))
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
  }, [searchQuery]);
  
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
          ListEmptyComponent={ListEmptyView}
        />
      )}
    </View>
  );
};

export default BusinessCards;

const styles = StyleSheet.create({});
