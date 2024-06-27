import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Image 1</Text>
      <Image
        style={styles.image}
        source={{ uri: 'https://reactnative.dev/img/header_logo.svg' }}
      />
      <Text>Image 2</Text>
      <Image
        style={styles.image}
        source={require('./assets/img/logo1.png') }
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
