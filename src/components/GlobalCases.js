import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {PieChart} from 'react-native-svg-charts';
import NumberFormat from 'react-number-format';

const styles = StyleSheet.create({
  globalCases: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    // width: '90%',
    flex: 1,
    marginBottom: 0,
    paddingBottom: 0,
  },
  globalCases__pieChart: {
    flex: 2,
    alignSelf: 'center',
    height: 200,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  globalCases__chartDetail: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  globalCases__item: {
    flexDirection: 'row',
    width: '30%',
    marginHorizontal: 10,
    backgroundColor: '#E5EBF9',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  globalCases__lilbar: {
    borderRadius: 2,
    backgroundColor: 'black',
    marginTop: 2,
    marginRight: 10,
    width: 10,
    height: 24,
  },
  globalCases__label: {
    fontSize: 10,
    textTransform: 'uppercase',
    color: '#2C3B5E',
  },
  globalCases__value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C3B5E',
  },
});

/**
 * GLOBAL CASE ITEM
 * @param {*} props
 */
export const GlobalCaseItem = props => {
  const label = props.label ? props.label : 'Label';
  const amount = props.amount ? props.amount : '0';

  return (
    <View style={styles.globalCases__item}>
      <View
        style={[styles.globalCases__lilbar, {backgroundColor: props.color}]}
      />
      <View>
        <Text style={styles.globalCases__label}>{label}</Text>
        <NumberFormat
          value={amount}
          displayType={'text'}
          thousandSeparator={'.'}
          decimalSeparator={','}
          renderText={value => (
            <Text style={styles.globalCases__value}>{value}</Text>
          )}
        />
      </View>
    </View>
  );
};

/**
 * GLOBAL CASES
 * @param {*} props
 */
export default function GlobalCases({dataIndo}) {
  const pieData = dataIndo
    .filter(el => el.val > 0)
    .map((el, index) => {
      return {
        value: el.val,
        svg: {fill: el.color},
        key: `pie-${index}`,
      };
    });

  return (
    <View style={styles.globalCases}>
      <PieChart
        style={styles.globalCases__pieChart}
        data={pieData}
        innerRadius={50}
        outerRadius={80}
      />
      <View style={styles.globalCases__chartDetail}>
        {dataIndo.map((item, i) => {
          return (
            <GlobalCaseItem
              key={i.toString()}
              color={item.color}
              label={item.label}
              amount={item.val}
            />
          );
        })}
      </View>
    </View>
  );
}
