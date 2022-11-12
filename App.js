import {StyleSheet, View} from 'react-native';

import BusinessDealsPage from './src/pages/main_page';
import LandingPage from './src/pages/landing_page';
import LinearGradient from 'react-native-linear-gradient';
import MainPage from './src/pages/main_page';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import SelectCityPage from './src/pages/landing_page';
import Store from './src/store-models/index';
import { StoreProvider } from 'easy-peasy';
import { Text } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useState} from 'react';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const App = () => {
  return (
  <StoreProvider store={Store}>
     <NavigationContainer style={styles.background}>
      <Stack.Navigator>
        <Stack.Screen name="LandingPage"  component={LandingPage} options={{header: () => null}} />
        <Stack.Screen name="MainPage"  component={MainPage} options={{header: () => null}} />
      </Stack.Navigator>
    </NavigationContainer>
   </StoreProvider>

  );
};
export default App;

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
  },
});
