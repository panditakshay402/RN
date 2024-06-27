import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const app=()=>{
  return(
      <View style={style.container}>
        <Text>"hello bro"</Text>
      </View>
  );
};

const style=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'red',
  },
});

export default app;
