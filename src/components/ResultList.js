import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  resultList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: -5,
    backgroundColor: '#003CBF',
    padding: 15,
  },

  itemCard: {
    width: '47%',
    backgroundColor: '#265AD2',
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
    width: 8,
    height: 8,
    backgroundColor: '#FDDA2D',
    borderRadius: 2,
  },
  itemCard__title: {
    fontSize: 12,
    color: 'white',
    textTransform: 'capitalize',
  },
  itemCard__amount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  itemCard__extra: {
    marginLeft: 4,
    fontSize: 10,
    color: 'white',
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
            color="#FDDA2D"
            title={item.name}
            amount={item.total}
          />
        ))}
    </View>
  );
}
