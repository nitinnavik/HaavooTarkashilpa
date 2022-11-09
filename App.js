import BusinessDealsPage from './src/pages/main_page';
import LinearGradient from 'react-native-linear-gradient';
import SelectCityPage from './src/pages/landing_page';
import {StyleSheet} from 'react-native';
import {useState} from 'react';

const App = () => {
  const [condition, setCondition] = useState(true);

  return (
    <LinearGradient colors={['#7d0202', 'black']} style={styles.linearGradient}>
      {condition ? (
        <BusinessDealsPage condition={condition} setCondition={setCondition} />
      ) : (
        <SelectCityPage condition={condition} setCondition={setCondition} />
      )}
    </LinearGradient>
  );
};
export default App;

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
  },
});
