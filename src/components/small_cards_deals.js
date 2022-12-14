import {Image, StyleSheet, Text, View} from 'react-native';

export const SmallCardDeals = props => {
  // alert(JSON.stringify(props.item));
  return (
    <View style={styles.cityCard} key={props?.item?.id}>
      <View key={props?.item?.id}>
        <Image
          style={styles.imageCard}
          source={{uri:`${props?.item?.thumbImage}`}}
        />
      </View>
      <View style={{marginLeft: 15, flex: 1}} key={props?.item?.id}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          {props?.item?.title}
        </Text>
        <Text style={{color: 'green'}}>
          Offer ends on {props?.item?.endingDate}
        </Text>
        <Text style={{color: '#7f7e7e'}}>
          {props?.item?.business?.businessName}
        </Text>
        <Text style={{color: '#7f7e7e'}}>
          {props?.item?.categories[0]?.name}
        </Text>
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
    marginHorizontal: 5,
  },
  imageCard: {
    width: 100,
    height: 100,
    borderRadius: 16,
    overflow: 'hidden',
  },
});
