import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

const DATA=[
  {
    id:'1',
    name:'akshay'
  },
  {
    id:'2',
    name:'selmon'
  },
  {
    id:'3',
    name:'aliya'
  },
  {
    id:'4',
    name:'katrina'
  },
  
]

const Item=({itemPARAM})=>(
    <View style={{backgroundColor:'blue',margin:10}}>
    <Text style={{backgroundColor:'red',fontSize:29}}>{itemPARAM}</Text>
    </View>


);

const App = () => {
  return (
    <View style={styles.container}>
      <Text> FlatList</Text>
     <FlatList
     data={DATA}
     renderItem={({item}) => <Item itemPARAM={item.name} />}
     keyExtractor={item => item.id}
     />
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
