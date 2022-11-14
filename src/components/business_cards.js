import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useStoreActions, useStoreState} from 'easy-peasy';

import {ListEmptyView} from './nodatafound';
import Loader from './loader';
import {SmallCardBusiness} from './small_cards_business';
import axios from 'react-native-axios';

const BusinessCards = () => {
  let filterObject = useStoreState(state => state.filterObject);
  // alert(JSON.stringify(filterObject));
  let city = useStoreActions(actions => actions.city);
  if (!city) {
    city = '';
  }
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const searchQuery = useStoreState(state => state.searchQuery);
  //  alert(JSON.stringify(searchQuery))
  const fetchBusiness = async () => {
    let url = `https://admin.haavoo.com/api/business`;
    await axios
      .get(url, {
        params: filterObject,
      })
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
