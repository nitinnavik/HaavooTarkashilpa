import {ScrollView, StyleSheet, Text, View} from 'react-native';

import HaavooCityPage from '../components/haavoocitypage';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import Search from '../components/search';
import SelectCity from '../components/selectCity';
import {useNavigation} from '@react-navigation/native';
import {useStoreActions} from 'easy-peasy';

const LandingPage = props => {
  const navigation = useNavigation();

  const city = useStoreActions(actions => actions.city);

  if (city) {
    navigation.navigate('MainPage');
  }

  return (
    <LinearGradient colors={['#7d0202', 'black']} style={styles.linearGradient}>
      <HaavooCityPage />
      <View style={{margin: 20}}>
        <Search />
      </View>
      <ScrollView style={styles.scrollView}>
        <SelectCity props={props.navigation} />
      </ScrollView>
    </LinearGradient>
  );
};
export default LandingPage;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 10,
  },
  linearGradient: {
    height: '100%',
  },
});
