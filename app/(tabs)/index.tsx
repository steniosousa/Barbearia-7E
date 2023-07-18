import { Image, ScrollView, StyleSheet } from 'react-native';
import BarberServiceCard from '../../components/Cards';
import Select from '../../components/selects';

import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.selects}>
        <Select Value={'Barba'} />
        <Select Value={'Cabelo'} />
        <Select Value={'Sombrancelha'} />
      </View>
      <ScrollView style={styles.home} showsVerticalScrollIndicator={false}>
        <BarberServiceCard
          service="Corte de Cabelo"
          value={30}
          backgroundImage={require('../../assets/images/barbeiro.png')}
        />
        <BarberServiceCard
          service="Corte de barba"
          value={30}
          backgroundImage={require('../../assets/images/barba.jpg')}
        />
        <BarberServiceCard
          service="Corte de barba"
          value={30}
          backgroundImage={require('../../assets/images/corteX.jpg')}
        />
      </ScrollView>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  selects: {
    display: 'flex',
    flexDirection: 'row',
    height: 40,
    gap: 2,
  },
  home: {
    margin: 10,
    marginTop: 40,
    width: '100%'
  }
});
