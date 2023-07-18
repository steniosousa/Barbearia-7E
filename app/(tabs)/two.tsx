import { Image, ImageBackground, StyleSheet } from 'react-native';
import BarberCalendar from '../../components/calendar';

import { Text, View } from '../../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/images/corteX.jpg')} style={styles.cardBackground} >
        <View style={styles.cardContent}>
          <Text style={styles.serviceName}>Corte Social</Text>
          <Text style={styles.serviceValue}>R$ 30,00</Text>
        </View>
      </ImageBackground>
      <View style={styles.stars}></View>
      <BarberCalendar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  cardBackground: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8
  },
  cardContent: {
    backgroundColor: 'transparent',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    position: 'absolute',
    bottom: 10,
  },
  serviceName: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    fontFamily: 'Roboto-Bold',


  },
  serviceValue: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  stars: {
    backgroundColor: 'grey',
    height: 30,
    width: '100%',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  }
});
