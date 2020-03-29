import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Text, Block} from 'galio-framework';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header__title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#646464',
  },
  header__date: {
    fontSize: 14,
  },

  resultList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 30,
    marginHorizontal: -5,
  },

  itemCard: {
    width: '47%',
    borderWidth: 1,
    borderColor: '#F0F2F3',
    borderRadius: 3,
    padding: 10,
    margin: 5,
  },
  itemCard__header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemCard__body: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemCard__lilBox: {
    marginRight: 5,
    width: 10,
    height: 10,
    backgroundColor: '#003CBF',
    borderRadius: 2,
  },
  itemCard__title: {
    fontSize: 12,
    textTransform: 'capitalize',
    color: '#646464',
  },
  itemCard__amount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemCard__extra: {
    fontSize: 12,
    marginLeft: 4,
  },
});

/**
 * HEADER
 * @param {*} props
 */
export const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.header__title}>Today's Report</Text>
      <Text style={styles.header__date} muted>
        03 March 2020
      </Text>
    </View>
  );
};

/**
 * RESULT LIST
 * @param {*} props
 */
export const ResultList = props => {
  return (
    <View style={styles.resultList}>
      <ResultItemCard color="#FF5B4C" title="recovered" amount="4000" />
      <ResultItemCard color="#0134A2" title="deaths" amount="4000" />
      <ResultItemCard color="#ECB334" title="confirmed" amount="4000" />
      <ResultItemCard color="#CDCCFF" title="total cases" amount="4000" />
    </View>
  );
};

/**
 * RESULT ITEM CARD
 * @param {*} props
 */
export const ResultItemCard = props => {
  const title = props.title ? props.title : 'item title';
  const amount = props.amount ? props.amount : '0';
  const extra = props.extra ? props.value : '0';

  return (
    <View style={styles.itemCard}>
      <View style={styles.itemCard__header}>
        <View
          style={[styles.itemCard__lilBox, {backgroundColor: props.color}]}
        />
        <Text style={styles.itemCard__title}>{title}</Text>
      </View>
      <View style={styles.itemCard__body}>
        <Text style={styles.itemCard__amount}>{amount}</Text>
        <Text style={styles.itemCard__extra}>(+{extra})</Text>
      </View>
    </View>
  );
};

/**
 * TODAY'S REPORT
 */
export default props => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <ResultList />
      </View>
    </ScrollView>
  );
};
