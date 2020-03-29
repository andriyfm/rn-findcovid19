import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Text} from 'galio-framework';
import {PieChart} from 'react-native-svg-charts';

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
    marginVertical: 15,
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

  globalCases: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 0,
    paddingBottom: 0,
  },
  globalCases__pieChart: {
    flex: 1,
    alignSelf: 'flex-start',
    height: 200,
  },
  globalCases__chartDetail: {
    flex: 1,
    paddingLeft: 30,
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
        <Text style={styles.globalCases__value}>{amount}</Text>
      </View>
    </View>
  );
};

/**
 * GLOBAL CASES
 * @param {*} props
 */
export const GlobalCases = props => {
  const data = [
    {
      label: 'total cases',
      val: 100,
      color: '#2456C9',
    },
    {
      label: 'confirmed',
      val: 50,
      color: '#06CAFD',
    },
    {
      label: 'deaths',
      val: 20,
      color: '#FF5B4C',
    },
    {
      label: 'recovered',
      val: 50,
      color: '#ECB334',
    },
  ];

  const pieData = data
    .filter(value => value.val > 0)
    .map((value, index) => ({
      value: value.val,
      svg: {fill: value.color},
      key: `pie-${index}`,
    }));

  return (
    <View style={styles.globalCases}>
      <PieChart
        style={styles.globalCases__pieChart}
        data={pieData}
        innerRadius={60}
        outerRadius={80}
      />
      <View style={styles.globalCases__chartDetail}>
        {data.map((item, i) => {
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
};

/**
 * TODAY'S REPORT
 */
export default props => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <GlobalCases />
        <ResultList />
      </View>
    </ScrollView>
  );
};
