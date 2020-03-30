import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  noData: {
    alignContent: 'center',
    alignItems: 'center',
    padding: 30,
    flex: 1,
  },
  noData__title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  noData__desc: {
    fontSize: 13,
    color: 'gray',
  },
});

/**
 * NO DATA
 * @param {*} props
 */
export default props => {
  return (
    <View style={styles.noData}>
      <Text style={styles.noData__title}>No data</Text>
      <Text style={styles.noData__desc}>
        Please check your internet connection
      </Text>
    </View>
  );
};
