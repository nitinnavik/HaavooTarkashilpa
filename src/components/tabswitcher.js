import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useStoreActions, useStoreState} from 'easy-peasy';

import BusinessCards from './business_cards';
import DealsCards from './deals_card';
import Modal from 'react-native-modal';
import Search from './search';
import SortByDialog from '../dialogs/sortby_dialog';
import {useNavigation} from '@react-navigation/native';

const TabSwitcher = () => {
  let filterObject = useStoreState(state => state.filterObject);

  const navigation = useNavigation();
  const city = useStoreState(state => state.city);
  const setCity = useStoreActions(actions => actions.setCity);
  const [tabSwitch, setTabSwitch] = useState(true);
  const [showSortDialog, setShowSortDialog] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const handleSortView = () => {
    setShowSortDialog(!showSortDialog);
  };

  useEffect(() => {}, [filterObject]);

  return (
    <View style={{flexDirection: 'column', flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('LandingPage', {name: 'Jane'});
        }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <Text style={styles.cityText}>{city ? city : 'Select City'}</Text>
        <Image
          style={styles.homeimg3}
          source={require('../assets/downarrow.png')}
        />
      </TouchableOpacity>
      <View style={{marginVertical: 20, marginHorizontal: 15}}>
        <Search />
      </View>
      <View style={styles.tabsMain}>
        <Text
          style={tabSwitch === true ? styles.yellowBg : styles.tabSection}
          onPress={() => setTabSwitch(true)}>
          Business
        </Text>
        <Text
          style={tabSwitch === false ? styles.yellowBg : styles.tabSection}
          onPress={() => setTabSwitch(false)}>
          Deals
        </Text>
      </View>
      <View style={{flex: 1}}>
        {tabSwitch && (
          <BusinessCards
            show={showSortDialog}
            onClose={handleSortView}
            showFilter={showFilter}
            setShowFilter={setShowFilter}
          />
        )}
        {tabSwitch === false && (
          <DealsCards
            show={showSortDialog}
            onClose={handleSortView}
            showFilter={showFilter}
            setShowFilter={setShowFilter}
          />
        )}
      </View>
      {/* <SortByDialog show={showSortDialog} onClose={handleSortView} /> */}

      <View style={styles.filterbtn}>
        <TouchableOpacity onPress={() => setShowSortDialog(!showSortDialog)}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              fontWeight: 'bold',
              minWidth: '50%',
              textAlign: 'center',
              marginVertical: 20,
              marginTop: 0,
            }}>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>↕</Text> Sort By
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowFilter(!showFilter)}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              fontWeight: 'bold',
              minWidth: '50%',
              textAlign: 'center',
              marginVertical: 20,
              marginTop: 0,
            }}>
            Filter
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default TabSwitcher;

const styles = StyleSheet.create({
  tabsMain: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
    flex: 0,
  },
  tabSection: {
    borderColor: '#fff',
    borderWidth: 1,
    padding: 8,
    margin: 2,
    color: '#000',
    fontWeight: '600',
    fontSize: 20,
    borderRadius: 50,
    flex: 1,
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  noDeals: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  yellowBg: {
    backgroundColor: '#FAA41A',
    borderColor: '#FAA41A',
    borderWidth: 1,
    padding: 8,
    margin: 2,
    color: '#fff',
    fontWeight: '600',
    fontSize: 20,
    borderRadius: 50,
    flex: 1,
    textAlign: 'center',
  },
  cityCard: {
    borderWidth: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderColor: 'gray',
    borderRadius: 10,
    padding: 20,
    flexDirection: 'row',
  },
  imageCard: {
    height: 120,
    width: 120,
  },
  filterbtn: {
    backgroundColor: '#232222',
    textAlign: 'center',
    flexDirection: 'row',
    marginTop: -20,
    paddingTop: 15,
  },
  homeimg3: {
    width: 20,
    height: 20,
    marginTop: 5,
    marginLeft: 10,
  },
  cityText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});
