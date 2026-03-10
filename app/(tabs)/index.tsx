import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function HomeScreen() {
  const [text, onChangeText] = React.useState('Enter URL');
  return (
    <View style={styles.containerColumn}>
      <View style={styles.containerRow}>
        <TextInput
          placeholder="Type here..."
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Button
          title = "Click Me"
          onPress={() => alert('It works!' + text)}
        />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  containerColumn: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 40
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    justifyContent: 'center',
    height: 40,
    borderColor: 'gray',
  },

});
