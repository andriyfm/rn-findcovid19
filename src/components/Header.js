import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header__title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1D2A50',
    textTransform: 'capitalize',
  },
  header__date: {
    fontSize: 14,
    color: '#aaa',
  },
});

/**
 * HEADER
 * @param {*} props
 */
const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.header__title}>{title}</Text>
      <Text style={styles.header__date} muted>
        03 March 2020
      </Text>
    </View>
  );
};

export default Header;
