import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Enter email/Phone No</Text>
      <TextInput style={styles.inputText}/>
      <Text>Enter Password</Text>
      <TextInput style={styles.inputText}/>
      <Button title='Login'/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    // backgroundColor:'red',
  }
  ,
  inputText:{
    width:300,
    height:40,
    borderColor:'black',
    borderWidth:2,
    borderRadius:5,
  },

})