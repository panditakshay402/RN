import React ,{useState} from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const App = () => {

  const [name, setName]= useState ('Akshay');
  const clickHandler =()=>{
    setName('Pandit');
  }

  return (
    <View style={styles.container}>
     <Text>This is {name}</Text>
     <View>
     <Button title='click here' onPress={clickHandler}/>
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 90,
  },
});

export default App;
