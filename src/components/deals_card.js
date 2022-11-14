import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {ListEmptyView} from './nodatafound';
import Loader from './loader';
import {SmallCardDeals} from './small_cards_deals';
import SortByDialog from '../dialogs/sortby_dialog';
import axios from 'react-native-axios';
import {useStoreState} from 'easy-peasy';

const DealsCards = ({show, onClose}) => {
  let filterObject = useStoreState(state => state.filterObject);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const searchQuery = useStoreState(state => state.searchQuery);

  const fetchBusiness = async () => {
    let url = `https://admin.haavoo.com/api/deals`;

    await axios
      .get(url, {
        params: filterObject,
      })
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
  }, [filterObject, show, onClose]);

  return (
    <View style={{flex: 1}}>
      <SortByDialog show={show} onClose={onClose} />
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
