import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';

import Header from '../components/Header';
import ResultList from '../components/ResultList';
import GlobalCases from '../components/GlobalCases';
import NoData from '../components/NoData';

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

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
});

/**
 * TODAY'S REPORT
 */
export default props => {
  const [provinceData, setProvinceData] = useState();
  const [dataGlobal, setDataGlobal] = useState(DATA_DUMMY);
  const [dataIndo, setDataIndo] = useState(DATA_DUMMY);

  /**
   * Fetch Province Data
   */
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

  /**
   * Fetch Data Indonesia
   */
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

  /**
   * Fetch Data Global
   * @param {*} name
   * @param {*} color
   */
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

  /**
   * Fetch All Data Global
   */
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
        <Header title="today's report" />
        <GlobalCases dataIndo={dataIndo} />
      </View>
      <ResultList provinceData={provinceData} />
    </ScrollView>
  );
};
