import { Text } from 'react-native';
import { View } from 'react-native';

export  const ListEmptyView = () => {
    return (
      <View >
        <Text style={{textAlign: 'center',fontSize:18 , color:'white',fontWeight:'bold',marginTop:50}}> Sorry, No Data Found.....</Text>
      </View>
    );
  }