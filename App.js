import {StyleSheet, View} from 'react-native';

import BusinessDealsPage from './src/pages/main_page';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import SelectCityPage from './src/pages/landing_page';
import Store from './src/store-models/index';
import { StoreProvider } from 'easy-peasy';
import {useState} from 'react';

const App = () => {
  const [condition, setCondition] = useState(true);

  return (
    <StoreProvider store={Store}>

    <LinearGradient colors={['#7d0202', 'black']} style={styles.linearGradient}>
      {condition ? (
        <BusinessDealsPage condition={condition} setCondition={setCondition} />
      ) : (
        <SelectCityPage condition={condition} setCondition={setCondition} />
      )}
    </LinearGradient>
        </StoreProvider>
  );
};
export default App;

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
  },
});
