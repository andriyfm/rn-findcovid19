import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {PieChart} from 'react-native-svg-charts';
import NumberFormat from 'react-number-format';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
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

const DATA_DUMMY = [
  {
    label: 'total cases',
    val: 55,
    color: '#2456C9',
  },
  {
    label: 'confirmed',
    val: 50,
    color: '#06CAFD',
  },
  {
    label: 'deaths',
    val: 50,
    color: '#FF5B4C',
  },
  {
    label: 'recovered',
    val: 50,
    color: '#ECB334',
  },
];

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
export const ResultList = ({provinceData}) => {
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
        <Text style={styles.itemCard__extra}>orang</Text>
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
export const GlobalCases = ({dataIndo}) => {
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
};

/**
 * NO DATA
 * @param {*} props
 */
export const NoData = props => {
  return (
    <View style={styles.noData}>
      <Text style={styles.noData__title}>No data</Text>
      <Text style={styles.noData__desc}>
        Please check your internet connection
      </Text>
    </View>
  );
};

/**
 * TODAY'S REPORT
 */
export default props => {
  const [provinceData, setProvinceData] = useState();
  const [dataGlobal, setDataGlobal] = useState(DATA_DUMMY);
  const [dataIndo, setDataIndo] = useState(DATA_DUMMY);

  const fetchProvinceData = async () => {
    const res = await fetch('https://api.kawalcorona.com/indonesia/provinsi');
    const json = await res.json();
    const mappedData = json.map(el => {
      const item = el.attributes;
      return {
        id: item.FID,
        name:
          item.Provinsi.length > 20
            ? `${item.Provinsi.slice(0, 22)}...`
            : item.Provinsi,
        positif: item.Kasus_Posi,
        sembuh: item.Kasus_Semb,
        meninggal: item.Kasus_Meni,
        total: item.Kasus_Posi + item.Kasus_Semb + item.Kasus_Meni,
      };
    });

    setProvinceData(mappedData);
  };

  const fetchDataIndonesia = async () => {
    const response = await fetch('https://api.kawalcorona.com/indonesia');
    const json = await response.json();
    const result = json[0];
    setDataIndo([
      {
        label: 'positif',
        val: parseInt(result.positif.replace(',', ''), 10),
        color: '#06CAFD',
      },
      {
        label: 'sembuh',
        val: parseInt(result.sembuh.replace(',', ''), 10),
        color: '#ECB334',
      },
      {
        label: 'meninggal',
        val: parseInt(result.meninggal.replace(',', ''), 10),
        color: '#FF5B4C',
      },
    ]);
  };

  const fetchDataGlobal = async (name, color) => {
    try {
      const res = await fetch(`https://api.kawalcorona.com/${name}`);
      const json = await res.json();
      return Promise.resolve({
        val: parseInt(json.value.replace(',', ''), 10),
        label: name,
        color: color,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAll = () => {
    Promise.all([
      fetchDataGlobal('positif', '#06CAFD'),
      fetchDataGlobal('meninggal', '#FF5B4C'),
      fetchDataGlobal('sembuh', '#ECB334'),
    ]).then(res => {
      setDataGlobal(res);
    });
  };

  useEffect(() => {
    fetchAll();
    fetchDataIndonesia();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchProvinceData();
  }, []);

  if (!provinceData) {
    return <NoData />;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <GlobalCases dataIndo={dataIndo} />
        <ResultList provinceData={provinceData} />
      </View>
    </ScrollView>
  );
};
