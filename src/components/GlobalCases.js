import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {PieChart} from 'react-native-svg-charts';
import NumberFormat from 'react-number-format';

const styles = StyleSheet.create({
  globalCases: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    marginTop: 20,
    marginBottom: 0,
    paddingBottom: 0,
  },
  globalCases__pieChart: {
    flex: 2,
    alignSelf: 'flex-start',
    height: 200,
  },
  globalCases__chartDetail: {
    flex: 1,
  },
  globalCases__item: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  globalCases__lilbar: {
    borderRadius: 2,
    backgroundColor: 'black',
    marginTop: 6,
    marginRight: 6,
    width: 20,
    height: 6,
  },
  globalCases__label: {
    textTransform: 'capitalize',
  },
  globalCases__value: {
    fontWeight: 'bold',
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
        innerRadius={60}
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
