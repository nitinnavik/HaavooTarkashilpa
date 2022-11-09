import {Image, StyleSheet, Text, View} from 'react-native';

export const SmallCardDeals = props => {
  return (
    <View style={styles.cityCard} key={props.item.id}>
      <View>
        <Image
          style={styles.imageCard}
          source={require('../assets/photo.jpg')}
        />
      </View>
      <View style={{marginLeft: 15, flex: 1}}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          {props?.item?.title}
        </Text>
        <Text style={{color: 'green'}}>
          Offer ends on {props?.item?.endingDate}
        </Text>
        <Text style={{color: 'white'}}>{props?.item?.brand}</Text>
        <Text style={{color: 'white'}}>{props?.item?.category}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cityCard: {
    borderWidth: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderColor: 'gray',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    flexDirection: 'row',
    flex: 1,
  },
  imageCard: {
    width: 100,
    height: 100,
    borderRadius: 16,
    overflow: 'hidden',
  },
});
