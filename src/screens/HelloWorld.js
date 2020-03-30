import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const HelloWorld = () => {
  return (
    <View style={styles.container}>
      <Text p muted>
        Hi, I'm a Galio component
      </Text>
    </View>
  );
};

export default HelloWorld;
