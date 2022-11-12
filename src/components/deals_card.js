import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import { ListEmptyView } from './nodatafound';
import Loader from './loader';
import {SmallCardDeals} from './small_cards_deals';
import axios from 'react-native-axios';
import { useStoreState } from 'easy-peasy';

const DealsCards = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const searchQuery = useStoreState((state) => state.searchQuery);

  const fetchBusiness = async () => {
    let url;
       if(searchQuery === null || searchQuery === ""){
      url = `https://admin.haavoo.com/api/deals?city=kozhikode&area=&query=&page=1&type=&category=&sort=&pageSize=`;
    }else{
           url = `https://admin.haavoo.com/api/deals?city=kozhikode&area=&query=${searchQuery}&page=1&type=&category=&sort=&pageSize=`;
    }
    // alert(JSON.stringify(url));

    await axios
      .get(url)
      .then(function (response) {
        // alert(JSON.stringify(response?.data));
        setData(response?.data?.data);
        setLoading(false);
      })
      .catch(function (error) {
        // alert(error.message);
        setLoading(false);
      });
  };

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
          renderItem={SmallCardDeals}
          keyExtractor={item => item.id}
          style={{marginHorizontal: 10, marginVertical: 20}}
          ListEmptyComponent={ListEmptyView}
        />
      )}
    </View>
  );
};

export default DealsCards;

const styles = StyleSheet.create({});
