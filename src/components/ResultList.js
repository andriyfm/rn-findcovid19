import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  resultList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 15,
    marginHorizontal: -5,
  },

  itemCard: {
    width: '47%',
    backgroundColor: 'white',
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
        <Text style={styles.itemCard__extra}>orang</Text>
      </View>
    </View>
  );
};

/**
 * RESULT LIST
 * @param {*} props
 */
export default function ResultList({provinceData}) {
  return (
    <View style={styles.resultList}>
      {provinceData &&
        provinceData.map(item => (
          <ResultItemCard
            key={item.id}
            color="#CDCCFF"
            title={item.name}
            amount={item.total}
          />
        ))}
    </View>
  );
}
