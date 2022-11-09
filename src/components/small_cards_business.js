import {Image, StyleSheet, Text, View} from 'react-native';

export const SmallCardBusiness = props => {
  console.log(props.item);
  return (
    <View style={styles.cityCard} key={props.item.id}>
      <View>
        <Image
          source={require('../assets/photo.jpg')}
          style={styles.imageCard}
        />
      </View>
      <View style={{marginLeft: 15, width: '100%', flex: 1}}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          {props?.item?.title}
        </Text>
        <Text style={{color: '#7f7e7e'}}>Category : {props?.item?.title}</Text>
        <Text style={{color: '#7f7e7e'}}>Area : {props?.item?.title}</Text>
        <Text
          style={{
            color: '#7f7e7e',
          }}>
          {props?.item?.description}
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
  },
  imageCard: {
    width: 100,
    height: 100,
    borderRadius: 16,
    overflow: 'hidden',
  },
});
