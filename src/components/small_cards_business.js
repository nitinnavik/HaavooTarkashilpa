import {Image, StyleSheet, Text, View} from 'react-native';

export const SmallCardBusiness = props => {
  const regex = /(<([^>]+)>)/gi;
  const temp = props?.item?.description.replace(regex, '');
  var desc = temp.replace(/&nbsp;/g, '');
  return (
    <View style={styles.cityCard} key={props?.item?.id}>
      <View>
        <Image source={{uri:`https://admin.haavoo.com/app-images/${props?.item?.thumb_image}`}} style={styles.imageCard} />
      </View>
      <View style={{marginLeft: 15, width: '100%', flex: 1}}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          {props?.item?.business_name}
        </Text>
        <Text style={{color: '#7f7e7e'}}>
          Category : {props?.item?.categories[0]?.name}
        </Text>
        <Text style={{color: '#7f7e7e'}}>
          Area : {props?.item?.areas[0]?.name}
        </Text>
        <Text
        style={{color: '#7f7e7e'}}
        numberOfLines={3} >
          {desc}
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
    marginHorizontal: 5,
    flexDirection: 'row',
    flex: 1,
    minHeight:160,
  },
  imageCard: {
    width: 100,
    height: 100,
    borderRadius: 16,
    overflow: 'hidden',
  },

});
