import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';

const TextInputComponent = () => {
  // const [text, setText] = useState('');

  return (
    // <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.label}>Enter Here</Text>
        <TextInput
          style={styles.inputText}
          // placeholder='Enter here'
          // value={text}
          // onChangeText={setText}
        />
      </View>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  label: {
    marginBottom: 8,
    fontSize: 18,
    color: '#333',
  },
  inputText: {
    width: 200,
    height: 40,
    // borderColor: '#ccc',
    borderWidth: 1,
    // paddingHorizontal: 8,
    // borderRadius: 4,
  },
});

export default TextInputComponent;
